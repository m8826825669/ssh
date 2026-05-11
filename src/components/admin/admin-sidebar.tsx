import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="hidden md:flex w-72 border-r bg-white flex-col p-6">
      <h2 className="text-2xl font-bold text-emerald-600">
        Admin Panel
      </h2>

      <nav className="mt-10 space-y-4">
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/students">Students</Link>
        <Link href="/admin/teachers">Teachers</Link>
        <Link href="/admin/courses">Courses</Link>
      </nav>
    </aside>
  );
}