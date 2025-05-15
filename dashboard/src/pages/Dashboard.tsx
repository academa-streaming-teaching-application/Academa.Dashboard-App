
import { useState } from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MetricsOverview from "../components/dashboard/MetricsOverview";
import UsageChart from "../components/dashboard/UsageChart";
import ClassRankings from "../components/dashboard/ClassRankings";
import TeacherRankings from "../components/dashboard/TeacherRankings";
import UserDemographics from "../components/dashboard/UserDemographics";
import IncidentTracker from "../components/dashboard/IncidentTracker";
import DateRangePicker from "../components/dashboard/DateRangePicker";

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() });
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1F2C]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold text-white mb-3 sm:mb-0">Platform Metrics Dashboard</h1>
              <DateRangePicker value={dateRange} onChange={setDateRange} />
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <MetricsOverview dateRange={dateRange} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <UsageChart dateRange={dateRange} />
                <UserDemographics />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ClassRankings dateRange={dateRange} />
                <TeacherRankings dateRange={dateRange} />
              </div>
              
              <IncidentTracker dateRange={dateRange} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
