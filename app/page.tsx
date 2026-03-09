import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Next.js 15 Mastery"
          topic="Mastering React Server Components and advanced Next.js 15 architectural patterns."
          subject="Technology"
          duration={45}
          color="#e0f2fe"
        />
        <CompanionCard
          id="2"
          name="UI/UX Design Systems"
          topic="Building comprehensive design systems and applying modern UI/UX principles for web apps."
          subject="Design"
          duration={90}
          color="#dcfce7"
        />
        <CompanionCard
          id="3"
          name="Node.js Scalability"
          topic="Building scalable backend architectures and high-performance microservices with Node.js."
          subject="Engineering"
          duration={120}
          color="#fef3c7"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
