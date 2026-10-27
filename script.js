/*
  EDIT YOUR PORTFOLIO HERE
  Add a project by copying an object into reels or longForm.
  Copy the MP4 into assets/ and update its video path.
  featured: true puts it among the first three Home highlights.
  Reorder featured items to choose which three show first.
*/
/*
  Videos assets/ folder mein hain.
  featured: true wale pehle 3 edits Home page par dikhte hain.
*/

const reels = [
  {
    title: "Rider",
    detail: "Short-form edit · 0:22",
    image: "",
    video: "assets/rider.mp4",
    featured: true,
    colors: ["#e0c6a4", "#b78a62", "#302e2c"]
  },
  {
    title: "Edited Clip · 10 Oct",
    detail: "Short-form edit · 0:15",
    image: "",
    video: "assets/video_2026-10-10_14-57-39.mp4",
    featured: true,
    colors: ["#dcd8f4", "#9589ef", "#f1d46a"]
  }
];

const longForm = [
  {
    title: "1st Edit",
    detail: "Long-form edit · 0:52",
    image: "",
    video: "assets/1st edit.mp4",
    featured: true,
    colors: ["#e4c17a", "#f3d9a5", "#b95949"]
  },
  {
    title: "Color Grading",
    detail: "Color study · 0:06",
    image: "",
    video: "assets/color grading.mp4",
    featured: true,
    colors: ["#dcd8f4", "#9589ef", "#f1d46a"]
  },
  {
    title: "InVideo Intro",
    detail: "Intro edit · 1:22",
    image: "",
    video: "assets/InVideo-Intro-raw.mp4",
    featured: true,
    colors: ["#efd19b", "#c18b52", "#3a3130"]
  },
  {
    title: "Chess Piece Queen",
    detail: "Visual edit · 0:09",
    image: "",
    video: "assets/chess_piece_queen.mp4",
    featured: false,
    colors: ["#e1e9d4", "#96ad86", "#eee2c9"]
  },
  {
    title: "Comp 1_2",
    detail: "Compositing · 0:04",
    image: "",
    video: "assets/Comp 1_2.mp4",
    featured: false,
    colors: ["#edc57a", "#ca7544", "#3e3031"]
  },
  {
    title: "Comp 2",
    detail: "Compositing · 0:03",
    image: "",
    video: "assets/Comp 2.mp4",
    featured: false,
    colors: ["#d9dfc3", "#93ad93", "#343d37"]
  },
  {
    title: "Brain Animation with Cubes",
    detail: "3D motion · 0:07",
    image: "",
    video: "assets/final brain aniamtion with cubes.mp4",
    featured: false,
    colors: ["#adb9e8", "#59638f", "#26273f"]
  },
  {
    title: "Gems",
    detail: "Motion study · 0:12",
    image: "",
    video: "assets/gems_1.mp4",
    featured: false,
    colors: ["#d7c7ed", "#ad84cf", "#393047"]
  },
  {
    title: "Rain Dead",
    detail: "Visual edit · 0:08",
    image: "",
    video: "assets/rain dead.mp4",
    featured: false,
    colors: ["#bacbd0", "#718893", "#27353d"]
  }
];

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

// Play button ko video ke exact center mein rakho.
const centerPlayStyle = document.createElement("style");
centerPlayStyle.textContent = `
  .project-poster > .play-button {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .project-poster > .play-button:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;
document.head.appendChild(centerPlayStyle);

function cardMarkup(item, kind, index, gallery = false) {
  const [one, two, three] = item.colors || [
    "#ded7c6",
    "#9d907b",
    "#353430"
  ];

  const isReel = kind === "reels";

  const art = item.video
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
         <span class="poster-hint">ADD YOUR THUMBNAIL</span>`;

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

      <div class="project-poster ${isReel ? "portrait" : "landscape"}">
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

// Visible videos auto-play; off-screen videos pause to save resources.
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

const dialog = document.querySelector("#video-dialog");

if (dialog) {
  const player = dialog.querySelector("video");
  const caption = dialog.querySelector("p");

  // Play icon ko video box ke exact centre mein rakho.
  const centerStyle = document.createElement("style");
  centerStyle.textContent = `
    .project-poster { position: relative; }
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
  `;
  document.head.appendChild(centerStyle);

  // Video poster box mein kahin bhi click karne par sound ke saath kholo.
  document.addEventListener("click", event => {
    const poster = event.target.closest(".project-poster");
    if (!poster) return;

    const sourceVideo = poster.querySelector(".project-video");
    if (!sourceVideo) return;

    // Background mein chal rahe cards pause karo.
    document.querySelectorAll(".project-video").forEach(video => {
      video.pause();
    });

    player.src = sourceVideo.currentSrc || sourceVideo.src;
    player.removeAttribute("muted");
    player.muted = false;
    player.defaultMuted = false;
    player.volume = 1;
    player.loop = true;
    player.playsInline = true;
    player.controls = true;

    caption.textContent =
      poster.closest(".project-card")?.querySelector(".project-meta b")?.textContent || "";

    dialog.showModal();
    player.play().catch(() => {});
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    player.pause();
    player.removeAttribute("src");
    player.load();
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