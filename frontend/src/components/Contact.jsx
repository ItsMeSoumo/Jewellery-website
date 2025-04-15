import { motion } from 'framer-motion'

export const Contact = () => {
  // Add floating gold dots for decoration
  const dots = [
    { size: '60px', top: '10%', left: '5%', delay: '0s' },
    { size: '80px', top: '60%', right: '10%', delay: '2s' },
    { size: '40px', bottom: '15%', left: '15%', delay: '4s' },
    { size: '30px', top: '20%', right: '20%', delay: '3s' },
    { size: '25px', bottom: '30%', right: '25%', delay: '1s' },
  ];

  return (
    <section className="py-20 contact-section overflow-hidden relative">
      {dots.map((dot, index) => (
        <div 
          key={index}
          className="gold-dot"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            animationDelay: dot.delay
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Reach out to us to discuss your jewelry needs or schedule a consultation with our expert craftsmen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-gradient-gold">Send Us a Message</h3>
            
            <form className="contact-form">
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 contact-input rounded-md focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 contact-input rounded-md focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 contact-input rounded-md focus:outline-none resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="gold-button w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-gradient-gold">Contact Information</h3>
            
            <div className="contact-form h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center mr-4 shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Visit Our Showroom</h4>
                    <p className="text-gray-400">15 Luxury Avenue, Fashion District, Paris</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center mr-4 shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email Us</h4>
                    <p className="text-gray-400">concierge@cellazia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center mr-4 shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Call Us</h4>
                    <p className="text-gray-400">+91 8888885555</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Working Hours</h4>
                <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">By appointment only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}