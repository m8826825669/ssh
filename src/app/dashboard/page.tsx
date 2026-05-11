import StatsCard from "@/src/components/dashboard/stats-card";

export default function DashboardPage() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Continue your learning journey.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Courses Enrolled"
          value="6"
        />

        <StatsCard
          title="Assignments Completed"
          value="18"
        />

        <StatsCard
          title="Attendance"
          value="92%"
        />
      </div>
    </div>
  );
}