import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { clientReviews } from '../data/clientReviews'

export default function ClientReview() {
  const swiperRef = useRef(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const swiper = new Swiper('.client-review-swiper', {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 1,
      loop: clientReviews.length > 1,
      grabCursor: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.client-review-next',
        prevEl: '.client-review-prev',
      },
      pagination: {
        el: '.client-review-pagination',
        clickable: true,
      },
    })
    swiperRef.current = swiper
    // Looping only runs while the user is hovering the section; a playing video always takes priority and stops it.
    swiper.autoplay?.stop()

    // Only the active slide's blurred background video should actually be decoding/playing —
    // otherwise all slides (including offscreen loop clones) would autoplay muted video at once.
    const syncBackgroundVideos = () => {
      const activeSlide = swiper.slides[swiper.activeIndex]
      swiper.el.querySelectorAll('.client_review_video_bg').forEach((video) => {
        if (activeSlide && activeSlide.contains(video)) {
          video.play?.().catch(() => {})
        } else {
          video.pause?.()
        }
      })
    }
    swiper.on('slideChange', syncBackgroundVideos)
    syncBackgroundVideos()

    return () => {
      swiper.off('slideChange', syncBackgroundVideos)
      swiperRef.current = null
      swiper?.destroy(true, true)
    }
  }, [])

  const handleMouseEnter = () => {
    isHoveringRef.current = true
    swiperRef.current?.autoplay?.start()
  }

  const handleMouseLeave = () => {
    isHoveringRef.current = false
    swiperRef.current?.autoplay?.stop()
  }

  const handleVideoPlay = () => {
    swiperRef.current?.autoplay?.stop()
  }

  const handleVideoPause = () => {
    if (isHoveringRef.current) {
      swiperRef.current?.autoplay?.start()
    }
  }

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="client_review container">
        <div className="row col-md-12">
          <div className="col-md-12 zin text-center client_review_heading">
            <h3 className="highlighttext">Testimonials</h3>
            <h2>Our Client's Review</h2>
          </div>
        </div>
        <div className="client-review-swiper">
          <div className="swiper-wrapper">
            {clientReviews.map((review) => (
              <div className="swiper-slide" key={review.id}>
                <div className="row col-md-12 align-items-center">
                  <div className="col-md-6 zin">
                    <div className="client_review_video">
                      <video
                        className="client_review_video_bg"
                        src={review.video}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                        tabIndex={-1}
                      />
                      <video
                        className="client_review_video_fg"
                        src={review.video}
                        controls
                        playsInline
                        preload="metadata"
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        onEnded={handleVideoPause}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 zin">
                    <h3 className="highlighttext">Client Says.</h3>
                    <p>{review.quote}</p>
                    <div className="client_review_author">
                      <h5>{review.name}</h5>
                      <span>{review.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {clientReviews.length > 1 && (
          <div className="client_review_controls">
            <button type="button" className="client-review-prev" aria-label="Previous testimonial">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="client-review-pagination"></div>
            <button type="button" className="client-review-next" aria-label="Next testimonial">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
