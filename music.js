const albums = [
  { src: "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/1000x1000-000000-80-0-0.jpg", album: "Views",                              artist: "Drake" },
  { src: "https://cdn-images.dzcdn.net/images/cover/6e7a6c8f36669dcd11abe7e7c3222e91/1000x1000-000000-80-0-0.jpg", album: "Take Care",                          artist: "Drake" },
  { src: "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/1000x1000-000000-80-0-0.jpg", album: "Certified Lover Boy",                artist: "Drake" },
  { src: "https://cdn-images.dzcdn.net/images/cover/8f0187ad83cdd1f47f1c55420f9df227/1000x1000-000000-80-0-0.jpg", album: "More Life",                          artist: "Drake" },
  { src: "https://cdn-images.dzcdn.net/images/cover/6c213c1300cd2922d7987e0167eb9f5a/1000x1000-000000-80-0-0.jpg", album: "For All The Dogs",                   artist: "Drake" },
  { src: "https://cdn-images.dzcdn.net/images/cover/aa7e6de00b0810f5051aa60b489f58d8/1000x1000-000000-80-0-0.jpg", album: "Blonde",                             artist: "Frank Ocean" },
  { src: "https://cdn-images.dzcdn.net/images/cover/519400e29d268f449cf00af879e71af6/1000x1000-000000-80-0-0.jpg", album: "channel ORANGE",                     artist: "Frank Ocean" },
  { src: "https://cdn-images.dzcdn.net/images/cover/0d571082af7c78114321031d7f84d331/1000x1000-000000-80-0-0.jpg", album: "NEVER ENOUGH",                       artist: "Daniel Caesar" },
  { src: "https://cdn-images.dzcdn.net/images/cover/282e45bef1995c2c6f2901e34c4ab560/1000x1000-000000-80-0-0.jpg", album: "Freudian",                           artist: "Daniel Caesar" },
  { src: "https://cdn-images.dzcdn.net/images/cover/c32f7865d203fa246bd2c19635153d2c/1000x1000-000000-80-0-0.jpg", album: "CASE STUDY 01",                      artist: "Daniel Caesar" },
  { src: "https://cdn-images.dzcdn.net/images/cover/8c6578a2099561992fb7544e6826f767/1000x1000-000000-80-0-0.jpg", album: "Graduation",                         artist: "Kanye West" },
  { src: "https://cdn-images.dzcdn.net/images/cover/069a5dba671436da9301aad36fc9a983/1000x1000-000000-80-0-0.jpg", album: "The College Dropout",                artist: "Kanye West" },
  { src: "https://cdn-images.dzcdn.net/images/cover/e055ecc8d01680cda0460017087728be/1000x1000-000000-80-0-0.jpg", album: "The Life Of Pablo",                  artist: "Kanye West" },
  { src: "https://cdn-images.dzcdn.net/images/cover/330da8bf0a57b47c2078db2d3761dc5e/1000x1000-000000-80-0-0.jpg", album: "Donda",                              artist: "Kanye West" },
  { src: "https://cdn-images.dzcdn.net/images/cover/bad5645e8c13a579a5bba9263c3a522a/1000x1000-000000-80-0-0.jpg", album: "Two Star & The Dream Police",        artist: "Mk.gee" },
  { src: "https://cdn-images.dzcdn.net/images/cover/63ff8d3ecdf658d156d34d40058442c1/1000x1000-000000-80-0-0.jpg", album: "BALLADS 1",                          artist: "Joji" },
  { src: "https://cdn-images.dzcdn.net/images/cover/122fd1b9f6498e9fb8e1c148926a7d55/1000x1000-000000-80-0-0.jpg", album: "Nectar",                             artist: "Joji" },
  { src: "https://cdn-images.dzcdn.net/images/cover/36aecc47636b326efc3987120dcf4c65/1000x1000-000000-80-0-0.jpg", album: "SMITHEREENS",                        artist: "Joji" },
  { src: "https://cdn-images.dzcdn.net/images/cover/7a532d945074ced10587b69150598049/1000x1000-000000-80-0-0.jpg", album: "Eternal Atake",                      artist: "Lil Uzi Vert" },
  { src: "https://cdn-images.dzcdn.net/images/cover/5786e1b86286cc386722ae62a4f3e6f1/1000x1000-000000-80-0-0.jpg", album: "Luv Is Rage 2",                      artist: "Lil Uzi Vert" },
  { src: "https://cdn-images.dzcdn.net/images/cover/e67037fb4abb754a234bd3f77752450d/1000x1000-000000-80-0-0.jpg", album: "Lil Uzi Vert vs. The World",         artist: "Lil Uzi Vert" },
  { src: "https://cdn-images.dzcdn.net/images/cover/e768eadd0d3797e6ace6b28fc8b350dd/1000x1000-000000-80-0-0.jpg", album: "What The Feng",                      artist: "Feng" },
  { src: "https://cdn-images.dzcdn.net/images/cover/59580cf37c2182da329172cc1a79af41/1000x1000-000000-80-0-0.jpg", album: "Baby",                               artist: "Dijon" },
  { src: "https://cdn-images.dzcdn.net/images/cover/d6761ca2c8d99b2153f4c4cb8abb3d4f/1000x1000-000000-80-0-0.jpg", album: "Absolutely",                         artist: "Dijon" },
  { src: "https://cdn-images.dzcdn.net/images/cover/ca42a0630c1d60391ac44f3be6abcac0/1000x1000-000000-80-0-0.jpg", album: "LONG.LIVE.A$AP",                     artist: "A$AP Rocky" },
  { src: "https://cdn-images.dzcdn.net/images/cover/9e17c202b5ab081171f31c81eb32dc5d/1000x1000-000000-80-0-0.jpg", album: "American Idiot",                     artist: "Green Day" },
  { src: "https://cdn-images.dzcdn.net/images/cover/1e17054b7bfa6576f64ea867b71ef479/1000x1000-000000-80-0-0.jpg", album: "Dookie",                             artist: "Green Day" },
  { src: "https://cdn-images.dzcdn.net/images/cover/485d7cab7695e48f1420182647273de4/1000x1000-000000-80-0-0.jpg", album: "Paramore",                           artist: "Paramore" },
  { src: "https://cdn-images.dzcdn.net/images/cover/1a48b36fe9dd29b2bef2f5058cbe0c25/1000x1000-000000-80-0-0.jpg", album: "Riot!",                              artist: "Paramore" },
  { src: "https://cdn-images.dzcdn.net/images/cover/1dd56fd8824492e1a5106c99a00a85ec/1000x1000-000000-80-0-0.jpg", album: "Pablo Honey",                        artist: "Radiohead" },
  { src: "https://cdn-images.dzcdn.net/images/cover/2f152c3d4d7a7e607e985d77339af1de/1000x1000-000000-80-0-0.jpg", album: "Apollo XXI",                         artist: "Steve Lacy" },
  { src: "https://cdn-images.dzcdn.net/images/cover/2db20377876da16feb8ec9652e835a81/1000x1000-000000-80-0-0.jpg", album: "Cigarettes After Sex",               artist: "Cigarettes After Sex" },
  { src: "https://cdn-images.dzcdn.net/images/cover/6dfa4ea965a74b93870a85daa74b7ca3/1000x1000-000000-80-0-0.jpg", album: "Charm",                              artist: "Clairo" },
  { src: "https://cdn-images.dzcdn.net/images/cover/cf9d0827a0f6089f22c1719b8d171f50/1000x1000-000000-80-0-0.jpg", album: "Goodbye & Good Riddance",            artist: "Juice WRLD" },
  { src: "https://cdn-images.dzcdn.net/images/cover/7a03f611f0d25cb00d19e4e01623178f/1000x1000-000000-80-0-0.jpg", album: "Legends Never Die",                  artist: "Juice WRLD" },
  { src: "https://cdn-images.dzcdn.net/images/cover/f2d66b587ca8d3f0fa222c3501d23564/1000x1000-000000-80-0-0.jpg", album: "Die Lit",                            artist: "Playboi Carti" },
  { src: "https://cdn-images.dzcdn.net/images/cover/3c5f5f3f5f41ff96f961afd7df7eb4d9/1000x1000-000000-80-0-0.jpg", album: "Whole Lotta Red",                    artist: "Playboi Carti" },
  { src: "https://cdn-images.dzcdn.net/images/cover/fee22e51f2b04372eae250a78d9ea99d/1000x1000-000000-80-0-0.jpg", album: "for you",                            artist: "Nate Sib" },
  { src: "https://cdn-images.dzcdn.net/images/cover/cec40f144f8dda85a284559d1d052b30/1000x1000-000000-80-0-0.jpg", album: "Bad Vibes Forever",                  artist: "XXXTENTACION" },
  { src: "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/1000x1000-000000-80-0-0.jpg", album: "OCTANE",                             artist: "Don Toliver" },
  { src: "https://cdn-images.dzcdn.net/images/cover/b4efb39affdedb4152b2109a7ec36f63/1000x1000-000000-80-0-0.jpg", album: "BEFORE I FORGET",                    artist: "The Kid LAROI" },
  { src: "https://cdn-images.dzcdn.net/images/cover/a73aaa7673c6735f6ef425f05eb0f265/1000x1000-000000-80-0-0.jpg", album: "Valedictorian",                      artist: "ian" },
  { src: "https://cdn-images.dzcdn.net/images/cover/6c91e64b7157f1332a4f6b0de9e4c714/1000x1000-000000-80-0-0.jpg", album: "UTOPIA",                             artist: "Travis Scott" },
  { src: "https://cdn-images.dzcdn.net/images/cover/7df7ac6028591a5622f24cf32a555510/1000x1000-000000-80-0-0.jpg", album: "ASTROWORLD",                         artist: "Travis Scott" },
  { src: "https://cdn-images.dzcdn.net/images/cover/c6fcd7ca0e6c55251ddce2d7b67cae26/1000x1000-000000-80-0-0.jpg", album: "The Melodic Blue",                   artist: "Baby Keem" },
  { src: "https://cdn-images.dzcdn.net/images/cover/616e7359251e6c79f7747a83b3aecf80/1000x1000-000000-80-0-0.jpg", album: "i am > i was",                       artist: "21 Savage" },
  { src: "https://cdn-images.dzcdn.net/images/cover/625708c5dfdd779b740fd4a0f9b845c6/1000x1000-000000-80-0-0.jpg", album: "Snow Cougar",                        artist: "Yung Gravy" },
  { src: "https://cdn-images.dzcdn.net/images/cover/db90a938ac7c33c94867346a12b1cfbe/1000x1000-000000-80-0-0.jpg", album: "Sensational",                        artist: "Yung Gravy" },
  { src: "https://cdn-images.dzcdn.net/images/cover/8445af48f681444a7d8c5997ad8cd74a/1000x1000-000000-80-0-0.jpg", album: "Sadeek El Bernameg",                 artist: "Tul8ate" },
  { src: "https://cdn-images.dzcdn.net/images/cover/c0a1d1281570ad3becbb6146c6d54c0c/1000x1000-000000-80-0-0.jpg", album: "American Beauty/American Psycho",    artist: "Fall Out Boy" },
  { src: "https://cdn-images.dzcdn.net/images/cover/765dc8aba0e893fc6d55af08572fc902/1000x1000-000000-80-0-0.jpg", album: "Trench",                             artist: "Twenty One Pilots" },
  { src: "https://cdn-images.dzcdn.net/images/cover/dbbde1014cda9b101412a8e27add0ad2/1000x1000-000000-80-0-0.jpg", album: "Blurryface",                         artist: "Twenty One Pilots" },
  { src: "https://cdn-images.dzcdn.net/images/cover/012b27906b430a37ec1d8f793d5c4fa6/1000x1000-000000-80-0-0.jpg", album: "24K Magic",                          artist: "Bruno Mars" },
  { src: "https://cdn-images.dzcdn.net/images/cover/8259ad5e5dd08ed512a2f73ba1c9bde4/1000x1000-000000-80-0-0.jpg", album: "Allem Alby",                         artist: "Amr Diab" },
  { src: "https://cdn-images.dzcdn.net/images/cover/c2ceda8dd8068731a8352ebb47744f89/1000x1000-000000-80-0-0.jpg", album: "Best of : Oum Kalsoum",              artist: "Oum Kalthoum" },
  { src: "https://cdn-images.dzcdn.net/images/cover/f520bf0be2e3cfc476824e75d20a164a/1000x1000-000000-80-0-0.jpg", album: "After Hours",                        artist: "The Weeknd" },
  { src: "https://cdn-images.dzcdn.net/images/cover/39f445145249ddc36279f9a349990d76/1000x1000-000000-80-0-0.jpg", album: "Narein",                             artist: "Tul8ate" },
{ src: "https://cdn-images.dzcdn.net/images/cover/f01e09ceb8ad1e96707c1b4aadb5911b/1000x1000-000000-80-0-0.jpg", album: "Thriller",                             artist: "Michael Jackson" },
];

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

let speed = 0.5;   // global speed multiplier

function spawnCovers() {
  const stageW = stage.offsetWidth || 900;
  const stageH = stage.offsetHeight || 520;

  albums.forEach(data => {
    // Create the <img> element
    const img = document.createElement('img');
    img.src       = data.src;
    img.className = 'cover';
    img.dataset.album  = data.album;
    img.dataset.artist = data.artist;

    // Random starting position — kept inside stage boundaries
    const x = Math.random() * Math.max(10, stageW - COVER_SIZE);
    const y = Math.random() * Math.max(10, stageH - COVER_SIZE);

    img.style.left = x + 'px';
    img.style.top  = y + 'px';

    stage.appendChild(img);

    // Store the physics state
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

function animate() {
  const stageW = stage.offsetWidth || 900;
  const stageH = stage.offsetHeight || 520;

  covers.forEach(cover => {
    if (cover.paused) return;

    cover.x += cover.vx * speed;
    cover.y += cover.vy * speed;

    if (cover.x + COVER_SIZE >= stageW) {
      cover.x = stageW - COVER_SIZE;
      cover.vx *= -1;
    }
    if (cover.x <= 0) {
      cover.x = 0;
      cover.vx *= -1;
    }

    if (cover.y + COVER_SIZE >= stageH) {
      cover.y = stageH - COVER_SIZE;
      cover.vy *= -1;
    }
    if (cover.y <= 0) {
      cover.y = 0;
      cover.vy *= -1;
    }

    cover.el.style.left = cover.x + 'px';
    cover.el.style.top  = cover.y + 'px';
  });

  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  spawnCovers();
  animate();
});


// ── 4. CLICK TO PAUSE ────────────────────────────────────────────────────────
stage.addEventListener('click', e => {
  const coverEl = e.target.closest('.cover');
  if (!coverEl) return;

  const cover = covers.find(c => c.el === coverEl);
  if (!cover) return;

  cover.paused = !cover.paused;
  coverEl.classList.toggle('paused', cover.paused);
});

// ── 5. HOVER TOOLTIP (Fixed Bottom-Left Card) ─────────────────────────────────
stage.addEventListener('mousemove', e => {
  const coverEl = e.target.closest('.cover');

  if (coverEl) {
    tooltipThumb.src = coverEl.src;
    tooltipAlbum.textContent = coverEl.dataset.album;
    tooltipArtist.textContent = coverEl.dataset.artist;
    tooltip.classList.add('visible');
  } else {
    tooltip.classList.remove('visible');
  }
});

stage.addEventListener('mouseleave', () => {
  tooltip.classList.remove('visible');
});

// ── 6. SPEED SLIDER ──────────────────────────────────────────────────────────
const slider = document.getElementById('speedSlider');
const speedVal = document.getElementById('speed-val');

if (slider) {
  slider.addEventListener('input', () => {
    speed = parseFloat(slider.value);
    if (speedVal) {
      speedVal.textContent = speed.toFixed(2) + 'x';
    }
  });
}
