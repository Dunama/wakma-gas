import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';


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
      image: '/sales.jpg',
      reverse: false
    },
    {
      title: 'Professional Cylinder Handling',
      description:
        'Our trained team follows stringent loading and delivery protocols, giving you confidence that every cylinder is filled, sealed, and transported with utmost care.',
      image: '/safety.jpg',
      reverse: true
    },
    {
      title: 'Cylinders for Every Household',
      description:
        'Choose from a wide selection of cylinder sizes and finishes, all pressure-tested and supported with ongoing maintenance to match your daily cooking needs.',
      image: '/cylinders.jpg',
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen pt-24 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Carousel */}
        <HeroCarousel 
          images={[
            '/gas-truck.jpg',
            '/gas-cylinder.jpg',
            '/gas-station.jpg',
          ]}
          autoPlayMs={10000}
          className="absolute inset-0"
          overlayClassName="bg-black/40"
          showDefaultContent={false}
        />
  <div className="relative z-10 flex min-h-[calc(100vh-12rem)] items-start justify-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
          <div className="max-w-3xl text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              {...fadeInUp}
            >
              Wakma Gas Nigeria 
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold mb-8 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your trusted partner in safe, reliable, and affordable cooking gas services in Adamawa State.
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

          <div className="space-y-16">
            {featureHighlights.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex flex-col items-center gap-10 lg:gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: feature.reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                >
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-3xl shadow-xl shadow-gray-900/10"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  />
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2 text-center lg:text-left"
                  initial={{ opacity: 0, x: feature.reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">Trusted Service</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;