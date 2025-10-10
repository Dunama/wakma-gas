import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

type HeroCarouselProps = {
  images?: string[];
  autoPlayMs?: number;
  className?: string;
  overlayClassName?: string;
  showDefaultContent?: boolean;
  children?: ReactNode;
};

const DEFAULT_IMAGES = [
  'https://wakma-gas.vercel.app/Wakma1.jpg',
  // 'https://wakma-gas.vercel.app/Wakma2.jpg',
  'https://wakma-gas.vercel.app/Wakma3.jpg',
  'https://wakma-gas.vercel.app/Wakma4.jpg',
  'https://wakma-gas.vercel.app/Wakma5.jpg',
];

// Inject a small stylesheet to hide the left/right nav buttons.
// Runs at module import time in the browser.
if (typeof document !== 'undefined') {
  const styleId = 'hero-carousel-hide-nav';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      button[aria-label="Previous slide"],
      button[aria-label="Next slide"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}

const HeroCarousel = ({
  images,
  autoPlayMs = 10000,
  className,
  overlayClassName = 'hero-overlay',
  showDefaultContent = true,
  children,
}: HeroCarouselProps) => {
  const imagesKey = images?.join('|') ?? 'default';
  const slideImages = images && images.length > 0 ? images : DEFAULT_IMAGES;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const imageCount = slideImages.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [imagesKey]);

  useEffect(() => {
    if (imageCount <= 1 || autoPlayMs <= 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageCount);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [imageCount, autoPlayMs, imagesKey]);

  // Ken Burns effect variants per slide
  const kenBurns = {
    initial: { opacity: 0, scale: 1.05, x: -12, y: -8 },
    animate: {
      opacity: 1,
      scale: 1.18,
      x: 12,
      y: 8,
      transition: { duration: autoPlayMs / 1000, ease: 'easeInOut' },
    },
    exit: { opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  } as const;

  // Responsive heights across devices; fall back to provided className when passed
  const wrapperClassName =
    className ?? 'relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen overflow-hidden bg-black';

  return (
    <div className={wrapperClassName}>
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${imagesKey}-${currentSlide}`}
              src={slideImages[currentSlide]}
              alt=""
              className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center will-change-[opacity,transform]"
              variants={kenBurns}
              initial="initial"
              animate="animate"
              exit="exit"
              onLoad={() => setFirstImageLoaded(true)}
              loading={firstImageLoaded ? 'lazy' : 'eager'}
              decoding="async"
            />
          </AnimatePresence>
          {overlayClassName && overlayClassName !== 'none' && (
            <div
              className={`absolute inset-0 ${overlayClassName}`}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </div>

        {/* Loading overlay (uses LoadingPage styling) */}
        {!firstImageLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
            <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-white/30 border-t-accent-500 animate-spin" aria-label="Loading image" />
          </div>
        )}

        {(showDefaultContent || children) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              {children ?? (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                    Welcome to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-wakma-orange to-white">
                      Wakma Gas
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
                    Your trusted partner for safe, affordable, and reliable cooking gas solutions in Adamawa State.
                  </p>

                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    Founded by Dr. Michael Zira and located opposite Rochas Foundation Academy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/services"
                      className="glow-button px-8 py-6 text-lg inline-flex items-center justify-center"
                    >
                      Explore Services
                    </Link>
                    <Link
                      to="/contact"
                      className="px-8 py-6 text-lg border border-white text-white hover:bg-accent-600 hover:border-accent-600 hover:text-white rounded-md inline-flex items-center justify-center transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Slideshow controls and dots removed per request */}
      </div>
    </div>
  );
};

export default HeroCarousel;