import DashboardCard from '@/app/components/ui/panel/dashboard/DashboardCard';
import CreateDashboardCard from '@/app/components/ui/panel/dashboard/CreateDashboardCard';

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-8 grid grid-cols-1 place-items-center gap-4 text-white sm:grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-8">
        <CreateDashboardCard />
        {Array.from({ length: 11 }, (_, i) => (
          <DashboardCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
