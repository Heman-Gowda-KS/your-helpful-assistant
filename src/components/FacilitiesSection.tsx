import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facilities = [
  {
    title: "NET PRACTICE",
    desc: "Daily sessions on both turf and cement wickets under expert eyes.",
    img: "https://images.pexels.com/photos/19714741/pexels-photo-19714741.jpeg?w=800&h=1200&fit=crop",
    icon: "fa-solid fa-tower-broadcast",
    align: "left" as const,
  },
  {
    title: "Bowling Machines",
    desc: "Master pace and spin with our 90mph+ precision bowling machines.",
    img: "https://images.pexels.com/photos/19714741/pexels-photo-19714741.jpeg?w=800&h=1200&fit=crop",
    icon: null,
    badge: "HI-TECH",
    align: "center" as const,
  },
  {
    title: "SUNDAY MATCHES",
    desc: "Test your skills in real-game scenarios every weekend against premier local clubs.",
    img: "https://images.pexels.com/photos/31131695/pexels-photo-31131695.jpeg?w=800&h=1200&fit=crop",
    icon: null,
    align: "left" as const,
    hasButton: true,
  },
];

const FacilitiesSection = () => {
  const headerRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div ref={headerRef}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-green rounded-full"></span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Our Facilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Pro-Level <br /> Training Grounds.
          </h2>
        </div>
        <div ref={descRef} className="hidden md:block max-w-xs text-right">
          <p className="text-gray-500 text-sm font-medium">
            Elite infrastructure designed to take your batting, bowling, and
            fielding skills to the international standard.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facilities.map((f) => (
          <FacilityCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

const FacilityCard = ({
  title,
  desc,
  img,
  icon,
  badge,
  align,
  hasButton,
}: {
  title: string;
  desc: string;
  img: string;
  icon?: string | null;
  badge?: string;
  align: "left" | "center";
  hasButton?: boolean;
}) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="relative group overflow-hidden rounded-[2.5rem] bg-white shadow-xl h-[500px]"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div
        className={`absolute bottom-8 left-8 right-8 text-white ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {icon && <i className={`${icon} text-brand-accent text-3xl mb-4`}></i>}
        {badge && (
          <div className="bg-brand-accent text-black px-4 py-1 rounded-full text-[10px] font-bold inline-block mb-4">
            {badge}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2 uppercase">{title}</h3>
        <p
          className={`text-sm text-gray-300 ${
            !badge && !hasButton
              ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              : ""
          } ${hasButton ? "mb-6" : ""}`}
        >
          {desc}
        </p>
        {hasButton && (
          <a
            href="#contact"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-brand-accent transition"
          >
            <i className="fa-solid fa-plus"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default FacilitiesSection;
