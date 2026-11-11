const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const dir = 'C:/Users/Dady/.gemini/antigravity/brain/679903a1-360c-41e3-8852-7f552a44ca0a/.user_uploaded';
const outDir = path.resolve('assets/images');
fs.mkdirSync(outDir, { recursive: true });

// Extract logo
const htmlContent = fs.readFileSync(path.join(dir, 'media_1794352955542_9a5cde27.html'), 'utf8');
const logoMatch = htmlContent.match(/LOGO_DATA="data:image\/jpeg;base64,([^"]+)"/);
if (logoMatch) {
  const logoBuf = Buffer.from(logoMatch[1], 'base64');
  fs.writeFileSync(path.join(outDir, 'logo.jpg'), logoBuf);
  console.log('Saved logo.jpg, size:', logoBuf.length);
}

const pdfFiles = [
  'media_1794353032439_6d79d2ee.pdf', // 9 photos: taller, dinamica, estimulacion, zoom
  'media_1794353032470_8d3f7b72.pdf', // 3 photos: reunion, cena aniversario, pastel
  'media_1794353032434_de83e950.pdf', // 6 photos: evento infantil, disfraces, teatro, cuento viajero
  'media_1794353032442_93713dba.pdf'  // 5 photos: elaboracion de material didactico y manualidades
];

let globalIdx = 1;

pdfFiles.forEach((pdfName, pdfIdx) => {
  const buf = fs.readFileSync(path.join(dir, pdfName));
  const str = buf.toString('latin1');
  
  // Find all objects with /Subtype /Image
  const objRegex = /(\d+)\s+(\d+)\s+obj\s*<<([\s\S]*?)>>\s*stream/g;
  let m;
  while ((m = objRegex.exec(str)) !== null) {
    const dict = m[3];
    if (!dict.includes('/Subtype /Image') && !dict.includes('/Subtype/Image')) continue;
    
    // Find /Length
    const lenMatch = dict.match(/\/Length\s+(\d+)/);
    const length = lenMatch ? parseInt(lenMatch[1], 10) : null;
    
    // stream starts right after "stream\r\n" or "stream\n"
    const streamToken = 'stream';
    let sIdx = m.index + m[0].length;
    if (buf[sIdx] === 0x0D && buf[sIdx+1] === 0x0A) sIdx += 2;
    else if (buf[sIdx] === 0x0A || buf[sIdx] === 0x0D) sIdx += 1;
    
    let streamData;
    if (length) {
      streamData = buf.slice(sIdx, sIdx + length);
    } else {
      let eIdx = buf.indexOf(Buffer.from('endstream'), sIdx);
      streamData = buf.slice(sIdx, eIdx);
    }
    
    let decompressed = null;
    if (dict.includes('FlateDecode')) {
      try {
        decompressed = zlib.inflateSync(streamData);
      } catch (e) {
        try {
          decompressed = zlib.inflateRawSync(streamData);
        } catch (e2) {
          console.error(`Error inflating img in PDF ${pdfIdx}:`, e2.message);
        }
      }
    } else {
      decompressed = streamData;
    }
    
    if (decompressed) {
      const isJpg = decompressed[0] === 0xFF && decompressed[1] === 0xD8 && decompressed[2] === 0xFF;
      const numStr = String(globalIdx).padStart(2, '0');
      const filename = `fundacion_${numStr}.${isJpg ? 'jpg' : 'bin'}`;
      fs.writeFileSync(path.join(outDir, filename), decompressed);
      console.log(`Saved ${filename}: ${decompressed.length} bytes (isJpeg: ${isJpg}, PDF: ${pdfIdx})`);
      globalIdx++;
    }
  }
});
console.log('Extraction complete. Total images:', globalIdx - 1);
