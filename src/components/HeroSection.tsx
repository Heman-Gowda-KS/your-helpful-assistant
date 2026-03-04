import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/29463844/pexels-photo-29463844.jpeg?w=1920&h=1080&fit=crop"
          alt="Kreesha Cricket Academy Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div ref={ref} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-1.5 mb-6 shadow-lg">
            <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] font-bold text-brand-dark">
              TOP
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-wide">
              Premier Cricket Training 2025
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 drop-shadow-xl">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">
              INNER CHAMPION.
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed drop-shadow-md font-medium">
            Train at Kreesha Cricket Academy with state-of-the-art bowling
            machines, elite net practice, and competitive Sunday club matches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-green hover:text-white transition shadow-[0_4px_20px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2 group"
            >
              Book Net Session{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
            </a>
            <a
              href="#academy"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-circle-play text-brand-accent text-lg"></i>{" "}
              Academy Tour
            </a>
          </div>

          <div className="inline-flex flex-wrap items-center gap-8 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-black font-mono text-white">300+</p>
              <p className="text-xs text-brand-accent uppercase font-bold tracking-wider">
                Students
              </p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <p className="text-3xl font-black font-mono text-white">8</p>
              <p className="text-xs text-brand-accent uppercase font-bold tracking-wider">
                Practice Nets
              </p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <div className="flex -space-x-2 mb-1">
                <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-6 h-6 rounded-full border border-white/50" />
                <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-6 h-6 rounded-full border border-white/50" />
                <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-6 h-6 rounded-full border border-white/50" />
              </div>
              <p className="text-xs text-brand-accent uppercase font-bold tracking-wider">
                Elite Coaching
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
