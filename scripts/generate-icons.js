// scripts/generate-icons.js
// Generates all favicon, icon, apple-touch-icon, and OG image assets
// Run: node scripts/generate-icons.js

const sharp = require("sharp");
const { imagesToIco } = require("png-to-ico");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../public");

// Brand colors matching the portfolio
const ACCENT = "#7c6cfc";
const BG = "#050509";

// ── SVG Favicon (PS monogram) ──
const iconSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c6cfc"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="${BG}"/>
  <rect x="${size * 0.06}" y="${size * 0.06}" width="${size * 0.88}" height="${size * 0.88}" rx="${size * 0.14}" fill="none" stroke="url(#g)" stroke-width="${size * 0.04}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="800" font-size="${size * 0.42}" fill="url(#g)"
    letter-spacing="${size * 0.02}">PS</text>
</svg>`;

// ── OG Image (1200x630) ──
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050509"/>
      <stop offset="100%" stop-color="#0a0a14"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c6cfc"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="accentV" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7c6cfc"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Grid pattern -->
  <g opacity="0.04">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="630" stroke="#7c6cfc" stroke-width="1"/>`).join("")}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="1200" y2="${i * 40}" stroke="#7c6cfc" stroke-width="1"/>`).join("")}
  </g>

  <!-- Accent border -->
  <rect x="30" y="30" width="1140" height="570" rx="20" fill="none" stroke="url(#accent)" stroke-width="2" opacity="0.3"/>

  <!-- PS monogram -->
  <rect x="80" y="160" width="140" height="140" rx="28" fill="${BG}" stroke="url(#accentV)" stroke-width="3"/>
  <text x="150" y="240" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="800" font-size="58" fill="url(#accent)">PS</text>

  <!-- Name -->
  <text x="260" y="200" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="800" font-size="48" fill="#ffffff" letter-spacing="1">PRASHANT SINGH</text>

  <!-- Title -->
  <text x="260" y="260" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="400" font-size="22" fill="#a1a1aa">Module Lead | Senior Frontend &amp; AI Migration Specialist</text>

  <!-- Divider -->
  <line x1="80" y1="340" x2="1120" y2="340" stroke="url(#accent)" stroke-width="1.5" opacity="0.4"/>

  <!-- Skills tags -->
  <text x="80" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">Angular</text>
  <text x="200" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">React</text>
  <text x="300" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">Next.js</text>
  <text x="420" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">TypeScript</text>
  <text x="580" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">AI Automation</text>
  <text x="760" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">SSR</text>
  <text x="840" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">CI/CD</text>

  <!-- Experience summary -->
  <text x="80" y="455" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-size="17" fill="#71717a">6+ Years Experience  ·  Taazaa Inc  ·  Moglix  ·  IIIT Bangalore</text>

  <!-- Highlights -->
  <text x="80" y="500" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-size="16" fill="#52525b">Led AngularJS→React migrations  ·  100K+ users on Tele-MANAS  ·  45% traffic boost on Tendershark</text>

  <!-- URL -->
  <text x="80" y="570" font-family="monospace" font-size="16" fill="#7c6cfc" opacity="0.8">prashantsingh.dev</text>

  <!-- Status badge -->
  <circle cx="1050" cy="565" r="5" fill="#4ade80"/>
  <text x="1065" y="570" font-family="monospace" font-size="14" fill="#4ade80">Available for Hire</text>
</svg>`;

async function generate() {
  console.log("Generating icon assets...\n");

  // 1. SVG favicon
  fs.writeFileSync(path.join(OUT, "icon.svg"), iconSvg(512).trim());
  console.log("  icon.svg");

  // 2. PNG icons at various sizes
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(Buffer.from(iconSvg(size)))
      .resize(size, size)
      .png()
      .toFile(path.join(OUT, name));
    console.log(`  ${name} (${size}x${size})`);
  }

  // 3. favicon.ico — manually build ICO from 32x32 PNG
  const png32Buf = fs.readFileSync(path.join(OUT, "favicon-32x32.png"));
  // Convert to raw RGBA via sharp for ICO embedding
  const raw32 = await sharp(path.join(OUT, "favicon-32x32.png"))
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data: rgba, info } = raw32;
  const w = info.width, h = info.height;
  // Build BMP DIB (BITMAPINFOHEADER) + pixel data
  const dibSize = 40;
  const bmpDataSize = (w * 4) * h; // BGRA rows bottom-up
  const andMaskRowSize = Math.ceil(w / 32) * 4;
  const andMaskSize = andMaskRowSize * h;
  const imageSize = dibSize + bmpDataSize + andMaskSize;
  const bmp = Buffer.alloc(imageSize);
  // BITMAPINFOHEADER
  bmp.writeUInt32LE(40, 0);        // biSize
  bmp.writeInt32LE(w, 4);          // biWidth
  bmp.writeInt32LE(h * 2, 8);      // biHeight (double for ICO)
  bmp.writeUInt16LE(1, 12);        // biPlanes
  bmp.writeUInt16LE(32, 14);       // biBitCount
  bmp.writeUInt32LE(0, 16);        // biCompression
  bmp.writeUInt32LE(bmpDataSize + andMaskSize, 20);
  // Write BGRA pixels bottom-up
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 4;
      const dstIdx = dibSize + ((h - 1 - y) * w + x) * 4;
      bmp[dstIdx + 0] = rgba[srcIdx + 2]; // B
      bmp[dstIdx + 1] = rgba[srcIdx + 1]; // G
      bmp[dstIdx + 2] = rgba[srcIdx + 0]; // R
      bmp[dstIdx + 3] = rgba[srcIdx + 3]; // A
    }
  }
  // AND mask (all zeros = fully opaque)
  // Already zeros from Buffer.alloc
  // ICO file header
  const ico = Buffer.alloc(6 + 16 + imageSize);
  ico.writeUInt16LE(0, 0);          // reserved
  ico.writeUInt16LE(1, 2);          // type: icon
  ico.writeUInt16LE(1, 4);          // count
  // ICO directory entry
  ico[6] = w >= 256 ? 0 : w;       // width
  ico[7] = h >= 256 ? 0 : h;       // height
  ico[8] = 0;                       // color palette
  ico[9] = 0;                       // reserved
  ico.writeUInt16LE(1, 10);         // planes
  ico.writeUInt16LE(32, 12);        // bits per pixel
  ico.writeUInt32LE(imageSize, 14); // image data size
  ico.writeUInt32LE(22, 18);        // offset to image data
  bmp.copy(ico, 22);
  fs.writeFileSync(path.join(OUT, "favicon.ico"), ico);
  console.log("  favicon.ico");

  // 4. OG image
  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(path.join(OUT, "og-image.png"));
  console.log("  og-image.png (1200x630)");

  console.log("\nAll icon assets generated in /public!");
}

generate().catch(console.error);
