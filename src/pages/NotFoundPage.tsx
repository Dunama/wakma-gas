import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-primary-600">404</h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">Page not found</p>
          <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist or has been moved.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="glow-button px-6 py-4 text-base">Go back home</Link>
            <Link to="/contact" className="px-6 py-4 text-base border border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white rounded-md transition-colors">Contact support</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default NotFoundPage;
