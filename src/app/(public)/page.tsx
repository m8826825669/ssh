import Navbar from "@/src/components/shared/navbar/Navbar";
import Footer from "@/src/components/shared/footer/Footer";

import HeroSection from "@/src/components/home/hero/hero-section";
import StatsSection from "@/src/components/home/stats/stats-section";
import FeaturedCourses from "@/src/components/home/featured-courses/featured-courses";
import TeachersSection from "@/src/components/home/teachers/teachers-section";
import ScholarshipSection from "@/src/components/home/scholarship/scholarship-section";
import TestimonialsSection from "@/src/components/home/testimonials/testimonials-section";
import CTASection from "@/src/components/home/cta/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedCourses />
        <TeachersSection />
        <ScholarshipSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}