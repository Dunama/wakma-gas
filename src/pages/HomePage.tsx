import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assets';
import { useImagePreloader } from '../utils/useImagePreloader';


const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Enable Ken Burns only on screens >= sm and when user hasn't requested reduced motion
  const [enableKenBurns, setEnableKenBurns] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 640px)');
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnableKenBurns(mq.matches && !rm.matches);
    update();
    mq.addEventListener?.('change', update);
    rm.addEventListener?.('change', update);
    return () => {
      mq.removeEventListener?.('change', update);
      rm.removeEventListener?.('change', update);
    };
  }, []);

  // Preload hero image(s)
  const heroDesktop = getAssetUrl('wakma5.jpg', '/wakma5.jpg');
  const heroMobile = getAssetUrl('wakma5mb.jpg', '/wakma5mb.jpg');
  const { ready: heroReady } = useImagePreloader([heroDesktop, heroMobile]);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
  className="relative min-h-screen pt-20 pb-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Static background image with mobile variant */}
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 640px)" srcSet={heroMobile} />
            <motion.img
              src={heroDesktop}
              alt="Wakma Gas background"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              loading="eager"
              decoding="async"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={enableKenBurns ? { scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, 8, 0] } : { scale: 1, x: 0, y: 0 }}
              transition={enableKenBurns ? { duration: 20, ease: 'easeInOut', repeat: Infinity } : { duration: 0 }}
              style={{ opacity: heroReady ? 1 : 0, transition: 'opacity .3s ease' }}
            />
          </picture>
        </div>
        {/* White transparent overlay above image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {!heroReady && (
          <div className="absolute inset-0 grid place-items-center z-[1]">
            <div className="h-10 w-10 rounded-full border-4 border-white/30 border-t-orange-500 animate-spin" />
          </div>
        )}
        
  <div className="relative z-10 flex min-h-[calc(100vh-8rem)] items-center md:items-start justify-center px-4 sm:px-5 lg:px-8 pt-6 md:pt-16 pb-6">
          <div className="max-w-3xl text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow"
              {...fadeInUp}
            >
              WAKMA GAS NIGERIA 
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold mb-8 leading-relaxed drop-shadow"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover safe, affordable cooking gas refilling and cylinder services in Adamawa.
            </motion.p>
          
            <motion.div
              className="flex justify-center"
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Indicators */}
      <motion.section 
        className="py-12 bg-white border-b"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <motion.h1 
              className="flex flex-col items-center"
              {...fadeInUp}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </motion.h1>
            
            <motion.div 
              className="flex flex-col items-center"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-accent-600 mb-2">2+</div>
              <div className="text-gray-600">Years of Service</div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;