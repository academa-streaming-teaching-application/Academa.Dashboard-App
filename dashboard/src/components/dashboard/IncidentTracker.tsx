
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { incidents, filterByDateRange } from "../../mock/dashboardData";

interface IncidentTrackerProps {
  dateRange: { from: Date; to: Date };
}

const IncidentTracker = ({ dateRange }: IncidentTrackerProps) => {
  const filteredIncidents = filterByDateRange(incidents, dateRange);
  
  const getBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'bg-green-600 hover:bg-green-700';
      case 'investigating':
        return 'bg-yellow-600 hover:bg-yellow-700';
      case 'in progress':
        return 'bg-blue-600 hover:bg-blue-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'technical':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'user reported':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'security':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">
          Incident Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow className="hover:bg-gray-900">
              <TableHead className="text-gray-400 w-[15%]">Date</TableHead>
              <TableHead className="text-gray-400 w-[15%]">Type</TableHead>
              <TableHead className="text-gray-400 w-[40%]">Description</TableHead>
              <TableHead className="text-gray-400 w-[15%]">Status</TableHead>
              <TableHead className="text-gray-400 w-[15%] text-right">Affected Users</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIncidents.map((incident) => (
              <TableRow key={incident.id} className="hover:bg-gray-700 border-gray-700">
                <TableCell className="font-medium text-gray-300">
                  {new Date(incident.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge className={`${getTypeColor(incident.type)}`}>
                    {incident.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{incident.description}</TableCell>
                <TableCell>
                  <Badge className={`${getBadgeColor(incident.status)}`}>
                    {incident.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300 text-right">{incident.affectedUsers.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default IncidentTracker;
