import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarRooftop from "@/assets/solar-rooftop.jpg";
import solarResidential from "@/assets/solar-residential.jpg";
import solarField from "@/assets/solar-field.jpg";
import { Users, Award, Lightbulb, Target } from "lucide-react";

const values = [
  { icon: Users, title: "Pessoas em primeiro lugar", text: "Valorizamos cada cliente e cada colaborador, construindo relações de confiança e transparência." },
  { icon: Award, title: "Excelência", text: "Buscamos a mais alta qualidade em cada projeto, desde o planejamento até a entrega final." },
  { icon: Lightbulb, title: "Inovação", text: "Acompanhamos as últimas tecnologias do setor para oferecer as melhores soluções em energia solar." },
  { icon: Target, title: "Compromisso", text: "Assumimos o compromisso com a sustentabilidade e com o futuro energético do Brasil." },
];

const SobrePage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Sobre Nós</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Conheça a Leal Energia e nossa missão de transformar a relação das pessoas com a energia.
        </p>
      </div>
    </section>

    {/* História */}
    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                A Leal Energia nasceu com a missão de democratizar o acesso à energia solar no Brasil. Com anos de experiência no mercado, já ajudamos centenas de empresas e residências a reduzir seus custos com energia e a contribuir para um futuro mais sustentável.
              </p>
              <p className="text-muted-foreground text-lg">
                Atuamos em todo o Vale do Paraíba e região, oferecendo soluções completas em energia solar fotovoltaica, desde o projeto até a instalação e manutenção.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={solarRooftop} alt="Equipe Leal Energia" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Missão / Visão */}
    <ScrollReveal>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Missão</h3>
              <p className="text-muted-foreground text-lg">
                Entregar soluções de energia solar de alta qualidade, transformando a forma como empresas e pessoas geram e consomem energia, contribuindo para um futuro mais sustentável.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Visão</h3>
              <p className="text-muted-foreground text-lg">
                Ser referência no mercado de energia solar, reconhecida pela excelência, inovação e compromisso com a sustentabilidade energética no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Valores */}
    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos <span className="text-gradient">Valores</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl bg-muted/30 border border-border">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* CTA */}
    <ScrollReveal>
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Pronto para economizar com energia solar?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato conosco e solicite um orçamento sem compromisso.
          </p>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            Fale conosco
          </a>
        </div>
      </section>
    </ScrollReveal>

    <Footer />
  </div>
);

export default SobrePage;
