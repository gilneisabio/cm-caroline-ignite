import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, CheckSquare, DollarSign, Settings, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    { title: "Visão Geral", url: "/admin", icon: Home },
    { title: "Alunos", url: "/admin/alunos", icon: Users },
    { title: "Check-ins", url: "/admin/checkins", icon: CheckSquare },
    { title: "Mensalidades", url: "/admin/mensalidades", icon: DollarSign },
    { title: "Configurações", url: "/admin/config", icon: Settings },
    { title: "Sair", url: "/logout", icon: LogOut },
  ];

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-secondary/70 text-primary font-medium"
      : "hover:bg-secondary/50";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CM Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={navCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AdminSidebar;
