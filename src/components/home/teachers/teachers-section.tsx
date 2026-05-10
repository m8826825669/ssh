import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";

const teachers = [
  {
    name: "Aisha Khan",
    subject: "Mathematics",
  },
  {
    name: "Rahul Sharma",
    subject: "Science",
  },
  {
    name: "Sara Ahmed",
    subject: "English",
  },
];

export default function TeachersSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Meet Our Teachers</h2>

          <p className="mt-4 text-muted-foreground">
            Passionate educators and mentors supporting student growth.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="rounded-2xl border bg-white p-8 text-center shadow-sm"
            >
              <Avatar className="mx-auto h-20 w-20">
                <AvatarFallback>
                  {teacher.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <h3 className="mt-6 text-xl font-semibold">
                {teacher.name}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {teacher.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}