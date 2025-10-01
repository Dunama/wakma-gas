import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import { MapPin, Phone, Mail, MessageSquare, Clock, Users } from 'lucide-react';

type CardKey = 'location' | 'phone' | 'email';

type InfoCard = {
  key: CardKey;
  icon: typeof MapPin;
  accentClass: string;
  frontTitle: string;
  frontLines: string[];
  frontHint: string;
  backTitle: string;
  backLines: string[];
  backHint: string;
  ctas?: Array<{ label: string; href: string; external?: boolean }>;
};

const ContactPage = () => {
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

  const [flippedCards, setFlippedCards] = useState<Record<CardKey, boolean>>({
    location: false,
    phone: false,
    email: false
  });

  const toggleCard = (key: CardKey) => {
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const infoCards: InfoCard[] = [
    {
      key: 'location',
      icon: MapPin,
      accentClass: 'text-primary-600',
      frontTitle: 'Location',
      frontLines: [
        'Opposite Rochas Foundation Academy',
        'Adamawa State, Nigeria'
      ],
      frontHint: 'Tap to reveal directions',
      backTitle: 'Visit Us',
      backLines: [
        'Opposite Rochas Foundation Academy',
        'Mubi, Adamawa State, Nigeria'
      ],
      backHint: 'Tap again to flip back',
      ctas: [
        {
          label: 'Open in Google Maps',
          href: 'https://maps.app.goo.gl/LeWRf38sGz5NpBfb8',
          external: true
        }
      ]
    },
    {
      key: 'phone',
      icon: Phone,
      accentClass: 'text-accent-600',
      frontTitle: 'Phone',
      frontLines: [
        '+234 (0) 803 078 1297',
        'Available 24/7'
      ],
      frontHint: 'Tap for quick dial options',
      backTitle: 'Call Us Anytime',
      backLines: [
        'Customer Support: +234 803 078 1297',
        'Emergency Hotline: +234 708 000 0000'
      ],
      backHint: 'Tap again to flip back',
      ctas: [
        { label: 'Call Support', href: 'tel:+2348030781297' },
        { label: 'Call Emergency', href: 'tel:+2347080000000' }
      ]
    },
    {
      key: 'email',
      icon: Mail,
      accentClass: 'text-primary-600',
      frontTitle: 'Email',
      frontLines: [
        'info@wakmagas.com',
        'We reply within 24 hours'
      ],
      frontHint: 'Tap to reveal direct links',
      backTitle: 'Send Us a Message',
      backLines: [
        'Reach our team at info@wakmagas.com',
        'We respond promptly to every request'
      ],
      backHint: 'Tap again to flip back',
      ctas: [
        { label: 'Compose Email', href: 'mailto:info@wakmagas.com' }
      ]
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
            '/gas-truck.jpg',
            '/gas-cylinder.jpg',
            '/gas-station.jpg',
            '/hero-customer-service.jpg',
            '/hero-delivery.jpg',
            '/hero-refilling.jpg',
            '/hero-safety.jpg',
            '/hero-storage-facility.jpg',
            '/hero-technician.jpg',
          ]}
          autoPlayMs={10000}
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
              Contact & Feedback
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We'd love to hear from you! Reach out to us for inquiries, refills, or feedback. Your satisfaction is our priority.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {infoCards.map((card) => {
              const Icon = card.icon;
              const isFlipped = flippedCards[card.key];
              return (
                <motion.div
                  key={card.key}
                  variants={fadeInUp}
                  className="relative"
                  style={{ perspective: 1200 }}
                >
                  <motion.button
                    type="button"
                    className="relative flex w-full min-h-[260px] flex-col items-center justify-center rounded-xl bg-white px-8 py-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 [transform-style:preserve-3d]"
                    onClick={() => toggleCard(card.key)}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    whileHover={{ y: -6 }}
                    aria-pressed={isFlipped}
                    aria-label={`Toggle ${card.frontTitle.toLowerCase()} details`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 [backface-visibility:hidden]"
                      style={{ pointerEvents: isFlipped ? 'none' : 'auto' }}
                    >
                      <Icon className={`h-12 w-12 ${card.accentClass}`} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{card.frontTitle}</h3>
                        {card.frontLines.map((line, idx) => (
                          <p key={`${card.key}-front-${idx}`} className="text-gray-600 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-primary-600/80">{card.frontHint}</p>
                    </div>

                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      style={{ pointerEvents: isFlipped ? 'auto' : 'none' }}
                    >
                      <Icon className={`h-12 w-12 ${card.accentClass}`} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{card.backTitle}</h3>
                        {card.backLines.map((line, idx) => (
                          <p key={`${card.key}-back-${idx}`} className="text-gray-600 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                      {card.ctas && (
                        <div className="flex flex-wrap justify-center gap-3">
                          {card.ctas.map((cta) => (
                            <a
                              key={`${card.key}-${cta.label}`}
                              href={cta.href}
                              target={cta.external ? '_blank' : undefined}
                              rel={cta.external ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/40 transition-colors duration-300 hover:bg-primary-500"
                            >
                              {cta.label}
                            </a>
                          ))}
                        </div>
                      )}
                      <p className="text-xs uppercase tracking-wide text-gray-400">{card.backHint}</p>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200">
                    <option>Select a service</option>
                    <option>Gas Refilling</option>
                    <option>Cylinder Sales</option>
                    <option>Gas Accessories</option>
                    <option>Safety Checks & Maintenance</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="glow-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Google Maps Integration</p>
                  <p className="text-gray-500 text-sm">Interactive map coming soon</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600 text-sm">Monday - Sunday: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-accent-600" />
                  <div>
                    <p className="font-medium text-gray-900">Customer Service</p>
                    <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default ContactPage;