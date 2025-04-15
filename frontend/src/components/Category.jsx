import { motion } from 'framer-motion'

export const Category = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
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
        <h1 className="text-4xl font-serif font-bold mb-6 gold-gradient-text">Jewelry Categories</h1>
        <p className="text-gray-300 mb-8">Browse our wide range of jewelry categories.</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {['Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Anklets', 'Pendants'].map((category, index) => (
          <motion.div 
            key={index} 
            className="bg-[#111111] p-8 shadow-md hover:shadow-xl border border-gray-800 rounded-lg hover:border-yellow-400 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8, borderColor: '#facc15' }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">{category}</h2>
            <p className="text-gray-300 mb-4">Exquisite {category.toLowerCase()} crafted with precision and passion.</p>
            <motion.button 
              className="gold-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Collection
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}