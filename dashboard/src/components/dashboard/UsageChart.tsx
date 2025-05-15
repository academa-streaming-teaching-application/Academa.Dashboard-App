
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { userActivity, filterByDateRange } from "../../mock/dashboardData";

interface UsageChartProps {
  dateRange: { from: Date; to: Date };
}

const UsageChart = ({ dateRange }: UsageChartProps) => {
  const [metric, setMetric] = useState<'activeUsers' | 'classViews' | 'watchTime'>('activeUsers');
  const filteredData = filterByDateRange(userActivity, dateRange);
  
  // Format data for chart (simplify dates for display)
  const chartData = filteredData.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));
  
  const metrics = [
    { id: 'activeUsers', name: 'Active Users', color: '#8B5CF6' },
    { id: 'classViews', name: 'Class Views', color: '#0EA5E9' },
    { id: 'watchTime', name: 'Watch Time (hrs)', color: '#10B981' },
  ];
  
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold text-white">Platform Usage Over Time</CardTitle>
        <div className="flex space-x-2">
          {metrics.map((m) => (
            <button
              key={m.id}
              onClick={() => setMetric(m.id as any)}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                metric === m.id 
                  ? `bg-opacity-20 bg-${m.color} text-${m.color}` 
                  : 'bg-gray-700 text-gray-400'
              }`}
              style={{ 
                backgroundColor: metric === m.id ? `${m.color}20` : undefined,
                color: metric === m.id ? m.color : undefined
              }}
            >
              {m.name}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorActiveUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorClassViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorWatchTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: '#374151' }}
              tickLine={{ stroke: '#374151' }}
            />
            <YAxis 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: '#374151' }}
              tickLine={{ stroke: '#374151' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151',
                color: '#F9FAFB'
              }} 
            />
            {metric === 'activeUsers' && (
              <Area
                type="monotone"
                dataKey="activeUsers"
                stroke="#8B5CF6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorActiveUsers)"
                name="Active Users"
              />
            )}
            {metric === 'classViews' && (
              <Area
                type="monotone"
                dataKey="classViews"
                stroke="#0EA5E9"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorClassViews)"
                name="Class Views"
              />
            )}
            {metric === 'watchTime' && (
              <Area
                type="monotone"
                dataKey="watchTime"
                stroke="#10B981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWatchTime)"
                name="Watch Time (hrs)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsageChart;
