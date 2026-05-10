import CourseCard from "./course-card";

import { courses } from "@/src/data/courses";

export default function FeaturedCourses() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Featured Courses</h2>

          <p className="mt-4 text-muted-foreground">
            Practical and accessible academic learning programs.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              level={course.level}
              instructor={course.instructor}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}