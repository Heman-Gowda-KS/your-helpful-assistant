import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section
      className="bg-brand-dark text-white py-24 rounded-t-[4rem] relative z-10 overflow-hidden"
      id="academy"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef}>
            <div className="inline-block px-4 py-1 border border-brand-green/30 rounded-full text-brand-green text-xs font-bold uppercase tracking-widest mb-6">
              Join the Legacy
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              300+ Students <br /> and Counting.
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              We provide the mentorship, equipment, and match exposure needed to
              reach the top level of cricket.
            </p>

            <div className="max-w-xs">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="text-4xl font-black text-brand-accent mb-2">
                  95%
                </div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                  Skill Growth
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/185364/pexels-photo-185364.jpeg?w=600&fit=crop"
                className="rounded-3xl shadow-glow"
                alt="Student Practice"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/264337/pexels-photo-264337.jpeg?w=600&fit=crop"
                className="rounded-3xl mt-12"
                alt="Coaching Session"
                loading="lazy"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-black p-8 rounded-3xl shadow-2xl rotate-3">
              <div className="text-xl font-bold italic mb-1">
                "Next Gen Champions"
              </div>
              <div className="text-sm font-medium opacity-80">
                - Season 2025 Enrollment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
