import StatsCard from "@/src/components/dashboard/stats-card";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-10 grid md:grid-cols-4 gap-6">
        <StatsCard
          title="Students"
          value="520"
        />

        <StatsCard
          title="Teachers"
          value="25"
        />

        <StatsCard
          title="Courses"
          value="12"
        />

        <StatsCard
          title="Scholarships"
          value="85"
        />
      </div>
    </div>
  );
}