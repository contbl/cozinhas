import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { QuemSomos } from "@/components/site/quem-somos";
import { Projetos } from "@/components/site/projetos";
import { ComoTrabalhamos } from "@/components/site/como-trabalhamos";
import { CtaOrcamento } from "@/components/site/cta-orcamento";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuemSomos />
        <Projetos />
        <ComoTrabalhamos />
        <CtaOrcamento />
      </main>
      <Footer />
    </>
  );
}
