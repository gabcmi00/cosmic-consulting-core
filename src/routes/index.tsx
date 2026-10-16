import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greptun — Product Assurance for Space Missions" },
      { name: "description", content: "We provide Product Assurance and engineering support for the space industry, from concept to delivery." },
      { property: "og:title", content: "Greptun — Product Assurance for Space Missions" },
      { property: "og:description", content: "We provide Product Assurance and engineering support for the space industry, from concept to delivery." },
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

const steps = [
  { title: "Understand", description: "Understand project objectives, applicable requirements, customer expectations, and scope." },
  { title: "Plan", description: "Define activities, responsibilities, documentation, qualification needs, and compliance evidence." },
  { title: "Verify", description: "Monitor implementation, assess compliance, address technical risks, and coordinate verification activities." },
  { title: "Deliver", description: "Maintain traceable records, resolve outstanding issues, and support the required project reviews and handover." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className={`fixed inset-x-0 top-0 z-20 border-b border-border bg-background/70 backdrop-blur transition-all duration-300 ${scrolled ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground p-1">
              <img src="/greptun-logo.png" alt="Greptun logo" className="h-full w-full object-contain" />
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
        <span aria-hidden="true" className="pointer-events-none absolute left-6 top-24 select-none whitespace-nowrap font-[Manrope] text-[12vw] font-extrabold leading-none tracking-tight text-foreground/[0.15]">
          GREPTUN
        </span>
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="whitespace-nowrap font-mono text-[clamp(8px,2.7vw,12px)] uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.3em]">// CONSULTING FOR YOUR SPACE MISSION</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            When the details <span className="text-primary">matter</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We provide Product Assurance and engineering support for the space industry - from concept to delivery.
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
              <img src="/lisa-artwork.png" alt="Artistic visualisation of the LISA mission detecting gravitational waves" className="aspect-[16/7] w-full object-cover" loading="lazy" />
              <img src="/lisa-logo.png" alt="ESA LISA mission logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain md:h-28 md:w-28" loading="lazy" />
              <span className="absolute bottom-3 left-4 rounded-sm bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground">Source: European Space Agency (ESA)</span>
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
          <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight">From project requirements to controlled delivery.</h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-primary pt-6">
                <p className="text-xl">{i + 1}. {s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="grid-bg border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-light tracking-tight md:text-5xl">Have a problem worth solving?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Don't hesitate to contact us!</p>
          <a href="mailto:greptun@greptun.com" className="mt-10 inline-block font-mono text-xl text-primary underline-offset-8 hover:underline">
            greptun@greptun.com
          </a>
          <address className="mx-auto mt-16 max-w-2xl space-y-1 border-t border-border pt-10 font-mono text-xs not-italic leading-relaxed text-muted-foreground">
            <p className="text-sm text-foreground">Greptun s.r.o.</p>
            <p>Vápenická ulica 736/20, 971 01 Prievidza</p>
            <p>IČO 57829390 · DIČ 2123204105</p>
            <p>IČ DPH SK2123204105, according §7a of Act No. 222/2004 Coll. on Value Added Tax</p>
            <p>Registered in Commercial Register of the District Court of Trenčín, Section: Sro, Entry No. 58715/R</p>
          </address>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl justify-between gap-4 px-6 font-mono text-[clamp(8px,2.6vw,12px)] text-muted-foreground sm:text-xs">
          <span className="whitespace-nowrap">© {new Date().getFullYear()} Greptun s.r.o.</span>
          <span className="whitespace-nowrap">Engineered with precision</span>
        </div>
      </footer>
    </div>
  );
}
