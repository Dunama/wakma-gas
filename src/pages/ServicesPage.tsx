import { motion } from 'framer-motion';
import { Fuel, Package, Settings, Shield, Leaf } from 'lucide-react';

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
      icon: Leaf,
      title: "Compressed Natural Gas (CNG)",
      description: "CNG is natural gas stored under high pressure. It's a cleaner, efficient fuel option for vehicles and generators, helping reduce running costs and emissions.",
      features: [
        "Full meaning: Compressed Natural Gas",
        "Lower emissions than petrol or diesel",
        "Reliable supply and safe handling",
        "Support for fleets, businesses, and homes"
      ],
      color: "accent"
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
        {/* Static background image for Services (wakma3) with Ken Burns */}
        <div className="absolute inset-0">
          <motion.img
            src="/wakma3.jpg"
            alt="Wakma Gas services background"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            loading="eager"
            decoding="async"
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ scale: [1, 1.1, 1], x: [0, 12, 0], y: [0, 6, 0] }}
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

      {/* Gas Cylinders Showcase (compact with copy) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: smaller, keeps 4:3 ratio */}
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="/gascylinders.jpg"
                  alt="Assorted LPG gas cylinders in different sizes and colors"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy: headline and bullets */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cylinders for Every Home</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Choose from a wide range of LPG cylinder sizes—each pressure‑tested, safe, and ready for daily cooking.
                We provide expert guidance to help you pick the right size for your family and usage.
              </p>
              <ul className="text-gray-700 space-y-2 max-w-xl mx-auto md:mx-0">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500" /> 3kg • 6kg • 12.5kg • 25kg options</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500" /> Durable builds with leak checks</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500" /> Accessories available: regulators, hoses, burners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CNG Car Conversion (image + copy) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: first on mobile, right column on md+ */}
            <div className="mx-auto w-full max-w-md md:max-w-lg md:col-start-2 md:row-start-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="/cng.jpg"
                  alt="Technician working on vehicle conversion for CNG"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy: second on mobile, left column on md+ */}
            <div className="text-center md:text-left md:col-start-1 md:row-start-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We Convert Cars to Compressed Natural Gas (CNG)</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Looking to cut fuel costs and reduce emissions? Our team professionally converts petrol vehicles to run on
                Compressed Natural Gas (CNG). Enjoy a cleaner, efficient fuel option that’s safe and reliable for everyday use.
              </p>
              <ul className="text-gray-700 space-y-2 max-w-xl mx-auto md:mx-0">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent-500" /> Full meaning: Compressed Natural Gas (CNG)</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent-500" /> Professional installation and safety checks</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent-500" /> Lower running costs vs petrol or diesel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;