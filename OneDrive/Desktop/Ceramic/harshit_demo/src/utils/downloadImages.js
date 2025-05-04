// This script helps download and convert images to WebP format
// You'll need to install sharp for WebP conversion: npm install sharp

import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const imageUrls = {
    'ceramic-vase-1': 'https://example.com/path-to-vase-image.jpg',
    'tea-set-1': 'https://example.com/path-to-tea-set-image.jpg',
    'wall-plate-1': 'https://example.com/path-to-wall-plate-image.jpg',
    'dinner-set-1': 'https://example.com/path-to-dinner-set-image.jpg',
    'plant-pot-1': 'https://example.com/path-to-plant-pot-image.jpg',
    'soap-dispenser-1': 'https://example.com/path-to-soap-dispenser-image.jpg',
    'sake-set-1': 'https://example.com/path-to-sake-set-image.jpg',
    'wind-chimes-1': 'https://example.com/path-to-wind-chimes-image.jpg',
    'tiles-1': 'https://example.com/path-to-tiles-image.jpg',
    'incense-holder-1': 'https://example.com/path-to-incense-holder-image.jpg',
    'serving-bowls-1': 'https://example.com/path-to-serving-bowls-image.jpg',
    'mug-set-1': 'https://example.com/path-to-mug-set-image.jpg'
};

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            const chunks = [];
            response.on('data', (chunk) => chunks.push(chunk));
            response.on('end', () => resolve(Buffer.concat(chunks)));
            response.on('error', reject);
        }).on('error', reject);
    });
};

const convertToWebP = async (inputBuffer, outputPath) => {
    await sharp(inputBuffer)
        .webp({ quality: 80 })
        .resize(800, 800, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(outputPath);
};

const processImages = async () => {
    const outputDir = path.join(process.cwd(), 'public', 'images');
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const [name, url] of Object.entries(imageUrls)) {
        try {
            console.log(`Downloading ${name}...`);
            const imageBuffer = await downloadImage(url);
            
            console.log(`Converting ${name} to WebP...`);
            await convertToWebP(imageBuffer, path.join(outputDir, `${name}.webp`));
            
            console.log(`Successfully processed ${name}`);
        } catch (error) {
            console.error(`Error processing ${name}:`, error);
        }
    }
};

// Run the script
processImages().then(() => {
    console.log('All images processed successfully!');
}).catch(console.error); 