import solarCloseup from "@/assets/solar-closeup.jpg";

const MercadoLivreSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={solarCloseup}
            alt="Painéis solares close-up"
            className="w-full h-96 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Mercado Livre de Energia</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Mude do mercado tradicional e escolha o seu fornecedor de energia!
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Reduza o seu custo, com{" "}
            <span className="text-gradient font-semibold">baixo investimento</span> e consuma energia de fontes renováveis!
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            *Para unidades em alta tensão!
          </p>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Receba uma consultoria Gratuita
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MercadoLivreSection;
