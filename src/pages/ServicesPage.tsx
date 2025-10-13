import { motion } from 'framer-motion';
// import { Fuel } from 'lucide-react';

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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

       {/* CNG Car Conversion (image + copy) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: first on mobile, right column on md+ */}
            <div className="mx-auto w-full max-w-md md:max-w-lg md:col-start-2 md:row-start-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="https://i.pinimg.com/736x/27/a6/2d/27a62d722734b5043628297b45f6ffb4.jpg"
                  alt="Cooking gas lpg"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy: second on mobile, left column on md+ */}
            <div className="text-center md:text-left md:col-start-1 md:row-start-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get Your Cooking Gas (LPG) Today</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
               we sell affordable cooking gas (LPG) to meet your Household and Commercial needs. 
               Our LPG is sourced from reputable suppliers and undergoes rigorous quality checks to ensure safety and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Cylinders Showcase (compact with copy) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: smaller, keeps 4:3 ratio */}
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="/gascylinder.jpg"
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
            </div>
          </div>
        </div>
      </section>

      {/* Gas accessories (image + copy) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: smaller, keeps 4:3 ratio */}
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="/gasaccessories.jpeg"
                  alt="Various gas accessories including regulators, hoses, and burners"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy: headline and bullets */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gas Accessories for Every Need</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From regulators and hoses to burners and cookers, we stock a wide range of high-quality accessories
                to complement your cooking gas setup. Our experts can help you find the right parts for safety and performance.
               </p>
            </div>
          </div>
        </div>
      </section>
      {/* (image + copy) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image: first on mobile, right column on md+ */}
            <div className="mx-auto w-full max-w-md md:max-w-lg md:col-start-2 md:row-start-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-gray-100">
                <img
                  src="https://ng.jumia.is/cms/external/pet/GE779VP3ISM8JNAFAMZ/3da4b036d837275649c312b8ff3bd886.jpg"
                  alt="conversion of generators from fuel to lpg"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy: second on mobile, left column on md+ */}
            <div className="text-center md:text-left md:col-start-1 md:row-start-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We Convert Generators from fuel to Liquid Petroleum Gas (LPG)</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Looking to cut fuel costs and reduce emissions? Our team professionally converts petrol vehicles to run on
                Liquid Petroleum Gas (LPG). Enjoy a cleaner, efficient fuel option that’s safe and reliable for everyday use.
              </p>
            </div>
          </div>
        </div>
      </section>
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