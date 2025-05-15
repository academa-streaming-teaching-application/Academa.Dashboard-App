
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { topClasses } from "../../mock/dashboardData";

interface ClassRankingsProps {
  dateRange: { from: Date; to: Date };
}

const ClassRankings = ({ dateRange }: ClassRankingsProps) => {
  const [sortBy, setSortBy] = useState<'views' | 'likes' | 'watchTime' | 'favorites'>('views');
  
  // In a real app, we'd filter by date range and sort dynamically
  // For now, we'll just sort the mock data
  const sortedClasses = [...topClasses].sort((a, b) => b[sortBy] - a[sortBy]);
  
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-white">Top Classes</CardTitle>
        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
          <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600 text-white">
            <SelectGroup>
              <SelectItem value="views">Views</SelectItem>
              <SelectItem value="likes">Likes</SelectItem>
              <SelectItem value="watchTime">Watch Time</SelectItem>
              <SelectItem value="favorites">Favorites</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow className="hover:bg-gray-900">
              <TableHead className="text-gray-400 w-[40%]">Class</TableHead>
              <TableHead className="text-gray-400">Teacher</TableHead>
              <TableHead className="text-gray-400 text-right">Views</TableHead>
              <TableHead className="text-gray-400 text-right">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedClasses.slice(0, 5).map((classItem) => (
              <TableRow key={classItem.id} className="hover:bg-gray-700 border-gray-700">
                <TableCell className="font-medium text-white">{classItem.title}</TableCell>
                <TableCell className="text-gray-300">{classItem.teacher}</TableCell>
                <TableCell className="text-gray-300 text-right">{classItem.views.toLocaleString()}</TableCell>
                <TableCell className="text-gray-300 text-right">{classItem.likes.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ClassRankings;
