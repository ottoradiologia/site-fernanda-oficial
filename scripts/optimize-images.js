/**
 * Script para otimizar imagens do projeto
 * Reduz tamanho para carregamento mais rápido
 * Uso: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 85;

function getAllImages(dir, files = []) {
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      getAllImages(fullPath, files);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const fs = await import('fs');
  const path = await import('path');
  const tmpPath = filePath + '.opt';
  try {
    let pipeline = sharp(filePath);
    const meta = await pipeline.metadata();

    if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    }

    await pipeline.toFile(tmpPath);
    fs.unlinkSync(filePath);
    fs.renameSync(tmpPath, filePath);
    return true;
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`Erro:`, err.message);
    return false;
  }
}

async function main() {
  console.log('Otimizando imagens...\n');
  const images = getAllImages(IMAGES_DIR);
  let done = 0;

  for (const img of images) {
    const rel = img.replace(join(__dirname, '..'), '').replace(/\\/g, '/');
    process.stdout.write(`  ${rel}... `);
    const ok = await optimizeImage(img);
    console.log(ok ? 'OK' : 'FALHOU');
    if (ok) done++;
  }

  console.log(`\nConcluído: ${done}/${images.length} imagens otimizadas.`);
}

main();
