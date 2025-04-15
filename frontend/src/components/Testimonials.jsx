import { motion } from 'framer-motion'

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Their attention to detail and commitment to excellence is unmatched. Every piece tells a story of impeccable craftsmanship.",
      author: "Alessandro Rossi",
      title: "Fashion Director"
    },
    {
      text: "The personalized service creates an experience that is as exceptional as the products themselves. Truly the epitome of luxury.",
      author: "Leanne Torres",
      title: "CEO, Luminary Group"
    },
    {
      text: "The quality and design of each item reflects a deep understanding of timeless elegance that enhances any space.",
      author: "Amelia Chen",
      title: "Interior Designer"
    }
  ];

  return (
    <section className="py-20 site-theme">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-4 gold-gradient-text">Glowing Reviews</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">What our distinguished clients have to say about their experience with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-lg p-8 border border-gray-800 shadow-xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="italic text-gray-400 mb-6">"{testimonial.text}"</p>
              
              <div>
                <p className="font-semibold text-yellow-400">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}