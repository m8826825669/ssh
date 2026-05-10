import Link from "next/link";

import { Button } from "@/src/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Smart Scholars Hub
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Button>Apply Now</Button>
      </div>
    </nav>
  );
}