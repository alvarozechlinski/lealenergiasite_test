import consultingImg from "@/assets/consulting.jpg";

const ConsultingSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Consultoria energética</h2>

          <h3 className="text-xl font-bold mb-3">Desenvolvimento de Projetos</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Contamos com experiências sólidas na implementação de projetos de micro e mini geração; ZeroGrid; Carregadores elétricos e aquecimento de água!
          </p>

          <h3 className="text-xl font-bold mb-3">Segurança e eficiência</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Elaboramos cada projeto com um olhar específico! Oferecendo soluções complementares e adequadas a cada cliente!
          </p>

          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Quero uma consultoria!
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={consultingImg}
            alt="Consultoria energética"
            className="w-full h-[500px] object-cover"
            loading="lazy"
            width={800}
            height={900}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ConsultingSection;
