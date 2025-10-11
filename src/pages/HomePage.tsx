import { motion } from 'framer-motion';


const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const featureHighlights = [
    {
      title: 'Complete Gas Starter Kits',
      description:
        'Pick up a ready-to-use package that includes a double-burner stove, calibrated regulator, hose, and factory-tested cylinder so you can start cooking safely right away.',
      image: '/Wakma1.jpg',
      reverse: false
    },
    {
      title: 'Professional Cylinder Handling',
      description:
        'Our trained team follows stringent loading and delivery protocols, giving you confidence that every cylinder is filled, sealed, and transported with utmost care.',
      image: '/wakma5.jpg',
      reverse: true
    },
    {
      title: 'Cylinders for Every Household',
      description:
        'Choose from a wide selection of cylinder sizes and finishes, all pressure-tested and supported with ongoing maintenance to match your daily cooking needs.',
      image: '/gaskits.jpg',
      reverse: false
    }
  ];

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
            <source media="(max-width: 640px)" srcSet="/wakma5mb.jpg" />
            <motion.img
              src="/wakma5.jpg"
              alt="Wakma Gas background"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, 8, 0] }}
              transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
            />
          </picture>
        </div>
        {/* White transparent overlay above image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
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

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Wakma Gas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service with the highest safety standards
            </p>
          </motion.div>

          <div className="space-y-10 md:space-y-12">
            {featureHighlights.map((feature, index) => (
              <motion.section
                key={feature.title}
                className={`flex flex-col md:flex-row items-center justify-center md:justify-center lg:justify-start gap-4 md:gap-6 lg:gap-10 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.figure
                  className="w-full md:w-5/12 lg:w-5/12 max-w-[480px] sm:max-w-[560px] md:max-w-[640px] mx-auto"
                  initial={{ opacity: 0, x: feature.reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                >
                  <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9]">
                      <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full object-contain sm:object-cover object-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'tween', duration: 0.25 }}
                      />
                    </div>
                  </div>
                  <figcaption className="sr-only">{feature.title}</figcaption>
                </motion.figure>
                <motion.div
                  className="w-full md:w-6/12 max-w-2xl mx-auto text-center md:text-left"
                  initial={{ opacity: 0, x: feature.reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.section>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;