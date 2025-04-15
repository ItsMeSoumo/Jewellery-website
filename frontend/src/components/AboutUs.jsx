import { motion } from 'framer-motion'

export const AboutUs = () => {
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-32 container mx-auto px-6 bg-[#080808] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif font-bold mb-6 gold-gradient-text">About CellaZia Jewellers</h1>
        <p className="text-gray-300 mb-8">A legacy of excellence since 1982.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="CellaZia Jewellers Workshop"
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <div>
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-4 text-yellow-400">Our Story</h2>
            <motion.p className="text-gray-300 mb-4">
              Founded in 1982 by Shri Ramesh Chand, CellaZia Jewellers has been a beacon of excellence in the jewelry industry for over four decades.
            </motion.p>
            <motion.p className="text-gray-300 mb-4">
              What began as a small workshop has blossomed into one of India's most respected jewelry houses, known for its commitment to quality, craftsmanship, and customer satisfaction.
            </motion.p>
            <motion.p className="text-gray-300 mb-4">
              Every piece that leaves our workshop carries with it our legacy and promise of excellence. We blend traditional techniques with modern innovations to create timeless pieces that tell a story.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4 text-yellow-400">Our Values</h2>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <span className="text-yellow-400 mr-2">✦</span>
                <span className="text-gray-300">Exceptional craftsmanship and attention to detail</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <span className="text-yellow-400 mr-2">✦</span>
                <span className="text-gray-300">Ethically sourced materials and sustainable practices</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <span className="text-yellow-400 mr-2">✦</span>
                <span className="text-gray-300">Personalized service and customer satisfaction</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <span className="text-yellow-400 mr-2">✦</span>
                <span className="text-gray-300">Preserving traditional techniques while embracing innovation</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}