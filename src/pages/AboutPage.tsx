import { motion } from 'framer-motion';
// import { User, Target, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Each value item can have either a single string description OR an array of bullet strings
  const values: Array<{
    title: string;
    description: string | string[];
    color?: 'primary' | 'accent';
  }> = [
    {
      title: "Mission",
      description: "Our mission is to become one of the biggest producers and distributors of cooking gas and related products in Nigeria.",
      color: 'primary'
    },
    {
      
      title: "Vision",
      description: [
        "Provide quality cooking gas to the public.",
        "To use modern machines and equipment in hygienic environment.",
        "Creating un-interrupted availability of cooking gas and accessories.",
        "To create employment opportunities to the citizens of the state.",
        "To grow into a conglomerate."
      ],
      color: 'primary'
    },
    {
      title: "Values",
      description:[
        "Constant availability of the products.",
        "Quality products",
        "Production in hygienic environment.",
        "Timely delivery.",
        "Quality training of potential producers.",
        "Good corporate social responsibility.",
        "Good corporate citizen."
      ],
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.section 
        className="relative min-h-screen pt-24 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Static background image for About (wakma4) with Ken Burns */}
        <div className="absolute inset-0">
          <motion.img
            src="/wamka4.jpg"
            alt="About Wakma Gas background"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            loading="eager"
            decoding="async"
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 6, 0] }}
            transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        {/* White transparent overlay above image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        
        
  <div className="relative z-10 flex min-h-[calc(100vh-12rem)] items-start justify-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
          <div className="max-w-3xl text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 drop-shadow"
              {...fadeInUp}
            >
              About Wakma Gas
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Built on trust, driven by excellence, and committed to serving the Adamawa community with safe and reliable energy solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 text-center">
                {/* <User className="h-24 w-24 text-primary-600 mx-auto mb-6" /> */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Michael Zira</h3>
                <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                  Visionary leader committed to making clean energy accessible to every home in Adamawa State.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Our Story</h2>
              <div className="h-0.5 w-20 bg-orange-500 rounded mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by Dr. Michael Zira, Wakma Gas has been serving the Adamawa community with 
                dedication and excellence since its establishment. Our journey began with a simple 
                mission: to provide affordable, safe, and reliable cooking gas solutions that empower 
                homes and businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a strong presence in Yola and surrounding areas, Wakma Gas continues to stand out 
                as a brand built on trust and excellence in energy solutions. We've grown from a small 
                local business to a trusted partner for thousands of families across Adamawa State.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Our Mission, Vision & Values</h2>
            <div className="h-0.5 w-24 bg-orange-500 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in integrity, safety, and customer-first service. These core values guide 
              every decision we make and every service we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-6" /> */}
                <h3 className={`text-xl font-bold mb-2 ${value.color === 'primary' ? 'text-primary-600' : value.color === 'accent' ? 'text-accent-600' : 'text-gray-900'}`}>{value.title}</h3>
                <div className="h-0.5 w-12 bg-orange-500 rounded mx-auto mb-4"></div>
                {Array.isArray(value.description) ? (
                  <ul className="text-left space-y-2">
                    {value.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                        <span className="text-gray-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Community Impact */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Full-view background image (no cropping) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img
            src="/serving-community.png"
            alt="Serving the Adamawa Community"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay for readability above image */}
        <div className="absolute inset-0 z-[1] bg-black/50 pointer-events-none" />

        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Serving the Adamawa Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Located opposite Rochas Foundation Academy, we're proud to be a trusted part of the 
            Adamawa community, providing essential energy solutions that power homes and businesses 
            throughout the region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Happy Customers</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-2">2+</div>
              <div className="text-white/80">Years of Service</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;