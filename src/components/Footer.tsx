import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand blurb */}
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <img
              src="/wakmaLogo.png"
              alt="Wakma Gas logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain select-none drop-shadow"
              loading="lazy"
              decoding="async"
            />
            <span className="text-2xl md:text-3xl font-bold tracking-tight">Wakma Gas</span>
          </div>
          <div className="h-1 w-24 bg-accent-500 mb-6" />
          <p className="text-white/90 leading-relaxed">
            Wakma Gas is a full-service LPG company in Nigeria focused on safe and
            reliable distribution of cooking gas and accessories.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
              title="Facebook"
            >
              <Facebook className="h-5 w-5 text-white/90" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
              title="Instagram"
            >
              <Instagram className="h-5 w-5 text-white/90" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
              title="X (Twitter)"
            >
              <Twitter className="h-5 w-5 text-white/90" />
            </a>
          </div>
        </div>

        {/* Contact Company */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Company</h3>
          <div className="h-1 w-24 bg-accent-500 mb-6" />
          <ul className="space-y-3 text-white/90">
            <li>+234 9032252588</li>
            <li>gas4wakma@gmail.com</li>
            <li>Opposite Rochas Foundation Academy, Adamawa</li>
            <li>www.wakmagas.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="h-1 w-24 bg-accent-500 mt-2 mb-6" />
          <ul className="space-y-3 text-white/90">
            <li>
              <a href="/" className="hover:text-accent-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-accent-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-accent-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Wakma Gas Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
