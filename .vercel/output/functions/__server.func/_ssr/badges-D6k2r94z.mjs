import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
function SeverityBadge({ severity }) {
  const styles = {
    Low: "bg-success/10 text-success border-success/30",
    Medium: "bg-warning/15 text-warning-foreground border-warning/40",
    High: "bg-chart-5/15 text-chart-5 border-chart-5/40",
    Critical: "bg-destructive/10 text-destructive border-destructive/40"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("font-medium", styles[severity]), children: severity });
}
function StatusBadge({ status }) {
  const map = {
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
    Failed: "bg-destructive/10 text-destructive border-destructive/40"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("font-medium", map[status] || "bg-muted text-muted-foreground"), children: status });
}
export {
  SeverityBadge as S,
  StatusBadge as a
};
