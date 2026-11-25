import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { PrintCv } from "@/components/print-cv";
import { ProofStrip } from "@/components/proof-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { SpeakingSection } from "@/components/speaking-section";
import { WorkSection } from "@/components/work-section";
import { cv, site } from "@/content/cv";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cv.name,
  jobTitle: cv.headline,
  description: site.description,
  email: `mailto:${cv.email}`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  sameAs: [cv.links[0].url],
  knowsLanguage: ["Spanish", "English"],
  alumniOf: cv.education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.school,
  })),
  knowsAbout: [
    "Technical support",
    "Developer education",
    "Technical writing",
    "Developer advocacy",
    "Web3",
    "Ethereum",
    "Polkadot",
    "The Graph",
    "GraphQL",
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="print:hidden">
          <Hero />
          <ProofStrip />
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <SpeakingSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>
        <PrintCv />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
