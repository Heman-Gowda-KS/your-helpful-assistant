import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactCards = [
  {
    icon: "fa-solid fa-user",
    title: "Director",
    detail: "Avinash Gowda A C",
    sub: "Head of Academy",
    href: undefined,
  },
  {
    icon: "fa-solid fa-phone",
    title: "Call Us",
    detail: "9113022282",
    sub: "Available 9AM - 8PM",
    href: "tel:9113022282",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    detail: "kreeshasportshub03@gmail.com",
    sub: "Inquiries & Support",
    href: "mailto:kreeshasportshub03@gmail.com",
  },
];

const ContactSection = () => {
  const headerRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest">
            Connect With Us
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-4 tracking-tighter">
            READY TO PLAY?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit us at the ground or book your trial session today. Join 300+
            students on their journey to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactCards.map((c) => (
            <ContactCard key={c.title} {...c} />
          ))}
        </div>

        <div ref={mapRef} className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/S5hgudtQzd8towUM7?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full font-bold hover:bg-brand-dark-green transition shadow-xl"
          >
            <i className="fa-solid fa-location-dot text-brand-accent"></i> Find
            Us on Google Maps
          </a>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  detail,
  sub,
  href,
}: {
  icon: string;
  title: string;
  detail: string;
  sub: string;
  href?: string;
}) => {
  const ref = useScrollAnimation();
  const Tag = href ? "a" : "div";

  return (
    <Tag
      ref={ref as any}
      {...(href ? { href } : {})}
      className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition group block"
    >
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-green text-2xl shadow-sm mb-8 group-hover:bg-brand-green group-hover:text-white transition">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 font-medium break-all">{detail}</p>
      <p className="text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">
        {sub}
      </p>
    </Tag>
  );
};

export default ContactSection;
