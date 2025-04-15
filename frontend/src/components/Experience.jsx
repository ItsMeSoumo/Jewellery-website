import { motion } from 'framer-motion'

export const Experience = () => {
    return (
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">
                <span className="text-yellow-400">Luxury</span> Experience
              </h2>
              <p className="text-gray-300 mb-8">
                Indulge in our exclusive luxury experiences tailored for discerning
                jewelry enthusiasts. Our personalized services ensure that your jewelry
                journey is nothing short of extraordinary.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Personal styling consultation with our expert jewelers',
                  'Private viewings of our exclusive collections',
                  'Custom design services for bespoke pieces',
                  'Exclusive access to limited edition and rare pieces',
                  'Complimentary jewelry cleaning and maintenance',
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-400 mr-2">✦</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Luxury jewelry experience"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Book Experience
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }