export const Footer = () => {
    return (
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <a href="#" className="font-serif text-3xl font-bold gold-gradient-text mb-4 inline-block">CELLAZIA</a>
              <p className="text-gray-400 max-w-sm">Elevating luxury to new heights through exceptional craftsmanship and unparalleled attention to detail.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Explore</h3>
                <ul className="space-y-2">
                  {['Home', 'Category', 'Uncut Diamond', 'About Us', 'Special Collection'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-yellow-400 transition-all">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Shipping', 'Returns'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-all"
                    >
                      {item[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CELLAZIA. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Designed with elegance for the discerning</p>
          </div>
        </div>
      </footer>
    )
}
  