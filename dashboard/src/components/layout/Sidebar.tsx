
import { Link } from "react-router-dom";
import {
  BarChart,
  Calendar,
  ChevronLeft,
  Home,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "../../components/ui/sidebar";

const Sidebar = () => {
  return (
    <SidebarComponent>
      <SidebarHeader className="flex items-center justify-between pb-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Admin Panel</span>
          </div>
          <SidebarTrigger>
            <ChevronLeft className="h-4 w-4" />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-700">
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="bg-gray-700 text-white">
              <Link to="/admin/dashboard" className="flex items-center">
                <BarChart className="mr-2 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-700">
              <Link to="#" className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <span>Users</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-700">
              <Link to="#" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Classes</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="pt-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-700">
              <Link to="#" className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
