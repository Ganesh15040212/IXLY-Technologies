// Testimonial videos are served from Cloudinary (upload via `npm run upload:videos`)
// once VITE_CLOUDINARY_CLOUD_NAME is set; otherwise they fall back to the local files
// in public/videos/ so the site still works before Cloudinary is configured.
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

function videoUrl(publicId, localPath) {
  if (!CLOUD_NAME) return localPath
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/ixly-testimonials/${publicId}.mp4`
}

export const clientReviews = [
  {
    id: 'client-1',
    video: videoUrl('client1', '/videos/client1.mp4'),
    quote: 'IXLY Technologies understood our requirements from day one and delivered a solution that went beyond what we expected. Their team was responsive, professional, and truly invested in our success. (Demo text — to be replaced with actual client feedback.)',
    name: 'Client Name',
    role: 'CEO, Synamen Thinklabs Pvt. Ltd',
  },
  {
    id: 'client-2',
    video: videoUrl('client2', '/videos/client2.mp4'),
    quote: 'IXLY Technologies understood our requirements from day one and delivered a solution that went beyond what we expected. Their team was responsive, professional, and truly invested in our success. (Demo text — to be replaced with actual client feedback.)',
    name: 'Client Name',
    role: 'Designation, Company Name',
  },
  {
    id: 'client-3',
    video: videoUrl('client3', '/videos/client3.mp4'),
    quote: 'IXLY Technologies understood our requirements from day one and delivered a solution that went beyond what we expected. Their team was responsive, professional, and truly invested in our success. (Demo text — to be replaced with actual client feedback.)',
    name: 'Client Name',
    role: 'Designation, Company Name',
  },
]
