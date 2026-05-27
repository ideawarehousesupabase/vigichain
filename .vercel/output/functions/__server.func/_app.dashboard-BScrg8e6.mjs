import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { f as incidents, e as devices, b as alerts, d as complianceTrend, h as riskDistribution, i as incidentTrend } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { S as SeverityBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { P as Progress } from "./_ssr/progress-BRG1z6ZI.mjs";
import { q as Plus, F as FileChartColumnIncreasing, t as ShieldCheck, h as Cpu, x as TriangleAlert, A as Activity, l as FileText, w as TrendingUp } from "./_libs/lucide-react.mjs";
import { l as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, A as Area, f as PieChart, P as Pie, c as Cell, L as Legend, b as BarChart, B as Bar } from "./_libs/recharts.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_ssr/badge-DyfXZgLs.mjs";
import "./_libs/radix-ui__react-progress.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/lodash.mjs";
import "./_libs/react-smooth.mjs";
import "./_libs/prop-types.mjs";
import "./_libs/fast-equals.mjs";
import "./_libs/tiny-invariant.mjs";
import "./_libs/react-is.mjs";
import "./_libs/d3-shape.mjs";
import "./_libs/d3-path.mjs";
import "./_libs/victory-vendor.mjs";
import "./_libs/d3-scale.mjs";
import "./_libs/internmap.mjs";
import "./_libs/d3-array.mjs";
import "./_libs/d3-time-format.mjs";
import "./_libs/d3-time.mjs";
import "./_libs/d3-interpolate.mjs";
import "./_libs/d3-color.mjs";
import "./_libs/d3-format.mjs";
import "./_libs/recharts-scale.mjs";
import "./_libs/decimal.js-light.mjs";
import "./_libs/eventemitter3.mjs";
function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-semibold tracking-tight", children: value }),
      delta && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-xs ${tone === "down" ? "text-success" : tone === "up" ? "text-destructive" : "text-muted-foreground"}`, children: delta })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-2.5 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
  ] }) }) });
}
function Dashboard() {
  const openIncidents = incidents.filter((i) => i.status !== "Resolved").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Compliance Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Live PMS posture across your device fleet · MHRA SI 2024/1368" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
          " Add device"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileChartColumnIncreasing, { className: "mr-1.5 h-4 w-4" }),
          " Generate PSUR"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: ShieldCheck, label: "Compliance score", value: "91%", delta: "+3% vs last quarter", tone: "down" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Cpu, label: "Total devices", value: devices.length, delta: `${devices.filter((d) => d.status === "Active").length} active` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: TriangleAlert, label: "Active alerts", value: alerts.length, delta: "2 critical", tone: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Activity, label: "Open incidents", value: openIncidents, delta: "1 high severity", tone: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: FileText, label: "Pending reports", value: "4", delta: "Due within 7 days" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Compliance trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-success" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: complianceTrend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-primary)", stopOpacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-primary)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [60, 100], stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "score", stroke: "var(--color-primary)", strokeWidth: 2, fill: "url(#g1)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Risk distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "By device risk score" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: riskDistribution, dataKey: "value", nameKey: "name", innerRadius: 55, outerRadius: 90, paddingAngle: 2, children: riskDistribution.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconType: "circle" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Incident severity over time" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: incidentTrend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Low", stackId: "a", fill: "var(--color-success)", radius: [0, 0, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Medium", stackId: "a", fill: "var(--color-warning)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "High", stackId: "a", fill: "var(--color-chart-5)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Critical", stackId: "a", fill: "var(--color-destructive)", radius: [4, 4, 0, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Device fleet health" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: devices.slice(0, 5).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              d.complianceScore,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: d.complianceScore, className: "h-1.5" })
        ] }, d.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Recent activity" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: [{
          user: "S. Patel",
          action: "generated PSUR for CardioPulse X3",
          time: "2h ago"
        }, {
          user: "System",
          action: "raised critical alert on PaceLink S5",
          time: "5h ago"
        }, {
          user: "J. Okafor",
          action: "updated incident INC-2202",
          time: "1d ago"
        }, {
          user: "M. Lee",
          action: "added device ThermoView T1",
          time: "1d ago"
        }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-lg border bg-muted/30 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 w-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: a.user }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.action })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.time })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Active risk alerts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: alerts.slice(0, 4).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-lg border bg-muted/30 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 text-warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: a.detail })
          ] })
        ] }, a.id)) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
