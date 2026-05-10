import { Button } from "@/src/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 text-white p-14 text-center">
          <h2 className="text-4xl font-bold">
            Join Our Learning Community
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Empowering students with accessible education and mentorship.
          </p>

          <Button className="mt-10">
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
}