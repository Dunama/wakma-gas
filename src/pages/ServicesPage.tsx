import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import { Fuel, Package, Settings, Shield } from 'lucide-react';

const ServicesPage = () => {
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

  const services = [
    {
      icon: Fuel,
      title: "Gas Refilling",
      description: "Fast, safe, and accurate refills for your cylinders with professional handling and quality assurance.",
      features: ["Quick turnaround time", "Safety certified process", "Accurate measurements", "Professional handling"],
      color: "primary"
    },
    {
      icon: Package,
      title: "Cylinder Sales",
      description: "Affordable and durable cooking gas cylinders in different sizes to meet your household needs.",
      features: ["Various sizes available", "Durable construction", "Competitive pricing", "Quality guarantee"],
      color: "accent"
    },
    {
      icon: Settings,
      title: "Gas Accessories",
      description: "Regulators, burners, hoses, and other essential accessories for your cooking gas setup.",
      features: ["Premium quality parts", "Compatible accessories", "Expert recommendations", "Installation support"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Safety Checks & Maintenance",
      description: "Professional inspection and servicing of cookers and cylinders to keep you safe.",
      features: ["Comprehensive inspections", "Preventive maintenance", "Safety certifications", "Expert technicians"],
      color: "accent"
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
        <HeroCarousel 
          images={[
          'https://wakma-gas.vercel.app/Wakma1.jpg',
          'https://wakma-gas.vercel.app/Wakma2.jpg',
          'https://wakma-gas.vercel.app/Wakma3.jpg',
          'https://wakma-gas.vercel.app/Wakma4.jpg',
          'https://wakma-gas.vercel.app/Wakma5.jpg',
          ]}
          autoPlayMs={15000}
          className="absolute inset-0"
          overlayClassName="bg-black/50 backdrop-blur-sm"
          showDefaultContent={false}
        />
        
        
        
  <div className="relative z-10 flex min-h-[calc(100vh-12rem)] items-start justify-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
          <div className="max-w-3xl text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 drop-shadow"
              {...fadeInUp}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              From Your Cooking Gas (LPG) to Compressed Natural Gas (CNG), We offer a wide range of services tailored to your needs.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`p-8 ${service.color === 'primary' ? 'bg-primary-50' : 'bg-accent-50'}`}>
                  <service.icon className={`h-12 w-12 ${service.color === 'primary' ? 'text-primary-600' : 'text-accent-600'} mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex, duration: 0.4 }}
                      >
                        <div className={`w-2 h-2 rounded-full ${service.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'}`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Assurance Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quality & Safety Guarantee
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every service we provide meets the highest industry standards. Our certified technicians ensure 
            your safety and satisfaction with every interaction.
          </p>
          <motion.button 
            className="glow-button text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Service
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;