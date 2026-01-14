const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_DIMENSION = 2000;
const QUALITY = 80;

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Folders to skip (if any)
const SKIP_FOLDERS = [];

let totalOriginalSize = 0;
let totalCompressedSize = 0;
let processedCount = 0;
let skippedCount = 0;

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Read the image
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip if already small enough
    if (originalSize < 100 * 1024) { // Skip files under 100KB
      skippedCount++;
      return;
    }

    // Calculate new dimensions (maintain aspect ratio)
    let width = metadata.width;
    let height = metadata.height;

    if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
      if (width > height) {
        height = Math.round((height / width) * MAX_DIMENSION);
        width = MAX_DIMENSION;
      } else {
        width = Math.round((width / height) * MAX_DIMENSION);
        height = MAX_DIMENSION;
      }
    }

    // Create temp file path
    const tempPath = filePath + '.tmp';

    // Process based on format
    if (ext === '.png') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(tempPath);
    } else {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(tempPath);
    }

    const compressedStats = fs.statSync(tempPath);
    const compressedSize = compressedStats.size;

    // Only replace if smaller
    if (compressedSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);

      totalOriginalSize += originalSize;
      totalCompressedSize += compressedSize;
      processedCount++;

      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      console.log(`Compressed: ${path.relative(PUBLIC_DIR, filePath)}`);
      console.log(`  ${formatBytes(originalSize)} -> ${formatBytes(compressedSize)} (${savings}% smaller)`);
    } else {
      fs.unlinkSync(tempPath);
      skippedCount++;
      console.log(`Skipped (already optimized): ${path.relative(PUBLIC_DIR, filePath)}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!SKIP_FOLDERS.includes(entry.name)) {
        await processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      await compressImage(fullPath);
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  console.log(`Processing images in: ${PUBLIC_DIR}`);
  console.log(`Max dimension: ${MAX_DIMENSION}px, Quality: ${QUALITY}%`);
  console.log('---');

  await processDirectory(PUBLIC_DIR);

  console.log('---');
  console.log(`Done! Processed ${processedCount} images, skipped ${skippedCount}`);

  if (processedCount > 0) {
    const totalSavings = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(1);
    console.log(`Total savings: ${formatBytes(totalOriginalSize - totalCompressedSize)} (${totalSavings}%)`);
    console.log(`Original: ${formatBytes(totalOriginalSize)} -> Compressed: ${formatBytes(totalCompressedSize)}`);
  }
}

main().catch(console.error);
