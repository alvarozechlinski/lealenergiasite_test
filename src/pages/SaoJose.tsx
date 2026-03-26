import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarField from "@/assets/solar-field.jpg";
import solarResidential from "@/assets/solar-residential.jpg";
import { Sun, Building2, Leaf, MapPin } from "lucide-react";

const features = [
  { icon: Sun, title: "Alta Irradiação Solar", text: "São José dos Campos possui excelente incidência solar durante todo o ano, ideal para geração fotovoltaica." },
  { icon: Building2, title: "Polo Tecnológico", text: "A cidade é um centro de inovação e tecnologia, com empresas que buscam soluções sustentáveis de energia." },
  { icon: Leaf, title: "Sustentabilidade", text: "Contribua para uma cidade mais verde e sustentável, reduzindo a pegada de carbono do Vale do Paraíba." },
  { icon: MapPin, title: "Atendimento Local", text: "Estamos presentes em São José dos Campos com equipe técnica especializada para atender você." },
];

const SaoJosePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">São José dos Campos</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Energia solar para a capital do Vale do Paraíba.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Energia Solar em <span className="text-gradient">São José dos Campos</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                São José dos Campos é uma das cidades com maior potencial para energia solar no estado de São Paulo. Com alta incidência solar e um mercado empresarial em constante crescimento, a cidade é o cenário perfeito para investir em energia fotovoltaica.
              </p>
              <p className="text-muted-foreground text-lg">
                A Leal Energia oferece soluções completas para residências, comércios e indústrias da região, com projetos personalizados e atendimento técnico especializado.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={solarResidential} alt="Energia solar em São José dos Campos" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que investir em energia solar em <span className="text-gradient">SJC</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl bg-background border border-border shadow-sm">
                <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Solicite seu orçamento em SJC</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Nossa equipe técnica está pronta para atender você em São José dos Campos e região.
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

export default SaoJosePage;
