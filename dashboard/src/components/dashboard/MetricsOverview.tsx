
import { Users, BookOpen, Activity, AlertTriangle } from "lucide-react";
import StatsCard from "../../components/ui/StatsCard";
import { overviewMetrics } from "../../mock/dashboardData";

interface MetricsOverviewProps {
  dateRange: { from: Date; to: Date };
}

const MetricsOverview = ({ dateRange }: MetricsOverviewProps) => {
  // In a real app, we would filter metrics based on date range
  // For this demo, we'll just use the static data
  
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard 
        title="Total Users" 
        value={overviewMetrics.totalUsers.toLocaleString()} 
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 5.2, isPositive: true }}
      />
      <StatsCard 
        title="New Sign-ups" 
        value={overviewMetrics.newSignups.toLocaleString()}
        icon={<Activity className="h-4 w-4" />}
        trend={{ value: 12.7, isPositive: true }}
      />
      <StatsCard 
        title="Total Classes" 
        value={overviewMetrics.totalClasses.toLocaleString()}
        icon={<BookOpen className="h-4 w-4" />}
        trend={{ value: 3.1, isPositive: true }}
      />
      <StatsCard 
        title="Active Incidents" 
        value={overviewMetrics.totalIncidents.toLocaleString()}
        icon={<AlertTriangle className="h-4 w-4" />}
        trend={{ value: 2.5, isPositive: false }}
        valueClassName={overviewMetrics.totalIncidents > 0 ? "text-red-500" : "text-white"}
      />
    </div>
  );
};

export default MetricsOverview;
