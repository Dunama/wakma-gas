import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand blurb */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-accent-500" />
            <span className="text-2xl font-bold">Wakma Gas</span>
          </div>
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
          <h3 className="text-xl font-semibold mb-4">Contact Company</h3>
          <ul className="space-y-3 text-white/90">
            <li>+234 (0) 803 078 1297</li>
            <li>info@wakmagas.com</li>
            <li>Opposite Rochas Foundation Academy, Adamawa</li>
            <li>www.wakmagas.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Wakma Gas Newsletter</h3>
          <div className="h-1 w-32 bg-accent-500 mt-2 mb-6" />
          <p className="text-white/90 mb-6">
            Subscribe now to be the first to be updated about our latest news and events.
          </p>
          <div className="flex rounded-md overflow-hidden shadow-sm shadow-primary-900/20">
            <input
              className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
              placeholder="Email"
            />
            <button className="px-6 bg-accent-600 hover:bg-accent-500 transition-colors">→</button>
          </div>
          <p className="mt-4 text-white/80 text-sm">Have a question? <span className="underline">Click here</span></p>
        </div>
      </div>

      <div className="bg-accent-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Wakma Gas Ltd. All rights reserved.</p>
          <div className="space-x-6 mt-2 md:mt-0">
            <span>Sitemap</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
