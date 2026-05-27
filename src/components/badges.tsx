import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SeverityBadge({ severity }: { severity: "Low" | "Medium" | "High" | "Critical" }) {
  const styles = {
    Low: "bg-success/10 text-success border-success/30",
    Medium: "bg-warning/15 text-warning-foreground border-warning/40",
    High: "bg-chart-5/15 text-chart-5 border-chart-5/40",
    Critical: "bg-destructive/10 text-destructive border-destructive/40",
  } as const;
  return <Badge variant="outline" className={cn("font-medium", styles[severity])}>{severity}</Badge>;
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-success/10 text-success border-success/30",
    Resolved: "bg-success/10 text-success border-success/30",
    Final: "bg-success/10 text-success border-success/30",
    Submitted: "bg-info/15 text-info border-info/30",
    Success: "bg-success/10 text-success border-success/30",
    Open: "bg-destructive/10 text-destructive border-destructive/40",
    Investigating: "bg-warning/15 text-warning-foreground border-warning/40",
    "Under Review": "bg-warning/15 text-warning-foreground border-warning/40",
    Pending: "bg-warning/15 text-warning-foreground border-warning/40",
    Draft: "bg-muted text-muted-foreground border-border",
    Recalled: "bg-destructive/10 text-destructive border-destructive/40",
    Expired: "bg-destructive/10 text-destructive border-destructive/40",
    Decommissioned: "bg-muted text-muted-foreground border-border",
    UKCA: "bg-info/15 text-info border-info/30",
    CE: "bg-accent/40 text-accent-foreground border-accent",
    Failed: "bg-destructive/10 text-destructive border-destructive/40",
  };
  return <Badge variant="outline" className={cn("font-medium", map[status] || "bg-muted text-muted-foreground")}>{status}</Badge>;
}
