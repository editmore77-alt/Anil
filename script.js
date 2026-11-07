/*
  EDIT YOUR PORTFOLIO HERE
  Add a project by copying an object into reels or longForm.
  Paste your YouTube link (Shorts, watch URL, or youtu.be link) into the video field.
  featured: true puts it among the first three Home highlights.
  Reorder featured items to choose which three show first.
  You can add 30, 40, or more videos — the responsive grid will automatically adjust!
*/
/*
  =========================================================================
  YOUTUBE VIDEOS KAISE ADD KAREIN (HOW TO ADD YOUTUBE VIDEOS):
  1. Niche 'reels' ya 'longForm' list mein apna YouTube link 'video' ke andar paste karein.
     - Share link:  "https://youtu.be/XXXXXXXXXXX"
     - Shorts link: "https://www.youtube.com/shorts/XXXXXXXXXXX"
     - Normal link: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  2. Thumbnail अपने आप (automatically) YouTube se aa jayega! Agar apna alag custom
     thumbnail lagana ho, tabhi 'image' mein link ya path dalein, warna 'image: ""' chhod dein.
  3. Future mein 30-40 ya kitni bhi nayi videos add karni ho, bas ek block { ... },
     copy karke niche paste kar dein. Grid bilkul responsive aur flexible hai,
     apne aap nayi rows bana lega bina kisi problem ke.
  =========================================================================
*/

// ==================== REEL SECTION VIDEOS START ====================
const reels = [
  // Ye first video ha reel section ki (Reel Video #1)
  {
    title: "Brain Motion Graphic",
    detail: "Short-form edit · 0:06",
    image: "",
    video: "https://youtu.be/L9J4w91ek8U", // <-- Yahan apni 1st Reel/Shorts ka YouTube URL dalein
    featured: true,
    colors: ["#e0c6a4", "#b78a62", "#302e2c"]
  },

  // Ye second video ha reel section ki (Reel Video #2)
  {
    title: "Color Grading",
    detail: "Short-form edit · 0:15",
    image: "",
    video: "https://youtu.be/ZWf629DsbCE", // <-- Yahan apni 2nd Reel/Shorts ka YouTube URL dalein
    featured: true,
    colors: ["#dcd8f4", "#9589ef", "#f1d46a"]
  }

  // Future me nayi Reel video add krne ke liye upar wale { ... } block ko copy krke yahan niche paste krein (pichle block ke baad comma ',' zaroor lagayein). Chahe 30-40 videos dalein, sab automatically set ho jayega.
];
// ==================== REEL SECTION VIDEOS END ====================


// ==================== LONG FORM SECTION VIDEOS START ====================
const longForm = [
  // Ye first video ha long form section ki (Long Form Video #1)
  {
    title: "1st Edit",
    detail: "Hostinger Intro · 1:23",
    image: "",
    video: "https://youtu.be/lZsYWin-fDE", // <-- Yahan apni 1st Long Form YouTube video ka URL dalein
    featured: true,
    colors: ["#e4c17a", "#f3d9a5", "#b95949"]
  },

  // Ye second video ha long form section ki (Long Form Video #2)
  {
    title: "15 day Series",
    detail: "Color study · 0:27",
    image: "",
    video: "https://youtu.be/rQCsmWOBoa8", // <-- Yahan apni 2nd Long Form YouTube video ka URL dalein
    featured: true,
    colors: ["#dcd8f4", "#9589ef", "#f1d46a"]
  },

  // Ye third video ha long form section ki (Long Form Video #3)
  {
    title: "InVideo Intro",
    detail: "Intro edit · 1:22",
    image: "",
    video: "https://youtu.be/BpFL3ZHAqEA", // <-- Yahan apni 3rd Long Form YouTube video ka URL dalein
    featured: true,
    colors: ["#efd19b", "#c18b52", "#3a3130"]
  },

  // Ye fourth video ha long form section ki (Long Form Video #4)
  {
    title: "Chess Piece Queen",
    detail: "Visual edit · 0:09",
    image: "",
    video: "https://youtu.be/L9J4w91ek8U", // <-- Yahan apni 4th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#e1e9d4", "#96ad86", "#eee2c9"]
  },

  // Ye fifth video ha long form section ki (Long Form Video #5)
  {
    title: "Comp 1_2",
    detail: "Compositing · 0:04",
    image: "",
    video: "https://youtu.be/ZWf629DsbCE", // <-- Yahan apni 5th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#edc57a", "#ca7544", "#3e3031"]
  },

  // Ye sixth video ha long form section ki (Long Form Video #6)
  {
    title: "Comp 2",
    detail: "Compositing · 0:03",
    image: "",
    video: "https://youtu.be/BpFL3ZHAqEA", // <-- Yahan apni 6th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#d9dfc3", "#93ad93", "#343d37"]
  },

  // Ye seventh video ha long form section ki (Long Form Video #7)
  {
    title: "Brain Animation with Cubes",
    detail: "3D motion · 0:07",
    image: "",
    video: "https://youtu.be/L9J4w91ek8U", // <-- Yahan apni 7th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#adb9e8", "#59638f", "#26273f"]
  },

  // Ye eighth video ha long form section ki (Long Form Video #8)
  {
    title: "Gems",
    detail: "Motion study · 0:12",
    image: "",
    video: "https://youtu.be/ZWf629DsbCE", // <-- Yahan apni 8th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#d7c7ed", "#ad84cf", "#393047"]
  },

  // Ye ninth video ha long form section ki (Long Form Video #9)
  {
    title: "Rain Dead",
    detail: "Visual edit · 0:08",
    image: "",
    video: "https://youtu.be/BpFL3ZHAqEA", // <-- Yahan apni 9th Long Form YouTube video ka URL dalein
    featured: false,
    colors: ["#bacbd0", "#718893", "#27353d"]
  }

  // Future me 30-40 ya aur videos add krne ke liye upar wale { ... } block ko copy krke yahan niche paste krte jayein (har block ke beech comma ',' lagana na bhoolein). Code poori tarah responsive aur flexible hai!
];
// ==================== LONG FORM SECTION VIDEOS END ====================

const faqItems = [
  {
    q: "How do we start an edit?",
    a: "Send me your footage, goals, references, platform, and deadline on Instagram. We’ll align on scope before editing starts."
  },
  {
    q: "How is pricing decided?",
    a: "Pricing is tailored to the result you’re looking for. Rates depend on scope, footage length, editing style and complexity, graphics, and deliverables. Share your brief for a tailored quote."
  },
  {
    q: "How long does a 1-minute Reel take?",
    a: "A 1-minute Reel is usually delivered within 2–3 days, depending on the editing style and project requirements."
  },
  {
    q: "How many revisions are included?",
    a: "Revisions continue until you’re satisfied with the final edit. We’ll keep feedback focused so we can get to the right result together."
  },
  {
    q: "What do I receive at delivery?",
    a: "Your final video is exported in the format and aspect ratio we agreed for your platform."
  },
  {
    q: "What about a long-form delivery date?",
    a: "Long-form timelines depend on runtime, footage, complexity, and deliverables. I’ll confirm a realistic schedule after reviewing your brief."
  }
];

// Helper function: Kisi bhi YouTube URL (watch, shorts, embed, youtu.be) ya direct ID se 11-character YouTube Video ID nikalta hai.
function getYouTubeId(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  const regExp = /(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts|live)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = trimmed.match(regExp);
  if (match && match[1]) return match[1];
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  return null;
}

// Custom Clean Player & Card Styling (Zero YouTube Logo, Zero Title, Full Custom Controls)
const customPlayerStyle = document.createElement("style");
customPlayerStyle.textContent = `
  .project-poster { cursor: pointer; position: relative; }
  .project-poster > .play-button {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    margin: 0 !important;
    transform: translate(-50%, -50%) !important;
    z-index: 5;
  }
  .project-poster > .play-button:hover {
    transform: translate(-50%, -50%) scale(1.08) !important;
  }
  .project-image {
    transition: transform .35s ease;
  }
  .project-card:hover .project-image {
    transform: scale(1.03);
  }

  /* Custom Clean Video Shell inside Dialog */
  .video-dialog.is-portrait-video {
    width: min(420px, 92vw);
  }
  .clean-yt-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: 72vh;
    background: #000;
    border-radius: 6px;
    overflow: hidden;
    user-select: none;
  }
  .video-dialog.is-portrait-video .clean-yt-wrapper {
    aspect-ratio: 9 / 16;
    max-height: 76vh;
  }

  /* Oversized cropped viewport so YouTube's top title bar & bottom watermark are pushed outside the frame */
  .clean-yt-viewport {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none; /* Prevents direct click on YouTube iframe */
  }
  .clean-yt-viewport iframe,
  .clean-yt-viewport > div {
    position: absolute !important;
    top: -65px !important;
    left: 0 !important;
    width: 100% !important;
    height: calc(100% + 130px) !important;
    border: 0 !important;
    pointer-events: none !important;
  }

  /* Click-to-play/pause surface + solid black cover when paused so YouTube's "More videos" never shows */
  .clean-yt-surface {
    position: absolute;
    inset: 0;
    z-index: 4;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: background .18s ease;
  }
  .clean-yt-wrapper.is-paused .clean-yt-surface {
    background: #0d0d0c;
  }
  .clean-yt-pause-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s ease;
    filter: brightness(0.65);
  }
  .clean-yt-wrapper.is-paused .clean-yt-pause-poster {
    opacity: 1;
  }
  .clean-yt-center-icon {
    position: relative;
    z-index: 2;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(23, 23, 20, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 20px;
    padding-left: 3px;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity .18s ease, transform .18s ease, background .18s ease;
    pointer-events: none;
  }
  .clean-yt-wrapper.is-paused .clean-yt-center-icon {
    opacity: 1;
    transform: scale(1);
  }
  .clean-yt-surface:hover .clean-yt-center-icon {
    background: #ff704f;
  }

  /* Clean Custom Control Bar (Play/Pause, Seekbar, Time, Mute/Volume, Fullscreen) */
  .clean-yt-controls {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 14px 11px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.35) 68%, transparent);
    color: #fff;
    font: 500 11px/1 "DM Sans", sans-serif;
  }
  .clean-yt-btn {
    border: 0;
    background: none;
    color: #fff;
    cursor: pointer;
    padding: 4px 6px;
    font-size: 13px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.92;
    transition: opacity .15s, color .15s;
  }
  .clean-yt-btn:hover {
    opacity: 1;
    color: #f1d84d;
  }
  .clean-yt-seek {
    flex: 1;
    appearance: none;
    -webkit-appearance: none;
    height: 4px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.28);
    cursor: pointer;
    outline: none;
  }
  .clean-yt-seek::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff704f;
    cursor: pointer;
    border: 2px solid #fff;
  }
  .clean-yt-seek::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff704f;
    cursor: pointer;
    border: 2px solid #fff;
  }
  .clean-yt-time {
    font-variant-numeric: tabular-nums;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.88);
    min-width: 68px;
    text-align: center;
  }
  .clean-yt-vol {
    width: 58px;
    appearance: none;
    -webkit-appearance: none;
    height: 4px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.28);
    cursor: pointer;
    outline: none;
  }
  .clean-yt-vol::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  @media (max-width: 520px) {
    .clean-yt-vol { display: none; }
    .clean-yt-controls { gap: 7px; padding: 10px; }
  }
`;
document.head.appendChild(customPlayerStyle);

function cardMarkup(item, kind, index, gallery = false) {
  const [one, two, three] = item.colors || [
    "#ded7c6",
    "#9d907b",
    "#353430"
  ];

  const isReel = kind === "reels";
  const ytId = getYouTubeId(item.video);
  const thumbUrl = item.image
    ? encodeURI(item.image)
    : ytId
      ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg`
      : "";

  const art = ytId
    ? `<img
         class="project-image"
         src="${thumbUrl}"
         onerror="if(this.src.includes('maxresdefault')){this.src='https://i.ytimg.com/vi/${ytId}/hqdefault.jpg';}"
         alt="${item.title} video thumbnail"
         loading="lazy">`
    : item.video
      ? `<video
           class="project-video"
           src="${encodeURI(item.video)}"
           ${item.image ? `poster="${encodeURI(item.image)}"` : ""}
           autoplay
           loop
           muted
           playsinline
           preload="metadata"
           aria-label="${item.title} video preview"></video>`
      : item.image
        ? `<img
             class="project-image"
             src="${encodeURI(item.image)}"
             alt="${item.title} video thumbnail"
             loading="lazy">`
        : `<span class="poster-orb" aria-hidden="true"></span>
           <span class="poster-stripe" aria-hidden="true"></span>
           <span class="poster-title">${item.title}</span>
           <span class="poster-hint">ADD YOUR YOUTUBE URL</span>`;

  return `
    <article
      class="project-card"
      style="--poster-bg:linear-gradient(145deg,${one},${two} 52%,${three});
             --poster-accent:${two};
             --poster-dark:${three}">
      <div class="project-meta">
        <b>${item.title}</b>
        <span>${isReel ? "REEL" : "EDIT"}</span>
      </div>

      <div
        class="project-poster ${isReel ? "portrait" : "landscape"}"
        data-play-kind="${kind}"
        data-play-index="${index}"
        ${ytId ? `data-yt-id="${ytId}"` : ""}>
        ${art}
        <button
          class="play-button"
          type="button"
          data-play-kind="${kind}"
          data-play-index="${index}"
          aria-label="Preview ${item.title}">▶</button>
      </div>

      <div class="project-caption">
        <span>${item.detail}</span>
        ${gallery && item.featured ? "<b>HOME FEATURED</b>" : ""}
      </div>
    </article>`;
}

function renderCards(rootId, items, kind) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.innerHTML = items
    .map((item, index) =>
      cardMarkup(item, kind, index, document.body.dataset.page !== "home")
    )
    .join("");

  root.querySelectorAll(".project-video").forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
  });
}

function renderFaq(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.innerHTML = items
    .map(item => `
      <details>
        <summary>${item.q}<span>＋</span></summary>
        <p>${item.a}</p>
      </details>`)
    .join("");
}

const page = document.body.dataset.page;

if (page === "home") {
  renderCards(
    "home-reels",
    reels.filter(item => item.featured).slice(0, 3),
    "reels"
  );

  renderCards(
    "home-long",
    longForm.filter(item => item.featured).slice(0, 3),
    "longForm"
  );

  renderFaq("home-faq", faqItems.slice(0, 4));
} else if (page === "reels") {
  renderCards("all-reels", reels, "reels");
  renderFaq("reels-faq", faqItems.slice(0, 5));
} else if (page === "long") {
  renderCards("all-long", longForm, "longForm");
  renderFaq("long-faq", [
    faqItems[0],
    faqItems[1],
    faqItems[3],
    faqItems[5]
  ]);
}

document.querySelectorAll("[data-year]").forEach(node => {
  node.textContent = new Date().getFullYear();
});

// Visible local videos auto-play; off-screen videos pause to save resources.
if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll(".project-video").forEach(video => {
    videoObserver.observe(video);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector(".menu-panel");

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  menuPanel.classList.toggle("is-open", !open);
});

menuPanel?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuPanel.classList.remove("is-open");
  });
});

document.addEventListener("click", event => {
  if (
    menuPanel?.classList.contains("is-open") &&
    !event.target.closest(".header")
  ) {
    menuPanel.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    menuPanel?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

// Load YouTube IFrame Player API for 100% custom controls without YouTube UI
let ytApiReadyPromise = null;
function ensureYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (ytApiReadyPromise) return ytApiReadyPromise;

  ytApiReadyPromise = new Promise(resolve => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === "function") prev();
      resolve(window.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });

  return ytApiReadyPromise;
}

function formatTime(sec) {
  if (!sec || isNaN(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

const dialog = document.querySelector("#video-dialog");

if (dialog) {
  const player = dialog.querySelector("video");
  const caption = dialog.querySelector("p");

  // Build Custom Clean Player UI (no YouTube chrome, no logo, no title, custom controls)
  const cleanWrapper = document.createElement("div");
  cleanWrapper.className = "clean-yt-wrapper";
  cleanWrapper.style.display = "none";
  cleanWrapper.innerHTML = `
    <div class="clean-yt-viewport">
      <div id="yt-api-mount"></div>
    </div>
    <div class="clean-yt-surface" aria-label="Play or pause video">
      <img class="clean-yt-pause-poster" alt="" />
      <div class="clean-yt-center-icon">▶</div>
    </div>
    <div class="clean-yt-controls">
      <button type="button" class="clean-yt-btn" data-yt-toggle aria-label="Play or Pause">❚❚</button>
      <input type="range" class="clean-yt-seek" min="0" max="100" step="0.1" value="0" aria-label="Seek timeline" />
      <span class="clean-yt-time">0:00 / 0:00</span>
      <button type="button" class="clean-yt-btn" data-yt-mute aria-label="Mute or Unmute">🔊</button>
      <input type="range" class="clean-yt-vol" min="0" max="100" step="1" value="100" aria-label="Volume" />
      <button type="button" class="clean-yt-btn" data-yt-fs aria-label="Fullscreen">⛶</button>
    </div>
  `;
  player.insertAdjacentElement("beforebegin", cleanWrapper);

  const surface = cleanWrapper.querySelector(".clean-yt-surface");
  const pausePoster = cleanWrapper.querySelector(".clean-yt-pause-poster");
  const toggleBtn = cleanWrapper.querySelector("[data-yt-toggle]");
  const seekInput = cleanWrapper.querySelector(".clean-yt-seek");
  const timeLabel = cleanWrapper.querySelector(".clean-yt-time");
  const muteBtn = cleanWrapper.querySelector("[data-yt-mute]");
  const volInput = cleanWrapper.querySelector(".clean-yt-vol");
  const fsBtn = cleanWrapper.querySelector("[data-yt-fs]");

  let ytPlayer = null;
  let ytTimer = null;
  let isSeeking = false;
  let activeVideoId = null;

  function startProgressLoop() {
    stopProgressLoop();
    ytTimer = setInterval(() => {
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function" || isSeeking) return;
      const cur = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || 0;
      if (dur > 0) {
        seekInput.value = String((cur / dur) * 100);
        timeLabel.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
        // Loop smoothly just before the very end so YouTube end-screen never triggers
        if (dur - cur <= 0.35) {
          ytPlayer.seekTo(0, true);
          ytPlayer.playVideo();
        }
      }
    }, 200);
  }

  function stopProgressLoop() {
    if (ytTimer) {
      clearInterval(ytTimer);
      ytTimer = null;
    }
  }

  function togglePlayPause() {
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== "function") return;
    const state = ytPlayer.getPlayerState();
    if (state === 1) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  }

  surface.addEventListener("click", togglePlayPause);
  toggleBtn.addEventListener("click", togglePlayPause);

  seekInput.addEventListener("input", () => {
    isSeeking = true;
    if (!ytPlayer || typeof ytPlayer.getDuration !== "function") return;
    const dur = ytPlayer.getDuration() || 0;
    const target = ( parseFloat(seekInput.value) / 100 ) * dur;
    timeLabel.textContent = `${formatTime(target)} / ${formatTime(dur)}`;
  });

  seekInput.addEventListener("change", () => {
    if (ytPlayer && typeof ytPlayer.getDuration === "function") {
      const dur = ytPlayer.getDuration() || 0;
      const target = ( parseFloat(seekInput.value) / 100 ) * dur;
      ytPlayer.seekTo(target, true);
    }
    isSeeking = false;
  });

  muteBtn.addEventListener("click", () => {
    if (!ytPlayer || typeof ytPlayer.isMuted !== "function") return;
    if (ytPlayer.isMuted()) {
      ytPlayer.unMute();
      muteBtn.textContent = "🔊";
      volInput.value = String(ytPlayer.getVolume() || 100);
    } else {
      ytPlayer.mute();
      muteBtn.textContent = "🔇";
      volInput.value = "0";
    }
  });

  volInput.addEventListener("input", () => {
    if (!ytPlayer || typeof ytPlayer.setVolume !== "function") return;
    const v = parseInt(volInput.value, 10);
    ytPlayer.setVolume(v);
    if (v === 0) {
      ytPlayer.mute();
      muteBtn.textContent = "🔇";
    } else {
      if (ytPlayer.isMuted()) ytPlayer.unMute();
      muteBtn.textContent = "🔊";
    }
  });

  fsBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      cleanWrapper.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });

  async function openCleanYouTube(ytId, thumbSrc) {
    activeVideoId = ytId;
    pausePoster.src = thumbSrc || `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
    cleanWrapper.classList.remove("is-paused");
    toggleBtn.textContent = "❚❚";
    seekInput.value = "0";
    timeLabel.textContent = "0:00 / 0:00";

    const YT = await ensureYouTubeApi();
    if (activeVideoId !== ytId) return;

    if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
      ytPlayer.loadVideoById(ytId);
      ytPlayer.unMute();
      ytPlayer.setVolume(100);
      muteBtn.textContent = "🔊";
      volInput.value = "100";
      startProgressLoop();
      return;
    }

    ytPlayer = new YT.Player("yt-api-mount", {
      videoId: ytId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: event => {
          event.target.unMute();
          event.target.setVolume(100);
          event.target.playVideo();
          muteBtn.textContent = "🔊";
          volInput.value = "100";
          startProgressLoop();
        },
        onStateChange: event => {
          // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
          if (event.data === 1) {
            cleanWrapper.classList.remove("is-paused");
            toggleBtn.textContent = "❚❚";
            startProgressLoop();
          } else if (event.data === 2) {
            cleanWrapper.classList.add("is-paused");
            toggleBtn.textContent = "▶";
          } else if (event.data === 0) {
            event.target.seekTo(0, true);
            event.target.playVideo();
          }
        }
      }
    });
  }

  // Video poster box mein kahin bhi click karne par clean custom player sound ke saath kholo.
  document.addEventListener("click", event => {
    const poster = event.target.closest(".project-poster");
    if (!poster) return;

    const ytId = poster.dataset.ytId;
    const sourceVideo = poster.querySelector(".project-video");
    if (!ytId && !sourceVideo) return;

    // Background mein chal rahe local cards pause karo.
    document.querySelectorAll(".project-video").forEach(video => {
      video.pause();
    });

    const isPortrait = poster.classList.contains("portrait");
    dialog.classList.toggle("is-portrait-video", isPortrait);

    caption.textContent =
      poster.closest(".project-card")?.querySelector(".project-meta b")?.textContent || "";

    if (ytId) {
      player.pause();
      player.removeAttribute("src");
      player.style.display = "none";

      cleanWrapper.style.display = "block";
      const thumbImg = poster.querySelector(".project-image")?.src || "";
      dialog.showModal();
      openCleanYouTube(ytId, thumbImg);
    } else if (sourceVideo) {
      stopProgressLoop();
      if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
        ytPlayer.pauseVideo();
      }
      cleanWrapper.style.display = "none";

      player.style.display = "block";
      player.src = sourceVideo.currentSrc || sourceVideo.src;
      player.removeAttribute("muted");
      player.muted = false;
      player.defaultMuted = false;
      player.volume = 1;
      player.loop = true;
      player.playsInline = true;
      player.controls = true;

      dialog.showModal();
      player.play().catch(() => {});
    }
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    activeVideoId = null;
    stopProgressLoop();
    if (ytPlayer && typeof ytPlayer.stopVideo === "function") {
      ytPlayer.stopVideo();
    }
    cleanWrapper.style.display = "none";
    player.pause();
    player.removeAttribute("src");
    player.load();
    dialog.classList.remove("is-portrait-video");
  });
}

(() => {
  const hero = document.querySelector(".hero");
  const name = hero && [...hero.querySelectorAll("h1")]
    .find(el => el.textContent.trim().toLowerCase() === "anil kumar");

  if (!hero || !name || hero.querySelector(".hero-software-logos")) return;

  const style = document.createElement("style");
  style.textContent = `
    .hero-software-logos {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: clamp(14px, 2vw, 26px);
      margin: 10px auto 0;
      pointer-events: none;
    }

    .hero-software-logos img {
      display: block;
      width: clamp(48px, 5vw, 64px);
      height: clamp(48px, 5vw, 64px);
      object-fit: contain;
      filter: drop-shadow(0 4px 7px rgba(0,0,0,.14));
      animation: heroSoftwareFloat 4.8s ease-in-out infinite;
    }

    .hero-software-logos img:nth-child(2) { animation-delay: -.8s; }
    .hero-software-logos img:nth-child(3) { animation-delay: -1.6s; }
    .hero-software-logos img:nth-child(4) { animation-delay: -2.4s; }

    @keyframes heroSoftwareFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    @media (max-width: 600px) {
      .hero-software-logos { gap: 12px; }
      .hero-software-logos img {
        width: 46px;
        height: 46px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-software-logos img { animation: none; }
    }
  `;
  document.head.appendChild(style);

  const row = document.createElement("div");
  row.className = "hero-software-logos";
  row.setAttribute("aria-label", "Editing software");

  const logos = [
    ["DaVinci Resolve", "https://commons.wikimedia.org/wiki/Special:Redirect/file/DaVinci%20Resolve%2017%20logo.svg"],
    ["Adobe After Effects", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Adobe%20After%20Effects%20CC%20icon.svg"],
    ["Adobe Premiere Pro", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Adobe-premiere-pro-icon.svg"],
    ["Topaz Video AI", "https://start.topazlabs.com/assets/tpz-video-icon-CVagHGab.png"]
  ];

  logos.forEach(([alt, src]) => {
    const img = document.createElement("img");
    img.alt = alt;
    img.src = src;
    img.title = alt;
    row.appendChild(img);
  });

  name.insertAdjacentElement("afterend", row);
})();