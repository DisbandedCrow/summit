import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { Challenges } from "../components/Challenges";
import { HowItWorks } from "../components/HowItWorks";
import { UseCases } from "../components/UseCases";
import { ProductSuite } from "../components/ProductSuite";
import { Industries } from "../components/Industries";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Story } from "../components/Story";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Clients />
      <Challenges />
      <HowItWorks />
      <UseCases />
      <ProductSuite />
      <Industries />
      <Team />
      <Testimonials />
      <Story />
      <CTA />
    </main>
  );
}