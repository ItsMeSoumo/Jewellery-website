import { motion } from 'framer-motion'
import ring from '../assets/ring.jpg'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Necklace",
      subtitle: "22 Carat gold necklace for wedding",
      price: "75,999"
    },
    {
      image: "https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Diamond Earrings",
      subtitle: "Elegant diamond earrings for special occasions",
      price: "92,499"
    },
    {
      image: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.webp?a=1&b=1&s=612x612&w=0&k=20&c=tFd9iR9l9wb4UKZ2amrzkGLQ_CWk5aOZhsg2ALK2ZkY=",
      title: "Gold Bracelet",
      subtitle: "Handcrafted 24K gold bracelet with intricate design",
      price: "63,999"
    }
  ];

  // Handle navigation to Special Collection
  const handleShopNowClick = () => {
    navigate('/special-collection');
  };

  // Use useCallback to memoize navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Reset timer when navigation happens
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [nextSlide, currentSlide]); // Adding currentSlide as dependency resets timer on manual navigation

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Fade Transition */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image} 
            alt={`Luxury ${slide.title}`} 
            className="w-full h-full object-contain md:object-cover object-center"
            style={{ maxHeight: "100vh" }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Right Arrow Navigation Only */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 lg:py-40 flex flex-col justify-center min-h-screen z-10">
        {slides.map((slide, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              y: currentSlide === index ? 0 : 30
            }}
            transition={{ duration: 0.8 }}
            className={`max-w-lg text-white absolute ${currentSlide === index ? "visible" : "invisible"}`}
          >
            <p className="text-yellow-400 mb-2">Exclusive Offer -20% Off This Week</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{slide.title}</h1>
            <p className="text-gray-300 mb-6">{slide.subtitle}</p>

            <div className="mb-8">
              <span className="text-gray-400 text-sm">Starting At</span>
              <div className="text-yellow-400 text-3xl font-bold">Rs. {slide.price}</div>
            </div>

            <button 
              onClick={handleShopNowClick}
              className="gold-button hero-button px-8 py-3 font-medium uppercase tracking-wider transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            >
              SHOPPING NOW
            </button>
          </motion.div>
        ))}

        {/* Glowing Yellow Indicator Dots */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "h-2.5 w-2.5 shadow-[0_0_12px_4px_rgba(253,224,71,0.7)] animate-pulse" 
                  : "h-2.5 w-2.5 bg-white/50 hover:bg-white/70"
              }`}
              style={currentSlide === index ? { backgroundColor: '#FFCB05' } : {}}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Features = () => {
  const features = [
    {
      title: "Handcrafted Pieces",
      description: "Each piece is meticulously crafted by skilled artisans with decades of experience in traditional jewelry making.",
      icon: "✦"
    },
    {
      title: "Exquisite Craftsmanship",
      description: "Our master jewelers blend age-old techniques with innovative approaches to create extraordinary pieces of art.",
      icon: "✦"
    },
    {
      title: "Rare Materials",
      description: "We source only the finest gemstones and precious metals from ethical suppliers around the world.",
      icon: "✦"
    },
    {
      title: "Bespoke Service",
      description: "Experience the luxury of having jewelry custom designed specifically for you, reflecting your unique style.",
      icon: "✦"
    },
    {
      title: "Timeless Design",
      description: "Our designs transcend fleeting trends, creating heirloom pieces that will be cherished for generations.",
      icon: "✦"
    },
    {
      title: "Sustainable Luxury",
      description: "We are committed to responsible sourcing and ethical practices throughout our creation process.",
      icon: "✦"
    }
  ];

  const handleShopNowClick = () => {
    navigate('/special-collection');
  };
  
  return (
    <>
      {/* Features Section */}
      <section className="py-20 bg-[#080808] relative overflow-hidden">
        {/* Background Image Container with Fixed Size */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
          <div className="w-full h-full max-w-6xl max-h-screen mx-auto overflow-hidden">
            <img 
              src={ring}
              alt="Gold jewelry background" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4 gold-gradient-text">Our Premium Collection</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">Discover our meticulously crafted luxury collections, designed to enhance your elegance with timeless sophistication.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="feature-card backdrop-blur-sm bg-white/5 p-6 rounded-lg cursor-pointer"
              >
                <div className="feature-icon text-yellow-400 text-3xl mb-3">
                  {feature.icon}
                </div>
                <h3 className="feature-title text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="feature-description text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section id="trending-collection" className="relative min-h-screen overflow-hidden bg-[#080808]">
        {/* Full viewable image container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-full h-full">
            <img 
              src="https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Premium gold ring on dark stone" 
              className="w-full h-full object-contain md:object-cover md:object-center"
              style={{ maxHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-[#080808]/60" />
          </div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-yellow-400 mb-4"
            >
              Sale Off 20% All Products
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
            >
              New Trending Collection
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-300 mb-8"
            >
              Best Design makes you more special
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              onClick={handleShopNowClick}
              className="border border-yellow-400 text-yellow-400 px-8 py-3 uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-all duration-300 hero-button"
              whileHover={{ y: -4, boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
            >
              SHOPPING NOW
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
