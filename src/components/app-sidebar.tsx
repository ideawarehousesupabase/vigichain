import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard, Cpu, AlertTriangle, BellRing, FileText, BarChart3,
  ShieldCheck, Bell, Building2, User, LogOut, ShieldHalf,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { logOut } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";

const main = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Devices", url: "/devices", icon: Cpu },
  { title: "Incidents", url: "/incidents", icon: AlertTriangle },
  { title: "Alerts", url: "/alerts", icon: BellRing },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];
const compliance = [
  { title: "Audit Logs", url: "/audit-logs", icon: ShieldCheck },
  { title: "Notifications", url: "/notifications", icon: Bell },
];
const settings = [
  { title: "Organization", url: "/organization", icon: Building2 },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const isActive = (u: string) => path === u || path.startsWith(u + "/");

  const renderGroup = (label: string, items: typeof main) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                <Link to={item.url} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <ShieldHalf className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="text-sm font-semibold text-sidebar-foreground">VigiChain</div>
              <div className="text-[11px] text-sidebar-foreground/60">MedSecure · PMS</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {renderGroup("Main", main)}
        {renderGroup("Compliance", compliance)}
        {renderGroup("Settings", settings)}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              onClick={() => { logOut(); refresh(); navigate({ to: "/login" }); }}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Log out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
