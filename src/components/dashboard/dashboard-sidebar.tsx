import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex w-72 border-r bg-white flex-col p-6">
      <h2 className="text-2xl font-bold text-blue-600">
        Student Panel
      </h2>

      <nav className="mt-10 space-y-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/courses">My Courses</Link>
        <Link href="/dashboard/assignments">Assignments</Link>
        <Link href="/dashboard/attendance">Attendance</Link>
        <Link href="/dashboard/certificates">Certificates</Link>
      </nav>
    </aside>
  );
}