import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire(import.meta.url);

// Try to find sharp from pnpm store
let sharp;
try {
  sharp = require('sharp');
} catch {
  // Try direct path for pnpm
  const sharpPath = path.join(process.cwd(), 'node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');
  sharp = require(sharpPath);
}

const imagesDir = path.join(process.cwd(), 'public/images');

const folders = [
  'Bobina Jornal',
  'Bobina LWC',
  'Bobina Semi Kraft',
  'Bobina Strong',
  'Caixa papel acoplado',
  'Pacote papel Jornal',
  'Pacote papel LWC',
  'Pacote papel Strong',
  'Pacote papel acoplado',
];

async function convertFolder(folder) {
  const folderPath = path.join(imagesDir, folder);
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const ext = path.extname(file).toLowerCase();
    
    // Skip if already a web format
    if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
      console.log(`  Skipping (already web format): ${file}`);
      continue;
    }
    
    // Build output name
    const baseName = path.parse(file).name;
    const outputPath = path.join(folderPath, `${baseName}.webp`);
    
    // Skip if output already exists
    if (fs.existsSync(outputPath)) {
      console.log(`  Skipping (output exists): ${baseName}.webp`);
      continue;
    }
    
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .resize(800, 600, { fit: 'cover' })
        .toFile(outputPath);
      console.log(`  ✓ Converted: ${file} -> ${baseName}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${file} - ${err.message}`);
    }
  }
}

async function main() {
  console.log('Converting images to WebP...\n');
  
  for (const folder of folders) {
    console.log(`📁 ${folder}`);
    await convertFolder(folder);
    console.log('');
  }
  
  console.log('Done!');
}

main().catch(console.error);
