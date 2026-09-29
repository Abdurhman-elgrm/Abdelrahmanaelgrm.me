# Building the Floating Album Covers Music Component

This guide walks you through building the interactive floating album covers
component step by step. Write the code yourself before reading the answer —
that's how you actually learn it.

---

## What we're building

- A dark box where album cover images float around and bounce off the walls
- When you **hover** over a cover, a tooltip shows the album name and artist
- When you **click** a cover, it freezes in place — click again to resume
- A speed slider that controls how fast all covers move

---

## Step 1: HTML skeleton

**Why it matters:** everything in this component lives inside one container.
The `<canvas>` approach would work too, but using real `<div>` elements makes
hover and click events trivial — no math needed to detect which image was hit.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>music.exe</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="stage" id="stage">

    <!-- The floating covers will be injected here by JavaScript -->

    <!-- Tooltip card — one shared element, moved by JS on hover -->
    <div class="album-tooltip" id="tooltip">
      <img class="tooltip-thumb" id="tooltip-thumb" src="" alt="">
      <div class="tooltip-info">
        <p class="tooltip-album" id="tooltip-album">Album</p>
        <p class="tooltip-artist" id="tooltip-artist">Artist</p>
      </div>
    </div>

  </div>

  <script src="music.js"></script>
</body>
</html>
```

**Check yourself:** the stage is empty on purpose — JS fills it. The tooltip
starts hidden (you'll do that in CSS). Why one shared tooltip instead of one
per cover? Because you only ever hover one thing at a time — duplicating it
for every cover wastes DOM nodes.

---

## Step 2: CSS — stage, covers, tooltip

**Why it matters:** `position: relative` on the stage + `position: absolute`
on each cover is what makes free-floating placement possible. Without this
pair, `left` and `top` on the covers would do nothing useful.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* ── Stage ── */
.stage {
  position: relative;          /* anchor for absolute children */
  width: 900px;
  height: 520px;
  background-color: #111;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;  /* grid lines */
  overflow: hidden;             /* covers that drift out vanish at the edge */
  border: 1px solid #222;
}

/* ── Each album cover ── */
.cover {
  position: absolute;          /* free-floats inside .stage */
  width: 90px;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  user-select: none;
}

.cover:hover {
  border-color: #00e5ff;       /* highlight on hover */
  z-index: 10;
}

.cover.paused {
  border-color: #ff4d4d;       /* red border when frozen */
  opacity: 0.85;
}

/* ── Tooltip ── */
.album-tooltip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(10, 10, 10, 0.92);
  border: 1px solid #333;
  padding: 8px 12px;
  pointer-events: none;        /* tooltip never blocks mouse events on covers */
  z-index: 100;
  opacity: 0;                  /* hidden by default */
  transition: opacity 0.15s;
}

.album-tooltip.visible {
  opacity: 1;
}

.tooltip-thumb {
  width: 44px;
  height: 44px;
  object-fit: cover;
}

.tooltip-album {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: monospace;
}

.tooltip-artist {
  color: #888;
  font-size: 12px;
  font-family: monospace;
}
```

**Check yourself:** why `pointer-events: none` on the tooltip? Because if the
tooltip were hoverable itself, it would block the mouse from reaching the cover
underneath — you'd get a flicker loop where hovering the tooltip hides it.

---

## Step 3: JavaScript — the data

**Why it matters:** separating data from logic keeps the code clean. All you
need to change when you add a new album is one object in this array.

Create `music.js` and start with the data:

```js
// ── 1. DATA ──────────────────────────────────────────────────────────────────
// Each object holds everything one cover needs to know about itself.
// src: the image path or URL
// album / artist: shown in the tooltip

const albums = [
  { src: 'covers/travis-utopia.jpg',      album: 'UTOPIA',          artist: 'Travis Scott' },
  { src: 'covers/frank-blonde.jpg',       album: 'Blonde',          artist: 'Frank Ocean' },
  { src: 'covers/kanye-donda.jpg',        album: 'Donda',           artist: 'Kanye West' },
  { src: 'covers/drake-more-life.jpg',    album: 'More Life',       artist: 'Drake' },
  { src: 'covers/radiohead-ok.jpg',       album: 'OK Computer',     artist: 'Radiohead' },
  { src: 'covers/imagine-smoke.jpg',      album: 'Smoke + Mirrors', artist: 'Imagine Dragons' },
  { src: 'covers/lil-peep-crybaby.jpg',   album: 'Crybaby',         artist: 'Lil Peep' },
  { src: 'covers/sza-sos.jpg',            album: 'SOS',             artist: 'SZA' },
];
// Add or remove objects freely — the rest of the code adapts automatically.
```

**Check yourself:** what would break if you added an object without a `src`?
The image would show as broken. Add a fallback `src` if you want to be safe.

---

## Step 4: JavaScript — spawning covers

**Why it matters:** this is where each data object becomes a real DOM element.
You set the image, attach the data as attributes, place it randomly, and push
a "physics object" into an array that the animation loop will read every frame.

```js
// ── 2. SETUP ─────────────────────────────────────────────────────────────────
const stage    = document.getElementById('stage');
const tooltip  = document.getElementById('tooltip');
const tooltipThumb  = document.getElementById('tooltip-thumb');
const tooltipAlbum  = document.getElementById('tooltip-album');
const tooltipArtist = document.getElementById('tooltip-artist');

const COVER_SIZE = 90;  // must match the CSS width/height

// covers[] holds one physics-object per album.
// Each object tracks: the DOM element, position (x,y), velocity (vx,vy),
// and whether it's paused.
const covers = [];

function spawnCovers() {
  albums.forEach(data => {

    // Create the <img> element
    const img = document.createElement('img');
    img.src       = data.src;
    img.className = 'cover';
    img.dataset.album  = data.album;
    img.dataset.artist = data.artist;

    // Random starting position — kept inside the stage boundaries
    const x = Math.random() * (stage.offsetWidth  - COVER_SIZE);
    const y = Math.random() * (stage.offsetHeight - COVER_SIZE);

    img.style.left = x + 'px';
    img.style.top  = y + 'px';

    stage.appendChild(img);

    // Store the physics state alongside the element
    covers.push({
      el:     img,
      x,
      y,
      vx:     (Math.random() * 1.2 + 0.3) * (Math.random() < 0.5 ? 1 : -1),
      vy:     (Math.random() * 1.2 + 0.3) * (Math.random() < 0.5 ? 1 : -1),
      paused: false,
    });
  });
}

spawnCovers();
```

**Understand the velocity formula:**
`Math.random() * 1.2 + 0.3` gives a value between 0.3 and 1.5.
Multiplying by `(Math.random() < 0.5 ? 1 : -1)` randomly flips the sign,
so covers start moving in all four diagonal directions.

**Check yourself:** what happens if you remove the `+ 0.3`? Some covers could
start with velocity 0 and never move. The minimum ensures they always drift.

---

## Step 5: JavaScript — the animation loop

**Why it matters:** `requestAnimationFrame` is the correct way to animate on
the web. It syncs to the screen's refresh rate (usually 60fps), pauses when
the tab is hidden, and is far more efficient than `setInterval`.

```js
// ── 3. ANIMATION LOOP ────────────────────────────────────────────────────────
let speed = 1.0;   // global speed multiplier (changed by the slider later)

function animate() {
  const stageW = stage.offsetWidth;
  const stageH = stage.offsetHeight;

  covers.forEach(cover => {
    if (cover.paused) return;   // skip frozen covers — position stays the same

    // Move: new position = old position + velocity × speed
    cover.x += cover.vx * speed;
    cover.y += cover.vy * speed;

    // Bounce off right or left wall
    if (cover.x + COVER_SIZE >= stageW) {
      cover.x = stageW - COVER_SIZE;   // clamp so it doesn't escape
      cover.vx *= -1;                  // reverse horizontal direction
    }
    if (cover.x <= 0) {
      cover.x = 0;
      cover.vx *= -1;
    }

    // Bounce off bottom or top wall
    if (cover.y + COVER_SIZE >= stageH) {
      cover.y = stageH - COVER_SIZE;
      cover.vy *= -1;
    }
    if (cover.y <= 0) {
      cover.y = 0;
      cover.vy *= -1;
    }

    // Apply the new position to the DOM element
    cover.el.style.left = cover.x + 'px';
    cover.el.style.top  = cover.y + 'px';
  });

  requestAnimationFrame(animate);   // schedule the next frame
}

animate();   // kick off the loop
```

**Check yourself:** why do we clamp (`cover.x = stageW - COVER_SIZE`) before
reversing? If a cover moves 2px per frame and hits the wall at 1px past the
boundary, just reversing without clamping would leave it stuck outside — it
would reverse, move 2px back inside, then immediately hit the wall again next
frame and oscillate forever.

---

## Step 6: JavaScript — click to pause

**Why it matters:** event delegation — attaching one listener to the parent
instead of one per cover — is a best practice. It's cheaper and works even for
elements added later.

```js
// ── 4. CLICK TO PAUSE ────────────────────────────────────────────────────────
stage.addEventListener('click', e => {
  // e.target is whichever element was actually clicked.
  // .closest('.cover') walks up the DOM from that element until it finds
  // a .cover ancestor (or returns null if there isn't one).
  const coverEl = e.target.closest('.cover');
  if (!coverEl) return;   // clicked the stage background — do nothing

  // Find the physics object that owns this element
  const cover = covers.find(c => c.el === coverEl);
  if (!cover) return;

  cover.paused = !cover.paused;                        // toggle
  coverEl.classList.toggle('paused', cover.paused);    // CSS red border
});
```

**Check yourself:** what does `.classList.toggle('paused', cover.paused)` do
differently from `.classList.toggle('paused')`? The second argument forces the
class to match the boolean — it won't get out of sync if you call toggle twice
in quick succession.

---

## Step 7: JavaScript — hover tooltip

**Why it matters:** one shared tooltip div is repositioned on every `mousemove`
instead of creating/destroying elements — much faster for something that fires
dozens of times per second.

```js
// ── 5. HOVER TOOLTIP ─────────────────────────────────────────────────────────
stage.addEventListener('mousemove', e => {
  const coverEl = e.target.closest('.cover');

  if (coverEl) {
    // Populate the tooltip with this cover's data
    tooltipThumb.src        = coverEl.src;
    tooltipAlbum.textContent  = coverEl.dataset.album;
    tooltipArtist.textContent = coverEl.dataset.artist;

    // Position the tooltip near the cursor (offset so it doesn't cover the image)
    const stageRect = stage.getBoundingClientRect();
    let tx = e.clientX - stageRect.left + 14;
    let ty = e.clientY - stageRect.top  + 14;

    // Keep tooltip inside the stage
    if (tx + 180 > stage.offsetWidth)  tx -= 200;
    if (ty + 70  > stage.offsetHeight) ty -= 80;

    tooltip.style.left = tx + 'px';
    tooltip.style.top  = ty + 'px';
    tooltip.classList.add('visible');

  } else {
    tooltip.classList.remove('visible');
  }
});

// Hide tooltip when mouse leaves the stage entirely
stage.addEventListener('mouseleave', () => {
  tooltip.classList.remove('visible');
});
```

**Check yourself:** why `e.clientX - stageRect.left` instead of just
`e.offsetX`? `offsetX` is relative to whatever element triggered the event,
which changes as the mouse moves between covers and the stage background.
`clientX - stageRect.left` is always relative to the stage — consistent.

---

## Step 8: Speed slider (optional but cool)

Add this HTML inside `.stage`:

```html
<div class="controls">
  <p>music.exe</p>
  <label>speed: <input type="range" id="speedSlider" min="0.1" max="3" step="0.05" value="1"></label>
</div>
```

Add this CSS:

```css
.controls {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255,255,255,0.9);
  padding: 10px 14px;
  font-family: monospace;
  font-size: 12px;
  color: #111;
  z-index: 50;
  line-height: 1.8;
}

.controls input[type="range"] {
  width: 120px;
  vertical-align: middle;
}
```

Add this JS:

```js
// ── 6. SPEED SLIDER ──────────────────────────────────────────────────────────
const slider = document.getElementById('speedSlider');
slider.addEventListener('input', () => {
  speed = parseFloat(slider.value);
});
```

**Check yourself:** why `parseFloat` and not `parseInt`? The slider has
`step="0.05"`, so its value is a decimal string like `"0.55"`. `parseInt`
would truncate that to `0` for anything below 1.

---

## Final checklist

- [ ] HTML: stage div, covers injected by JS, one shared tooltip
- [ ] CSS: `position: relative` on stage, `position: absolute` on covers
- [ ] JS data: array of objects with `src`, `album`, `artist`
- [ ] JS spawn: creates `<img>` elements, random position, physics object
- [ ] JS loop: moves covers, bounces off walls, skips paused ones
- [ ] JS click: toggles `paused` on the physics object + CSS class
- [ ] JS hover: repositions and shows tooltip on `mousemove`
- [ ] JS slider: updates global `speed` variable in real time

---

## Key concepts you practiced

| Concept | Where you used it |
|---|---|
| `requestAnimationFrame` | animation loop |
| Event delegation | click + hover on stage, not per-cover |
| `position: absolute` inside `position: relative` | free-floating covers |
| Data attributes (`dataset`) | linking DOM element to its data |
| `getBoundingClientRect` | cursor position relative to the stage |
| CSS class toggling | paused state, tooltip visibility |
| Velocity & wall bouncing | physics loop |

