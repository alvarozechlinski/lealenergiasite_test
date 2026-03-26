import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarField from "@/assets/solar-field.jpg";
import solarIndustrial from "@/assets/solar-industrial.jpg";
import solarCloseup from "@/assets/solar-closeup.jpg";

const articles = [
  {
    title: "Como a energia solar pode reduzir sua conta de luz em até 95%",
    excerpt: "Descubra como sistemas fotovoltaicos estão revolucionando a forma como brasileiros consomem energia e economizam.",
    date: "15 Mar 2024",
    image: solarField,
  },
  {
    title: "Novas regulamentações de energia solar no Brasil em 2024",
    excerpt: "Entenda as mudanças na legislação e como elas impactam quem já tem ou deseja instalar painéis solares.",
    date: "28 Fev 2024",
    image: solarIndustrial,
  },
  {
    title: "Energia solar para empresas: retorno sobre o investimento",
    excerpt: "Veja como empresas de diferentes portes estão obtendo retorno financeiro com a instalação de sistemas solares.",
    date: "10 Jan 2024",
    image: solarCloseup,
  },
];

const NoticiasPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Notícias</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Fique por dentro das novidades sobre energia solar e sustentabilidade.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.title} className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-lg transition-shadow">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold">{article.date}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <Footer />
  </div>
);

export default NoticiasPage;
