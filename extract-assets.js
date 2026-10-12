const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('NEATIFY_AGAM Website.html', 'utf8');
const regex = /src="(data:image\/[^;]+;base64,[^"]+)"/g;
let match;
let count = 0;

if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
if (!fs.existsSync('public/logo')) fs.mkdirSync('public/logo', { recursive: true });
if (!fs.existsSync('public/images')) fs.mkdirSync('public/images', { recursive: true });

while ((match = regex.exec(html)) !== null) {
  count++;
  const dataUri = match[1];
  const parts = dataUri.split(',');
  const mime = parts[0].match(/:(.*?);/)[1];
  const ext = mime.split('/')[1] || 'png';
  const buffer = Buffer.from(parts[1], 'base64');
  const filename = count === 1 ? 'neatify-agam-logo.png' : `extracted-asset-${count}.${ext}`;
  const outPath = path.join('public/logo', filename);
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved asset ${count} (${mime}, ${buffer.length} bytes) to ${outPath}`);
}

// Also copy neatify-agamjpeg.jpeg if exists
if (fs.existsSync('neatify-agamjpeg.jpeg')) {
  fs.copyFileSync('neatify-agamjpeg.jpeg', 'public/images/neatify-hero.jpeg');
  console.log('Copied neatify-agamjpeg.jpeg to public/images/neatify-hero.jpeg');
}
