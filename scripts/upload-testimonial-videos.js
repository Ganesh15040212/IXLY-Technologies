import { v2 as cloudinary } from 'cloudinary'
import { readdirSync } from 'node:fs'
import path from 'node:path'

const { VITE_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env

if (!VITE_CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error(
    'Missing Cloudinary credentials. Set VITE_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET ' +
      '(e.g. in .env) and run again with: npm run upload:videos'
  )
  process.exit(1)
}

cloudinary.config({
  cloud_name: VITE_CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

const videosDir = path.resolve(import.meta.dirname, '../public/videos')
const folder = 'ixly-testimonials'

const files = readdirSync(videosDir).filter((f) => /\.(mp4|mov|m4v|webm)$/i.test(f))

if (files.length === 0) {
  console.error(`No video files found in ${videosDir}`)
  process.exit(1)
}

for (const file of files) {
  const publicId = path.parse(file).name
  const filePath = path.join(videosDir, file)
  process.stdout.write(`Uploading ${file} as ${folder}/${publicId} ... `)
  try {
    const result = await cloudinary.uploader.upload_large(filePath, {
      resource_type: 'video',
      folder,
      public_id: publicId,
      overwrite: true,
    })
    console.log('done')
    console.log(`  secure_url: ${result.secure_url}`)
  } catch (err) {
    console.log('FAILED')
    console.error(`  ${err.message}`)
  }
}

console.log('\nDone. The site will now serve these videos from Cloudinary automatically.')
