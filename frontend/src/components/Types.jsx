import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Types = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.2 });

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tabs = [
    { id: 'featured', label: 'Featured' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'sale', label: 'On-Sale' }
  ];

  const jewelryItems = {
    featured: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Ring, Necklace Earrings",
        name: "Stone",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 45626.00"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Ring, Necklace Earrings",
        name: "Diamond",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 45626.00"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Ring, Necklace Earrings",
        name: "Necklace",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 40540.00"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Necklace",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 41626.00"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Nose Pin",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 41626.00"
      }
    ],
    new: [
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Gold Earrings",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 42626.00"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Ruby Earrings",
        originalPrice: "Rs. 55626.00",
        salePrice: "Rs. 51626.00"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Gold Coin",
        originalPrice: "Rs. 35626.00",
        salePrice: "Rs. 31626.00"
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Diamond Earrings",
        originalPrice: "Rs. 65626.00",
        salePrice: "Rs. 61626.00"
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Gold Necklace",
        originalPrice: "Rs. 75626.00",
        salePrice: "Rs. 71626.00"
      }
    ],
    sale: [
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Bridal Set",
        originalPrice: "Rs. 95626.00",
        salePrice: "Rs. 85626.00"
      },
      {
        id: 12,
        image: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Diamond Bracelet",
        originalPrice: "Rs. 45626.00",
        salePrice: "Rs. 38626.00"
      },
      {
        id: 13,
        image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Gold Pendant",
        originalPrice: "Rs. 25626.00",
        salePrice: "Rs. 19626.00"
      },
      {
        id: 14,
        image: "https://images.unsplash.com/photo-1706211747367-0af988d34eae?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Women",
        name: "Ruby Set",
        originalPrice: "Rs. 65626.00",
        salePrice: "Rs. 58626.00"
      },
      {
        id: 15,
        image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "Women",
        name: "Gold Choker",
        originalPrice: "Rs. 55626.00",
        salePrice: "Rs. 49626.00"
      }
    ]
  };

  return (
    <section className="py-20 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          ref={textRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textAnimation}
        >
          <h2 className="text-4xl font-serif font-bold mb-4 gold-gradient-text">Jewelry Collection</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Explore our diverse range of exquisite jewelry pieces designed to match every occasion and style.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-8 py-3 font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-yellow-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Display jewelry items based on active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {jewelryItems[activeTab].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="rounded-md overflow-hidden cursor-pointer group shadow-lg backdrop-blur-sm"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(200,200,200,0.2))' }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center backdrop-blur-sm"
                   style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(200,200,200,0.2))' }}>
                <div className="text-xs text-gray-300 mb-1">{item.category}</div>
                <h3 className="font-bold text-white mb-2">{item.name}</h3>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-400 line-through text-sm">{item.originalPrice}</span>
                  <span className="text-white font-semibold">{item.salePrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
