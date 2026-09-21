# Building an "Andy Vu"-Style Terminal Portfolio — Step-by-Step Guide

This site uses the same terminal-themed template you've already been
practicing with, extended with a few new sections: a quote block, an
experience timeline, and per-job photo galleries. Work through each step in
order, writing the code yourself before checking it here.

---

## Step 1: Project setup and HTML skeleton

**Why it matters:** standard boilerplate every page needs before anything
else works.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Courier New", Courier, monospace;
  background-color: #0d1117;
  color: #c9d1d9;
  line-height: 1.6;
  padding: 20px;
}

a {
  color: #58a6ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

**Check yourself:** page loads blank with the right tab title, stylesheet
linked correctly.

---

## Step 2: Header (name + multiple links)

**Why it matters:** same Flexbox row pattern as before, just with more than
two links — good practice keeping `gap` doing the spacing work instead of
manual margins.

```html
<header class="site-header">
  <h1><a href="/">Your Name</a></h1>
  <nav class="links">
    <a href="#" target="_blank">LinkedIn</a>
    <a href="#" target="_blank">GitHub</a>
    <a href="#" target="_blank">X</a>
  </nav>
</header>
```

```css
.site-header,
.terminal-block {
  max-width: 800px;
  margin: 0 auto 50px auto;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;   /* lets links wrap under the name on narrow screens */
  gap: 10px;
}

.site-header h1 a {
  color: #c9d1d9;
  font-size: 1.6rem;
}

.links {
  display: flex;
  gap: 20px;
}
```

**Check yourself:** add a 4th link — it should still space evenly with `gap`,
no extra CSS needed.

---

## Step 3: The "prompt" label style

**Why it matters:** reused across every section below, so getting this right
once saves repeated work.

```css
.prompt {
  color: #7ee787;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.prompt::before {
  content: "> ";
}

.section-note {
  color: #8b949e;
  font-size: 0.85rem;
  margin-bottom: 15px;
}
```

---

## Step 4: "For visitors" callout block

**Why it matters:** simplest possible section — just a prompt label, a short
paragraph, and a link. Good warm-up before the more complex sections.

```html
<section class="terminal-block">
  <p class="prompt">cat ~/for-visitors.md</p>
  <p>Visiting from one of my videos or posts? Here's a few things for you.</p>
  <a href="#">resources</a>
</section>
```

No new CSS — this proves your `.terminal-block` and `.prompt` classes are
truly reusable.

---

## Step 5: Bio section ("whoami")

**Why it matters:** same Flexbox-with-wrap pattern from before, but with two
images instead of one — practice handling multiple flex children of the same
type.

```html
<section class="terminal-block">
  <p class="prompt">whoami</p>
  <div class="bio">
    <div class="bio-photos">
      <img src="https://placehold.co/160x160" alt="A photo of you">
      <img src="https://placehold.co/160x160" alt="A goofier photo of you">
    </div>
    <div class="bio-text">
      <p>Hi! I'm [Name], a [major] student at [school].</p>
      <p>Most of my time goes into [interest one] and [interest two].</p>
      <p>When I'm not working, I'm probably [hobby].</p>
    </div>
  </div>
</section>
```

```css
.bio {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.bio-photos {
  display: flex;
  gap: 10px;
}

.bio-photos img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
}

.bio-text {
  flex: 1;
  min-width: 250px;
}

.bio-text p {
  margin-bottom: 12px;
}
```

**Check yourself:** shrink the window — photos and text should each wrap
independently without overlapping.

---

## Step 6: Quote / motto section

**Why it matters:** practices semantic HTML for quotations — `<blockquote>`
and `<cite>` instead of generic `<p>` tags, plus a simple link row underneath.

```html
<section class="terminal-block">
  <p class="prompt">cat ~/random.md</p>
  <p class="section-note">My life motto</p>
  <blockquote>
    "Some quote that means something to you"
    <cite>— source of the quote</cite>
  </blockquote>
  <nav class="links">
    <a href="#">Travel</a>
    <a href="#">Music</a>
    <a href="#">Lore</a>
  </nav>
</section>
```

```css
blockquote {
  border-left: 3px solid #30363d;
  padding-left: 15px;
  margin-bottom: 15px;
  font-style: italic;
}

blockquote cite {
  display: block;
  margin-top: 6px;
  font-size: 0.85rem;
  color: #8b949e;
  font-style: normal;
}
```

**Check yourself:** the `<cite>` should render on its own line, slightly
muted, below the quote text — check this happens without adding a `<br>`.

---

## Step 7: Experience timeline (the new pattern)

**Why it matters:** this is the main new layout pattern on this site — a
repeating row of logo + role details. It's Flexbox again, but nested inside a
vertically stacked list of entries, which is great practice combining the two.

```html
<section class="terminal-block">
  <p class="prompt">cat ~/experience.md</p>
  <p class="section-note">the more professional-looking part of this</p>

  <ul class="experience-list">
    <li class="experience-entry">
      <img src="https://placehold.co/60x60" alt="Company logo" class="experience-logo">
      <div class="experience-details">
        <h3>Company Name</h3>
        <p class="experience-role">Job Title</p>
        <p class="experience-meta">MM/YYYY - MM/YYYY · City, State</p>
      </div>
    </li>
    <li class="experience-entry">
      <img src="https://placehold.co/60x60" alt="Company logo" class="experience-logo">
      <div class="experience-details">
        <h3>Another Company</h3>
        <p class="experience-role">Job Title</p>
        <p class="experience-meta">MM/YYYY - MM/YYYY · City, State</p>
      </div>
    </li>
  </ul>
</section>
```

```css
.experience-list {
  list-style: none;
}

.experience-entry {
  display: flex;             /* logo next to text, in a row */
  gap: 15px;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid #21262d;   /* subtle divider between entries */
}

.experience-entry:last-child {
  border-bottom: none;       /* no divider after the final entry */
}

.experience-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;       /* logos shouldn't crop like photos do */
  border-radius: 4px;
  flex-shrink: 0;             /* keeps the logo from shrinking if text is long */
}

.experience-role {
  color: #c9d1d9;
  font-size: 0.9rem;
}

.experience-meta {
  color: #8b949e;
  font-size: 0.8rem;
  margin-top: 2px;
}
```

**Check yourself:** why `object-fit: contain` here instead of `cover` like
the bio/project photos? Because logos often aren't square — `contain` shows
the whole logo without cropping it, at the cost of possible empty space
around it. Try switching it to `cover` and see a logo get cropped badly to
understand why the choice matters.

---

## Step 8: Projects grid

**Why it matters:** identical pattern to what you've already built — good
repetition to cement it, this time with a link row per card instead of the
whole card being a link (useful when a project has 2+ links, like GitHub
*and* a live demo).

```html
<section class="terminal-block">
  <p class="prompt">ls ~/projects.md</p>
  <p class="section-note">a few things i want people to actually click on</p>
  <div class="project-grid">
    <div class="project-card">
      <img src="https://placehold.co/300x180" alt="Project thumbnail">
      <div class="project-card-body">
        <h3>Project Name</h3>
        <p>A short description of what it does.</p>
        <div class="project-links">
          <a href="#">GitHub</a>
          <a href="#">Devpost</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.project-card {
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
}

.project-card img {
  width: 100%;
  display: block;
}

.project-card-body {
  padding: 12px;
}

.project-card-body h3 {
  font-size: 1rem;
  margin-bottom: 6px;
}

.project-card-body p {
  font-size: 0.85rem;
  color: #8b949e;
  margin-bottom: 10px;
}

.project-links {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
}
```

**Check yourself:** notice this card is a `<div>` with links *inside* it,
unlike the earlier version where the whole card was one `<a>`. That's
required here since a card can't contain more than one clickable link if the
card itself is the link — nested interactive elements are invalid HTML.

---

## Step 9: Roblox games / achievements grid

**Why it matters:** near-identical to the projects grid, but reinforces
reading a design and recognizing "I've already built this pattern" instead of
inventing something new — a real skill, not just typing practice.

```html
<section class="terminal-block">
  <p class="prompt">cat ~/roblox-games.md</p>
  <p class="section-note">my games :D</p>
  <div class="project-grid">
    <a href="#" class="project-card">
      <img src="https://placehold.co/300x180" alt="Game thumbnail">
      <div class="project-card-body">
        <h3>Game Name</h3>
        <p>Visits 12,345,678</p>
      </div>
    </a>
  </div>
</section>
```

No new CSS — reuses `.project-grid` and `.project-card` from Step 8.

---

## Step 10: Friends and links lists

**Why it matters:** same custom-bullet list pattern, just used twice for two
different kinds of content. Confirms your class names are reusable rather
than overly specific.

```html
<section class="terminal-block">
  <p class="prompt">cat ~/friends.md</p>
  <p class="section-note">cool friends</p>
  <ul class="dash-list">
    <li><a href="#">Friend One</a></li>
    <li><a href="#">Friend Two</a></li>
  </ul>
</section>

<section class="terminal-block">
  <p class="prompt">cat ~/links.md</p>
  <ul class="dash-list">
    <li><a href="mailto:you@example.com">Email</a></li>
    <li><a href="#">GitHub</a></li>
  </ul>
</section>
```

```css
.dash-list {
  list-style: none;
}

.dash-list li {
  margin-bottom: 6px;
}

.dash-list li::before {
  content: "- ";
  color: #8b949e;
}
```

**Check yourself:** notice the class is named `.dash-list`, not
`.friends-list` — naming it after *what it looks like* rather than *what
content it holds* is why you can reuse it for the links section too.

---

## Step 11: Per-job photo gallery

**Why it matters:** reinforces the photo grid pattern once more, but paired
with a caption under each image — practice wrapping an image and a short text
label together as one repeatable unit.

```html
<section class="terminal-block">
  <h2>Company Name Pictures</h2>
  <p class="section-note">a few snapshots from that time</p>
  <div class="caption-grid">
    <figure>
      <img src="https://placehold.co/300x200" alt="Description of photo">
      <figcaption>a short caption</figcaption>
    </figure>
    <figure>
      <img src="https://placehold.co/300x200" alt="Description of photo">
      <figcaption>another caption</figcaption>
    </figure>
  </div>
</section>
```

```css
.caption-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.caption-grid img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px;
}

.caption-grid figcaption {
  font-size: 0.8rem;
  color: #8b949e;
  margin-top: 4px;
  text-align: center;
}
```

**Check yourself:** `<figure>` and `<figcaption>` are semantic tags made
exactly for this image + caption pairing — using them (instead of a generic
`<div>`) is what makes the HTML meaningful to screen readers and search
engines, not just visually correct.

---

## Step 12: Footer

```html
<footer class="terminal-block">
  <p class="prompt">cat README.md</p>
  <p>Source code on <a href="#">GitHub</a></p>
</footer>
```

No new CSS — final proof your reusable classes carried the whole page.

---

## Step 13: Responsiveness

**Why it matters:** ties every section together across screen sizes.

```css
@media (max-width: 600px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .bio {
    flex-direction: column;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .caption-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .experience-entry {
    flex-direction: column;   /* stacks logo above text on small screens */
  }
}
```

**Check yourself:** toggle phone view in dev tools — every grid should drop
columns, the header should stack, and experience entries should go from
logo-beside-text to logo-above-text.

---

## Final checklist

- [ ] Header with wrapping nav links
- [ ] "For visitors" simple callout block
- [ ] Bio section with two wrapping images
- [ ] Quote block using `<blockquote>` / `<cite>`
- [ ] Experience timeline with logo + details rows
- [ ] Projects grid with multiple links per card
- [ ] Reused project-grid pattern for a second grid (games)
- [ ] Two reused dash-lists (friends + links)
- [ ] Photo gallery using `<figure>`/`<figcaption>`
- [ ] Footer using existing classes only
- [ ] Full responsive pass at 600px width

By the end you'll have practiced every pattern from the first guide, plus:
`<blockquote>`/`<cite>`, `object-fit: contain` vs `cover`, nested-vs-whole-card
links, and `<figure>`/`<figcaption>` — a solid semantic HTML vocabulary on top
of the CSS layout skills.
