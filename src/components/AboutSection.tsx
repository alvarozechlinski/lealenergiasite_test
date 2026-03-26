import solarRooftop from "@/assets/solar-rooftop.jpg";
import solarResidential from "@/assets/solar-residential.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        O que podemos fazer por{" "}
        <span className="text-gradient border-b-2 border-primary pb-1">você</span> ?
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Energia limpa e renovável</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            Entregamos soluções de energia, transformando a forma como empresas e pessoas geram e consomem energia!
          </p>
          <p className="text-lg text-muted-foreground">
            Nosso objetivo é simples: ajudar você a reduzir custos, aumentar a sustentabilidade e construir um futuro mais verde.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={solarRooftop}
            alt="Painéis solares em telhado comercial"
            className="w-full h-80 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={solarResidential}
            alt="Instalação de painéis solares residencial"
            className="w-full h-80 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-lg text-muted-foreground">
            Projetamos e implementamos sistemas solares personalizados, otimizando o desempenho energético e garantindo economia, automação, segurança e longevidade para o seu negócio!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
