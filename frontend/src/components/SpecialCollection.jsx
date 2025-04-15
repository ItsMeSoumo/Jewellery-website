import { motion } from 'framer-motion'

export const SpecialCollection = () => {
  // Specific high-quality jewelry images by collection
  const collectionImages = {
    heritage: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Maharani Necklace (updated)
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Royal Maang Tikka
      "https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"  // Temple Jewelry Set (updated)
    ],
    contemporary: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Geometric Diamond Ring
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Abstract Gold Earrings
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"  // Minimalist Bangles Set
    ],
    bridal: [
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Complete Bridal Set
      "https://media.istockphoto.com/id/1258516239/photo/indian-jewellery-accessories-on-background-kundan-necklace-set-indian-traditional-gold.webp?a=1&b=1&s=612x612&w=0&k=20&c=r0x8DxKD05O1PwBg89IedD7EjF_HbNxhPD5J7d-7wNU=", // Wedding Kundan Set
      "https://images.pexels.com/photos/6387626/pexels-photo-6387626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Bridal Gold Choker
    ]
  };
  
  // Collection data
  const collections = [
    { 
      name: "Heritage Collection", 
      description: "Drawing inspiration from India's rich cultural legacy, our Heritage Collection features intricate designs that celebrate timeless traditions.",
      items: [
        { name: "Maharani Necklace", price: "245,999", image: collectionImages.heritage[0] },
        { name: "Royal Maang Tikka", price: "89,499", image: collectionImages.heritage[1] },
        { name: "Temple Jewelry Set", price: "356,000", image: collectionImages.heritage[2] }
      ]
    },
    { 
      name: "Contemporary Fusion", 
      description: "Our Contemporary Fusion collection blends modern aesthetics with traditional craftsmanship, perfect for the modern sophisticated woman.",
      items: [
        { name: "Geometric Diamond Ring", price: "127,499", image: collectionImages.contemporary[0] },
        { name: "Abstract Gold Earrings", price: "76,900", image: collectionImages.contemporary[1] },
        { name: "Minimalist Bangles Set", price: "103,500", image: collectionImages.contemporary[2] }
      ]
    },
    { 
      name: "Bridal Splendor", 
      description: "Make your special day even more memorable with our exquisite bridal collection, designed to make you feel like royalty.",
      items: [
        { name: "Complete Bridal Set", price: "799,999", image: collectionImages.bridal[0] },
        { name: "Wedding Kundan Set", price: "456,000", image: collectionImages.bridal[1] },
        { name: "Bridal Gold Choker", price: "378,500", image: collectionImages.bridal[2] }
      ]
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
        <h1 className="text-4xl font-serif font-bold mb-6 gold-gradient-text">Special Collections</h1>
        <p className="text-gray-300 mb-8">Discover our exclusive and limited edition collections.</p>
      </motion.div>
      
      <div className="space-y-32">
        {collections.map((collection, index) => (
          <motion.div 
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            <motion.div 
              className="md:col-span-1"
              variants={textVariants}
            >
              <h2 className="text-3xl font-serif font-bold text-yellow-400 mb-4">{collection.name}</h2>
              <p className="text-gray-300 mb-6">{collection.description}</p>
              <motion.button 
                className="gold-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Collection
              </motion.button>
            </motion.div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {collection.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="bg-[#111111] p-4 shadow-md hover:shadow-xl border border-gray-800 rounded-lg hover:border-yellow-400 transition-all duration-300 group cursor-pointer"
                    whileHover={{ y: -8 }}
                  >
                    <div className="h-44 mb-4 rounded-md overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="text-yellow-300">Rs. {item.price}</p>
                    
                    <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center">
                      <motion.button 
                        className="text-xs text-yellow-400 hover:text-yellow-300"
                        whileHover={{ x: 3 }}
                      >
                        View Details
                      </motion.button>
                      <motion.div 
                        className="h-6 w-6 rounded-full bg-yellow-400/20 flex items-center justify-center cursor-pointer hover:bg-yellow-400/30 transition-colors"
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(250, 204, 21, 0.4)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-yellow-400 text-xs">+</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}