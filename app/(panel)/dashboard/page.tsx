import DashboardCard from '@/app/components/ui/panel/dashboard/DashboardCard';
import CreateDashboardCard from '@/app/components/ui/panel/dashboard/CreateDashboardCard';

export default function Page() {
  return (
    <div className="text-red-50">
      <div className="grid grid-cols-4 gap-8">
        <CreateDashboardCard />
        {Array.from({ length: 11 }, (_, i) => (
          <DashboardCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
