import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <ProjectsPreview />
      <ValuesSection />
      <PortfolioPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
