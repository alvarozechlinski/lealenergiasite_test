import solarRooftop from "@/assets/solar-rooftop.jpg";
import solarResidential from "@/assets/solar-residential.jpg";
import solarCloseup from "@/assets/solar-closeup.jpg";
import solarIndustrial from "@/assets/solar-industrial.jpg";
import solarField from "@/assets/solar-field.jpg";
import heroSolar from "@/assets/hero-solar.jpg";

const images = [
  { src: heroSolar, alt: "Usina solar aérea" },
  { src: solarCloseup, alt: "Painéis solares close-up" },
  { src: solarResidential, alt: "Instalação residencial" },
  { src: solarIndustrial, alt: "Usina industrial" },
  { src: solarField, alt: "Campo solar" },
  { src: solarRooftop, alt: "Telhado comercial" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Nossos Projetos
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
