const stats = [
  {
    title: "500+",
    subtitle: "Students Reached",
  },
  {
    title: "25",
    subtitle: "Volunteer Teachers",
  },
  {
    title: "12",
    subtitle: "Academic Courses",
  },
  {
    title: "8",
    subtitle: "Communities Served",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.title}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}