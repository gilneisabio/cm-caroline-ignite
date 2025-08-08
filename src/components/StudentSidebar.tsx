import { NavLink, useLocation } from "react-router-dom";
import { Home, CalendarDays, DollarSign, LogOut } from "lucide-react";
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

export function StudentSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const items = [
    { title: "Início", url: "/aluno", icon: Home },
    { title: "Fazer Check-in", url: "/aluno/agendamento", icon: CalendarDays },
    { title: "Meus Planos", url: "/aluno/planos", icon: DollarSign },
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
          <SidebarGroupLabel>Área do Aluno</SidebarGroupLabel>
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

export default StudentSidebar;
