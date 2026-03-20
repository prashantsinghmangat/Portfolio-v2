// Generate all favicon assets from the Ps. logo design
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../public");

// The exact purple from the uploaded Ps. logo
const PURPLE = "#7c6cfc";

// SVG matching the uploaded "Ps." logo — bold P, smaller s, dot
const logoSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="white"/>
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    font-weight="900" font-size="${size * 0.72}" fill="${PURPLE}"
    letter-spacing="-${size * 0.02}">Ps.</text>
</svg>`;

// Transparent background version for ico/icons
const logoSvgTransparent = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    font-weight="900" font-size="${size * 0.72}" fill="${PURPLE}"
    letter-spacing="-${size * 0.02}">Ps.</text>
</svg>`;

// OG Image (1200x630) with Ps. branding
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
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g opacity="0.04">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="630" stroke="#7c6cfc" stroke-width="1"/>`).join("")}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="1200" y2="${i * 40}" stroke="#7c6cfc" stroke-width="1"/>`).join("")}
  </g>
  <rect x="30" y="30" width="1140" height="570" rx="20" fill="none" stroke="url(#accent)" stroke-width="2" opacity="0.3"/>

  <!-- Ps. logo mark -->
  <text x="150" y="260" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="900" font-size="120" fill="#7c6cfc">Ps.</text>

  <!-- Name -->
  <text x="280" y="200" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="800" font-size="48" fill="#ffffff" letter-spacing="1">PRASHANT SINGH</text>
  <text x="280" y="260" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    font-weight="400" font-size="22" fill="#a1a1aa">Module Lead | Senior Frontend &amp; AI Migration Specialist</text>

  <line x1="80" y1="340" x2="1120" y2="340" stroke="url(#accent)" stroke-width="1.5" opacity="0.4"/>

  <text x="80" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">Angular</text>
  <text x="200" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">React</text>
  <text x="300" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">Next.js</text>
  <text x="420" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">TypeScript</text>
  <text x="580" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">AI Automation</text>
  <text x="760" y="395" font-family="monospace" font-size="18" fill="#22d3ee" font-weight="600">SSR</text>
  <text x="840" y="395" font-family="monospace" font-size="18" fill="#7c6cfc" font-weight="600">CI/CD</text>

  <text x="80" y="455" font-family="system-ui, sans-serif" font-size="17" fill="#71717a">6+ Years Experience  ·  Taazaa Inc  ·  Moglix  ·  IIIT Bangalore</text>
  <text x="80" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#52525b">Led AngularJS→React migrations  ·  100K+ users on Tele-MANAS  ·  45% traffic boost on Tendershark</text>

  <text x="80" y="570" font-family="monospace" font-size="16" fill="#7c6cfc" opacity="0.8">prashantsingh.dev</text>
  <circle cx="1050" cy="565" r="5" fill="#4ade80"/>
  <text x="1065" y="570" font-family="monospace" font-size="14" fill="#4ade80">Available for Hire</text>
</svg>`;

async function generate() {
  console.log("Generating favicon assets from Ps. logo...\n");

  // 1. SVG favicon (white bg for browser tabs)
  fs.writeFileSync(path.join(OUT, "icon.svg"), logoSvg(512).trim());
  console.log("  icon.svg");

  // 2. PNG icons
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(Buffer.from(logoSvg(size)))
      .resize(size, size)
      .png()
      .toFile(path.join(OUT, name));
    console.log(`  ${name} (${size}x${size})`);
  }

  // 3. favicon.ico — build manually from 32x32 PNG
  const raw32 = await sharp(Buffer.from(logoSvgTransparent(32)))
    .resize(32, 32)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data: rgba, info } = raw32;
  const w = info.width, h = info.height;
  const dibSize = 40;
  const bmpDataSize = (w * 4) * h;
  const andMaskRowSize = Math.ceil(w / 32) * 4;
  const andMaskSize = andMaskRowSize * h;
  const imageSize = dibSize + bmpDataSize + andMaskSize;
  const bmp = Buffer.alloc(imageSize);
  bmp.writeUInt32LE(40, 0);
  bmp.writeInt32LE(w, 4);
  bmp.writeInt32LE(h * 2, 8);
  bmp.writeUInt16LE(1, 12);
  bmp.writeUInt16LE(32, 14);
  bmp.writeUInt32LE(0, 16);
  bmp.writeUInt32LE(bmpDataSize + andMaskSize, 20);
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 4;
      const dstIdx = dibSize + ((h - 1 - y) * w + x) * 4;
      bmp[dstIdx + 0] = rgba[srcIdx + 2];
      bmp[dstIdx + 1] = rgba[srcIdx + 1];
      bmp[dstIdx + 2] = rgba[srcIdx + 0];
      bmp[dstIdx + 3] = rgba[srcIdx + 3];
    }
  }
  const ico = Buffer.alloc(6 + 16 + imageSize);
  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(1, 4);
  ico[6] = w >= 256 ? 0 : w;
  ico[7] = h >= 256 ? 0 : h;
  ico[8] = 0;
  ico[9] = 0;
  ico.writeUInt16LE(1, 10);
  ico.writeUInt16LE(32, 12);
  ico.writeUInt32LE(imageSize, 14);
  ico.writeUInt32LE(22, 18);
  bmp.copy(ico, 22);
  fs.writeFileSync(path.join(OUT, "favicon.ico"), ico);
  console.log("  favicon.ico");

  // 4. OG image
  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(path.join(OUT, "og-image.png"));
  console.log("  og-image.png (1200x630)");

  console.log("\nAll assets generated!");
}

generate().catch(console.error);
