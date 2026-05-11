import DashboardSidebar from "@/src/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}