import { motion } from 'framer-motion'

export const UncutDiamond = () => {
  // Specific high-quality jewelry images
  const diamondImages = [
    "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pendant (fixed)
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Ring (unchanged)
    "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Earrings (fixed)
    "https://images.pexels.com/photos/17298622/pexels-photo-17298622/free-photo-of-golden-necklace-with-diamonds-and-rubies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Necklace (fixed)
  ];
  
  const products = [
    { 
      name: "Raw Diamond Pendant", 
      price: "86,999", 
      description: "Natural uncut diamond set in 22K gold",
      image: diamondImages[0]
    },
    { 
      name: "Rough Diamond Ring", 
      price: "92,499", 
      description: "Ethically sourced uncut diamond in rose gold setting",
      image: diamondImages[1]
    },
    { 
      name: "Uncut Diamond Earrings", 
      price: "104,799", 
      description: "Pair of uncut diamonds with traditional craftsmanship",
      image: diamondImages[2]
    },
    { 
      name: "Royal Uncut Necklace", 
      price: "378,999", 
      description: "Statement necklace with multiple uncut diamonds",
      image: diamondImages[3]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
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
        <h1 className="text-4xl font-serif font-bold mb-6 gold-gradient-text">Uncut Diamond Collection</h1>
        <p className="text-gray-300 mb-12">Discover our premium uncut diamond jewelry pieces crafted in their natural, raw beauty.</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {products.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-[#111111] overflow-hidden shadow-lg hover:shadow-xl border border-gray-800 rounded-lg hover:border-yellow-400 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-80 overflow-hidden">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">{item.name}</h2>
              <p className="text-yellow-300 luxury-price mb-3">
                <span className="price-currency">$</span>
                {item.price}
              </p>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <div className="flex justify-between items-center">
                <motion.button 
                  className="gold-button px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
                <motion.button 
                  className="text-yellow-400 border border-yellow-400/30 px-3 py-2 rounded hover:bg-yellow-400/10 transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(250, 204, 21, 0.2)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-20 bg-[#0a0a0a] p-8 rounded-lg border border-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl font-serif font-bold mb-6 text-yellow-400"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Uncut Diamonds
        </motion.h2>
        <motion.p 
          className="text-gray-300 mb-6"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Uncut diamonds, also known as rough diamonds, are diamonds that have not been cut or polished. 
          These natural gems showcase the raw beauty of diamonds as they are found in nature, before any human intervention.
        </motion.p>
        <motion.p 
          className="text-gray-300"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our uncut diamond collection celebrates this natural beauty, creating stunning pieces that highlight the unique 
          characteristics of each stone. Every piece is one-of-a-kind, just like the natural diamond it features.
        </motion.p>
      </motion.div>
    </div>
  )
}