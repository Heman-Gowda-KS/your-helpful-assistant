import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Academy", href: "#academy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4">
      <div
        className={`bg-white/90 backdrop-blur-md rounded-full shadow-lg max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-baseball-bat-ball text-brand-green text-xl md:text-2xl"></i>
          <span className="font-bold text-lg md:text-xl tracking-tighter text-foreground">
            KREESHA CRICKET
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-brand-green transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            Join Academy
          </a>
        </div>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 z-40 animate-fade-in-up md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-600 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <hr className="border-gray-100" />
          <a
            href="#contact"
            className="bg-brand-dark text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Join Academy
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
