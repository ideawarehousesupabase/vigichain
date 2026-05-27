import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { notifications } from "@/lib/mock-data";
import { AlertOctagon, Bell, FileText, Settings as SettingsIcon, ShieldAlert, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/notifications")({
  head: () => ({ meta: [{ title: "Notifications · VigiChain MedSecure" }] }),
  component: NotificationsPage,
});

const icons = {
  Critical: AlertOctagon,
  Reminder: Bell,
  Report: FileText,
  Risk: ShieldAlert,
  System: SettingsIcon,
} as const;

const tones: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive",
  Reminder: "bg-warning/15 text-warning-foreground",
  Report: "bg-info/15 text-info",
  Risk: "bg-chart-5/15 text-chart-5",
  System: "bg-muted text-muted-foreground",
};

function NotificationsPage() {
  const [read, setRead] = useState<Record<string, boolean>>({});
  const markRead = (id: string) => { setRead(r => ({ ...r, [id]: true })); toast.success("Marked as read"); };
  const markAll = () => { setRead(Object.fromEntries(notifications.map(n => [n.id, true]))); toast.success("All marked as read"); };
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
          <p className="text-sm text-muted-foreground">Central alert and reminder centre.</p>
        </div>
        <Button variant="outline" size="sm" onClick={markAll}><Check className="mr-2 h-4 w-4" />Mark all read</Button>
      </div>
      <Card className="border-border/60">
        <CardContent className="divide-y p-0">
          {notifications.map(n => {
            const Icon = icons[n.type];
            const isRead = read[n.id];
            return (
              <div key={n.id} className={`flex items-start gap-4 p-4 hover:bg-muted/30 ${isRead ? "opacity-60" : ""}`}>
                <div className={`rounded-lg p-2 ${tones[n.type]}`}><Icon className="h-4 w-4" /></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{n.title}</div>
                    <div className="text-xs text-muted-foreground">{n.time}</div>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
                </div>
                <Button size="sm" variant={isRead ? "ghost" : "outline"} disabled={isRead} onClick={() => markRead(n.id)}>
                  <Check className="mr-1 h-3.5 w-3.5" />{isRead ? "Read" : "Mark read"}
                </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
