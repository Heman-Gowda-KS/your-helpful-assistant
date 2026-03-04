const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 rounded-t-[3rem] overflow-hidden mt-0 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-sm">
          <div>
            <h4 className="font-bold text-gray-500 mb-4 uppercase">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/kreeshasports?igsh=MXMyMnEwNjA1N2JrNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent flex justify-between items-center border-b border-gray-800 pb-2 transition-colors"
                >
                  Instagram <i className="fa-solid fa-arrow-up rotate-45 text-[10px]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/tegSVaGASN48YUH59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent flex justify-between items-center border-b border-gray-800 pb-2 transition-colors"
                >
                  Location <i className="fa-solid fa-location-dot text-[10px]"></i>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-500 mb-4 uppercase">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Net Practice</li>
              <li>Bowling Machines</li>
              <li>Sunday League</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-500 mb-4 uppercase">Direct Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-user text-brand-green"></i> Avinash Gowda A C
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-brand-green"></i> 9113022282
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-brand-green"></i> kreeshasportshub03@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Massive Text */}
        <div className="relative w-full overflow-hidden flex justify-center items-center h-[20vw] md:h-[25vw] bg-brand-green rounded-3xl mb-8">
          <span className="huge-text font-black text-black tracking-tighter absolute">
            KREESHA
          </span>
          <div
            className="absolute inset-0 w-full h-full opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-8">
          <p>© 2025 Kreesha Cricket Academy. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
