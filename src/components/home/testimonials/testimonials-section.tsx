const testimonials = [
  {
    name: "Fatima",
    message:
      "Smart Scholars Hub helped me improve my confidence in mathematics.",
  },
  {
    name: "Imran",
    message:
      "The teachers explain concepts in a very easy and supportive way.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Student Testimonials</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-sm border"
            >
              <p className="text-lg leading-relaxed">
                “{testimonial.message}”
              </p>

              <h4 className="mt-6 font-semibold">
                — {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}