import { Search, Bell, ChevronDown } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/components/AuthProvider";

export function TopBar() {
  const { user } = useAuth();
  const initials = user?.name?.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <SidebarTrigger className="-ml-1" />
      <div className="relative hidden flex-1 max-w-md md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search devices, incidents, reports…" className="pl-9 bg-muted/40 border-transparent focus-visible:bg-background" />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <Badge variant="outline" className="hidden gap-1.5 border-success/30 bg-success/10 text-success md:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> MHRA SI 2024/1368
        </Badge>
        <Link to="/notifications" className="relative rounded-md p-2 hover:bg-muted">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Link>
        <div className="flex items-center gap-2 rounded-lg border bg-card px-2 py-1.5">
          <Avatar className="h-7 w-7"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{initials}</AvatarFallback></Avatar>
          <div className="hidden text-left leading-tight sm:block">
            <div className="text-xs font-medium">{user?.name || "User"}</div>
            <div className="text-[10px] text-muted-foreground">{user?.organization || "—"}</div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
