import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/greptun-logo.png.asset.json";
import lisaArt from "@/assets/lisa-artwork.png.asset.json";
import lisaLogo from "@/assets/lisa-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greptun — Engineering & Science Consulting" },
      { name: "description", content: "Greptun is a consulting firm bringing space-grade engineering rigor and scientific thinking to complex problems." },
      { property: "og:title", content: "Greptun — Engineering & Science Consulting" },
      { property: "og:description", content: "Space-grade engineering rigor and scientific thinking for complex problems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Product Assurance Management", d: "We provide comprehensive Product Assurance Management and documentation tailored to the specific needs of each project and product. Our services cover the preparation and maintenance of PA documentation, tailoring of applicable ECSS standards, verification of compliance with customer requirements, and coordination of PA activities across the project and its suppliers." },
  { n: "02", t: "Quality Assurance", d: "We provide Quality Assurance services in accordance with ECSS-Q-ST-20C and ISO 9001, ensuring that quality requirements are properly implemented throughout the project lifecycle. Our activities include quality planning, process monitoring, audits, non-conformity management and continuous improvement, helping ensure compliance with customer requirements and applicable standards." },
  { n: "03", t: "Materials & Processes", d: "We manage the Materials and Processes programme in accordance with ECSS-Q-ST-70C, supporting design engineers in selecting space-proven materials and processes and assessing their qualification status. Our services include coordinating ESA approval for new qualifications, identifying technical risks and cost drivers, maintaining Declared Materials, Mechanical Parts and Processes lists, and representing the client at customer reviews." },
  { n: "04", t: "Documentation Management", d: "We support technical documentation and configuration management to ensure that product information, project records and configuration changes remain accurate, traceable and controlled throughout the project lifecycle, in accordance with applicable project and ECSS requirements." },
];

const steps = ["Define", "Model", "Validate", "Deliver"];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground p-1">
              <img src={logo.url} alt="Greptun logo" className="h-full w-full object-contain" />
            </span>
            Greptun
          </a>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#approach" className="hover:text-foreground">Approach</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={hero} alt="Orbital trajectories around a planet" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// CONSULTING FOR YOUR SPACE MISSION</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            When the details <span className="text-primary">matter</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We bring space-grade engineering rigor and the scientific method to your hardest problems.
          </p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
            Start a conversation →
          </a>
        </div>
      </section>

      <section id="services" className="grid-bg border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Services</p>
          <h2 className="mt-4 text-4xl font-light tracking-tight">What we do</h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="group bg-background p-10 transition hover:bg-card">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="mt-6 text-2xl font-medium">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">References</p>
          <h2 className="mt-4 text-4xl font-light tracking-tight">Current projects</h2>
          <article className="mt-14 overflow-hidden border border-border bg-card">
            <div className="relative">
              <img src={lisaArt.url} alt="Artistic visualisation of the LISA mission detecting gravitational waves" className="aspect-[16/7] w-full object-cover" loading="lazy" />
              <img src={lisaLogo.url} alt="ESA LISA mission logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain md:h-28 md:w-28" loading="lazy" />
            </div>
            <div className="grid gap-10 p-10 md:grid-cols-[1fr_2fr]">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">HPS Romania · ESA / OHB</span>
                <h3 className="mt-3 text-2xl font-medium">LISA Spacecraft – Radiator Panels</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We provide Product Assurance and engineering support to HPS Romania, an ESA/OHB supplier, for the LISA spacecraft radiator panels. Our involvement began in the initial project phases and currently focuses on material and process qualification, technical documentation, and consultancy on manufacturing and testing approaches. We will continue supporting the project through to final hardware delivery.</p>
                <p>ESA’s Laser Interferometer Space Antenna (LISA) will be the first space-based observatory dedicated to detecting gravitational waves — ripples in spacetime produced by some of the most powerful events in the Universe, including merging black holes.</p>
              </div>
            </div>
          </article>
        </div>
      </section>



      <section id="approach" className="border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Approach</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight">From first principles to flight-ready results.</h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="border-t border-primary pt-6">
                <span className="font-mono text-xs text-muted-foreground">T+{String(i).padStart(2, "0")}</span>
                <p className="mt-2 text-xl">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="grid-bg border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-light tracking-tight md:text-5xl">Have a problem worth solving?</h2>
          <a href="mailto:hello@greptun.com" className="mt-10 inline-block font-mono text-xl text-primary underline-offset-8 hover:underline">
            hello@greptun.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl justify-between px-6 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Greptun</span>
          <span>Engineered with precision</span>
        </div>
      </footer>
    </div>
  );
}
