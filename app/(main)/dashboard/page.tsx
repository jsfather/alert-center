import DashboardCard from "@/app/components/layout/dashboard/DashboardCard";
import CreateDashboardCard from "@/app/components/layout/dashboard/CreateDashboardCard";

export default function Page(){
    return <div className="text-red-50">
        <div className="flex flex-row gap-8">
            <CreateDashboardCard  />
            <DashboardCard />
        </div>

    </div>;
}