import DashboardCard from '@/app/components/ui/panel/dashboard/DashboardCard';
import CreateDashboardCard from '@/app/components/ui/panel/dashboard/CreateDashboardCard';

export default function Page() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-4 gap-8 text-white">
        <CreateDashboardCard />
        {Array.from({ length: 11 }, (_, i) => (
          <DashboardCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
