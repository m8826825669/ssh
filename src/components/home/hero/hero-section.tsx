import { Button } from "@/src/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Empowering Every Child Through Digital Education
        </h1>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Smart Scholars Hub provides accessible online education opportunities
          for students from underserved communities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Apply for Admission</Button>
          <Button size="lg" variant="outline">
            Become a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}