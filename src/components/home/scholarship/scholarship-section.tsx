import { Button } from "@/src/components/ui/button";

export default function ScholarshipSection() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl font-bold">
          Sponsor a Student’s Education
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Help provide digital learning opportunities for students from
          economically weaker communities.
        </p>

        <Button
          variant="secondary"
          className="mt-10"
        >
          Become a Sponsor
        </Button>
      </div>
    </section>
  );
}