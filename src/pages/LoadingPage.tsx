import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-gray-300/40 border-t-primary-500 animate-spin" aria-label="Loading indicator" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Loading...</h1>
          <p className="text-gray-600">Please wait while we prepare your experience.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default LoadingPage;
