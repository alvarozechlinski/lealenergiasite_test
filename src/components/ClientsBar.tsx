import logoLocaliza from "@/assets/logo-localiza.svg";
import logoDelta from "@/assets/logo-delta.png";
import logoCG from "@/assets/logo-cgofficemall.webp";
import logo3Corp from "@/assets/logo-3corp.png";
import logoAchiropita from "@/assets/logo-achiropita.webp";
import logoPackwind from "@/assets/logo-packwind.webp";

const clients = [
  { name: "Localiza Seminovos", url: "https://seminovos.localiza.com/", logo: logoLocaliza },
  { name: "Delta Electronics", url: "#", logo: logoDelta },
  { name: "CG Office Mall", url: "https://cgofficemall.com.br/", logo: logoCG },
  { name: "3Corp", url: "https://www.3corp.com.br/en/", logo: logo3Corp },
  { name: "Achiropita", url: "https://achiropita.org.br/", logo: logoAchiropita },
  { name: "Packwind", url: "https://packwind.com.br/", logo: logoPackwind },
];

const ClientsBar = () => (
  <section className="py-10 bg-background border-b border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {clients.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity"
          >
            <img src={c.logo} alt={c.name} className="max-h-12 max-w-full object-contain" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsBar;
