const fs = require('fs');
const path = require('path');

const imgDir = path.resolve('assets/images');

// Read logo
const logoB64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'logo.jpg')).toString('base64');

// Read 23 photos
const images = {};
for (let i = 1; i <= 23; i++) {
  const numStr = String(i).padStart(2, '0');
  const filename = `fundacion_${numStr}.jpg`;
  const filepath = path.join(imgDir, filename);
  if (fs.existsSync(filepath)) {
    images[filename] = 'data:image/jpeg;base64,' + fs.readFileSync(filepath).toString('base64');
  }
}
console.log('Loaded images count:', Object.keys(images).length);

// Generate JSON bundle
fs.writeFileSync(path.resolve('images-bundle.json'), JSON.stringify({ logo: logoB64, images }, null, 2));
console.log('Saved images-bundle.json');
