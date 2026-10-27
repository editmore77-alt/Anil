# Anil Kumar — Video Editor Portfolio

Yeh HTML, CSS aur JavaScript wali responsive website hai. Isse VS Code mein kholkar apne videos aur text badal sakte ho. Koi framework ya build setup nahi chahiye.

## Website kholna

1. ZIP extract karo.
2. Extracted folder ko VS Code mein kholo.
3. `index.html` browser mein open karo. Edit karte waqt auto-refresh ke liye VS Code ka Live Server extension use kar sakte ho.

## Portfolio ke pages

- `index.html` — Home; har category ke maximum 3 featured edits dikhata hai.
- `reels.html` — Reels gallery aur pricing.
- `long-form.html` — Long Form gallery aur pricing.
- Har page ka MENU laptop, tablet aur mobile par kaam karta hai. Menu ke pricing links seedhe us page ke pricing section par le jaate hain.

## Abhi included videos

**Reels (2):** `1st edit.mp4`, `video_2026-10-10_14-57-39.mp4`

**Long Form gallery (9):** `chess_piece_queen.mp4`, `color grading.mp4`, `Comp 1_2.mp4`, `Comp 2.mp4`, `final brain aniamtion with cubes.mp4`, `gems_1.mp4`, `InVideo-Intro-raw.mp4`, `rain dead.mp4`, `rider.mp4`.

Videos ZIP ke `assets` folder mein hain. Gallery ke video cards auto-play hote hain, muted rehte hain aur loop chalte hain. Play button se clip ka bada preview khol sakte ho. Scroll se bahar videos pause ho jaate hain taaki extra video load kam ho.

## Baad mein naya video kaise add karein

1. Nayi MP4 file ko `assets` folder mein copy karo.
2. VS Code mein `script.js` kholo.
3. Video Reels ka hai to `const reels = [...]` ke andar, ya Long Form ka hai to `const longForm = [...]` ke andar, kisi existing project object ko copy karke list ke end mein paste karo. Comma sahi jagah lagana.
4. `title` mein project ka naam, `detail` mein chhota description, aur `video` mein file ka exact relative path likho. Misal: `video: "assets/My new reel.mp4"`.
5. File save karo. Us category ka gallery page naya card apne aap dikha dega.

Home page par kaun-se edits dikhane hain, uske liye un projects mein `featured: true` rakho; baaki mein `featured: false`. Home par list ke pehle 3 featured projects dikhte hain. Reels ke liye abhi sirf 2 featured edits hain. Jo next Reel baad mein add karoge, usmein `featured: true` karne se woh Home par dikh jayegi.

Project card ka poster abhi decorative design hai; apna thumbnail chahiye to video ke saath image ko bhi `assets` folder mein rakho aur us project ke `image` field mein image path likho. Video playback ke liye `video` path zaroori hai.

## Text, FAQ, aur pricing badalna

- Naam, headings, services, contact buttons aur page links HTML files mein badlo.
- FAQs `script.js` ke `faqItems` list mein edit karo.
- Rang, fonts, spacing, mobile layout aur animation `styles.css` mein badlo.
- Instagram `@_ezaki_1` se linked hai. YouTube aur Twitter social links filhaal nahi hain.
- 1-minute Reel delivery 2–3 din tak likhi hai; timing editing style par depend karti hai. Revisions satisfaction tak hain.
- Product Ads ko service list se hata diya hai.

## Files

`index.html`, `reels.html`, `long-form.html`, `styles.css`, `script.js`, `README.md`, `assets/`.

Google Fonts ke liye internet chahiye; offline hone par fallback fonts chalenge.

