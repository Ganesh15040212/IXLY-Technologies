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
    quote: 'Hi, I’m Raja Sambath, Co-Founder of Synamen Thinklabs Private Limited. We’ve been working with IXLY Technologies for the past two years, and our experience has been excellent. Their technical expertise and customer-centric approach help deliver reliable and scalable solutions. I highly recommend IXLY Technologies as a trusted technology partner for e-commerce, Magento, and digital solutions.',
    name: 'Raja Sambath',
    role: 'CEO, Synamen Thinklabs Pvt. Ltd',
  },
  {
    id: 'client-2',
    video: videoUrl('client2', '/videos/client2.mp4'),
    quote: 'Hi, I’m Bala Vishnu, Founder and CEO of Techno Tackle Software Solutions. We have successfully partnered with IXLY Technologies for .NET and Magento staff augmentation services. Their professional team helped us deliver projects on time, ensuring a smooth experience and satisfied customers. I highly recommend IXLY Technologies for reliable .NET, Magento, and other technology staffing solutions.',
    name: 'Bala Vishnu',
    role: 'Founder and CEO, Techno Tackle Software Solutions',
  },
  {
    id: 'client-3',
    video: videoUrl('client3', '/videos/client3.mp4'),
    quote: 'Hi, I’m Santosh, Software Structural Architect & RAD Global Private Limited. we’ve been working with IXLY Technologies since 2022. They successfully developed our website from scratch, handling complex backend logic, dynamic GST calculations, and live preview features. Their team is highly professional, cooperative, and responsive, making our experience smooth and stress-free. I highly recommend IXLY Technologies for complex projects that require reliable technical expertise and the right solutions.',
    name: 'Santosh',
    role: 'Software Structural Architect, RAD Global Private Limited',
  },
]
