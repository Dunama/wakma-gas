// export default HeroCarousel;
import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type HeroCarouselProps = {
  images?: string[];
  autoPlayMs?: number;
  className?: string;
  overlayClassName?: string;
  showDefaultContent?: boolean;
  children?: ReactNode;
};

const DEFAULT_IMAGES = ['/gas-cylinder.jpg', '/gas-station.jpg', '/gas-truck.jpg'];

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
  const imageCount = slideImages.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [imagesKey]);

  useEffect(() => {
    if (imageCount <= 1 || autoPlayMs <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageCount);
    }, autoPlayMs);

    return () => clearInterval(timer);
  }, [imageCount, autoPlayMs, imagesKey]);

  const nextSlide = () => {
    if (imageCount <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % imageCount);
  };

  const prevSlide = () => {
    if (imageCount <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const wrapperClassName = className ?? 'relative h-screen overflow-hidden';

  return (
    <div className={wrapperClassName}>
      <div className="relative h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${imagesKey}-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
            />
            {overlayClassName && (
              <div
                className={`absolute inset-0 ${overlayClassName}`}
                style={{ pointerEvents: 'none' }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {(showDefaultContent || children) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              {children ?? (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
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
                      className="px-8 py-6 text-lg border border-white text-white hover:bg-white hover:text-wakma-blue rounded-md inline-flex items-center justify-center transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {imageCount > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-wakma-orange' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;