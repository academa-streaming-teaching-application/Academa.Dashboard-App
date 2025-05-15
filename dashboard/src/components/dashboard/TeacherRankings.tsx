
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
import { topTeachers } from "../../mock/dashboardData";

interface TeacherRankingsProps {
  dateRange: { from: Date; to: Date };
}

const TeacherRankings = ({ dateRange }: TeacherRankingsProps) => {
  const [sortBy, setSortBy] = useState<'totalViews' | 'classCount' | 'averageRating'>('totalViews');
  
  // In a real app, we'd filter by date range and sort dynamically
  const sortedTeachers = [...topTeachers].sort((a, b) => b[sortBy] - a[sortBy]);
  
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-white">Top Teachers</CardTitle>
        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
          <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600 text-white">
            <SelectGroup>
              <SelectItem value="totalViews">Total Views</SelectItem>
              <SelectItem value="classCount">Class Count</SelectItem>
              <SelectItem value="averageRating">Rating</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow className="hover:bg-gray-900">
              <TableHead className="text-gray-400 w-[40%]">Teacher</TableHead>
              <TableHead className="text-gray-400">Specialty</TableHead>
              <TableHead className="text-gray-400 text-right">Classes</TableHead>
              <TableHead className="text-gray-400 text-right">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTeachers.slice(0, 5).map((teacher) => (
              <TableRow key={teacher.id} className="hover:bg-gray-700 border-gray-700">
                <TableCell className="font-medium text-white">{teacher.name}</TableCell>
                <TableCell className="text-gray-300">{teacher.specialty}</TableCell>
                <TableCell className="text-gray-300 text-right">{teacher.classCount}</TableCell>
                <TableCell className="text-gray-300 text-right">
                  <div className="flex items-center justify-end">
                    <span>{teacher.averageRating.toFixed(1)}</span>
                    <span className="text-yellow-400 ml-1">★</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TeacherRankings;
