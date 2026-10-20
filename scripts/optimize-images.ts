import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public/images/landing_page');
const outputDir = path.join(process.cwd(), 'public/images/landing_page/optimized');

const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

type OutputFormat = 'webp' | 'avif';

interface OptimizeOptions {
  maxWidth: number;
  webpQuality: number;
  avifQuality: number;
  generateFormats: OutputFormat[];
}

const options: OptimizeOptions = {
  maxWidth: 1200,
  webpQuality: 85,
  avifQuality: 65,
  generateFormats: ['webp', 'avif'],
};

function ensureDirectoryExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getImageFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    throw new Error(`Input directory does not exist: ${dir}`);
  }

  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.has(ext);
    });
}

async function optimizeToWebp(
  inputPath: string,
  outputPath: string,
  width: number,
  quality: number,
): Promise<void> {
  await sharp(inputPath)
    .resize({
      width,
      withoutEnlargement: true,
    })
    .webp({ quality })
    .toFile(outputPath);
}

async function optimizeToAvif(
  inputPath: string,
  outputPath: string,
  width: number,
  quality: number,
): Promise<void> {
  await sharp(inputPath)
    .resize({
      width,
      withoutEnlargement: true,
    })
    .avif({ quality })
    .toFile(outputPath);
}

async function optimizeImage(fileName: string): Promise<void> {
  const ext = path.extname(fileName).toLowerCase();
  if (!allowedExtensions.has(ext)) return;

  const inputPath = path.join(inputDir, fileName);
  const baseName = path.basename(fileName, ext);

  try {
    const metadata = await sharp(inputPath).metadata();

    if (!metadata.width) {
      console.warn(`⚠️ Skipped ${fileName}: unable to detect width.`);
      return;
    }

    const targetWidth = Math.min(metadata.width, options.maxWidth);

    if (options.generateFormats.includes('webp')) {
      const webpOutput = path.join(outputDir, `${baseName}.webp`);
      await optimizeToWebp(
        inputPath,
        webpOutput,
        targetWidth,
        options.webpQuality,
      );
      console.log(`✅ WEBP created: ${path.basename(webpOutput)}`);
    }

    if (options.generateFormats.includes('avif')) {
      const avifOutput = path.join(outputDir, `${baseName}.avif`);
      await optimizeToAvif(
        inputPath,
        avifOutput,
        targetWidth,
        options.avifQuality,
      );
      console.log(`✅ AVIF created: ${path.basename(avifOutput)}`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error);
  }
}

async function run(): Promise<void> {
  ensureDirectoryExists(outputDir);

  const files = getImageFiles(inputDir);

  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${files.length} image(s).\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('\n🎉 All images optimized successfully.');
}

run().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
