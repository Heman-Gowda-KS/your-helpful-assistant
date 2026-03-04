import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SundayBanner = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-gray-100 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="bg-brand-green rounded-[3rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="relative z-10 max-w-xl">
            <h3 className="text-4xl font-black text-black mb-6 uppercase leading-tight">
              Sunday Club Match Series
            </h3>
            <p className="text-brand-dark-green font-medium mb-8">
              Competitive matches every Sunday starting 07:00 AM. Open
              exclusively for Kreesha Academy students.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition"
            >
              Register Now
            </a>
          </div>

          <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-black">
              <div className="text-xs font-bold uppercase tracking-tighter mb-1">
                Upcoming Fixture
              </div>
              <div className="text-xl font-bold">VS Warriors SC</div>
              <div className="text-sm font-medium">Stadium Pitch 1</div>
            </div>
          </div>

          <i className="fa-solid fa-trophy absolute -right-10 -bottom-10 text-[20rem] text-black/5 rotate-12"></i>
        </div>
      </div>
    </section>
  );
};

export default SundayBanner;
