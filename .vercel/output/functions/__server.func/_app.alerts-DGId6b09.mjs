import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./_ssr/card-DIV666p3.mjs";
import { e as devices, t as telemetryFor, b as alerts } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { S as SeverityBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { v as Sparkles, x as TriangleAlert, w as TrendingUp } from "./_libs/lucide-react.mjs";
import { l as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, k as ReferenceLine, A as Area } from "./_libs/recharts.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_ssr/badge-DyfXZgLs.mjs";
import "./_libs/class-variance-authority.mjs";
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
function AlertsPage() {
  const anomaly = devices.map((d, i) => ({
    ...d,
    anomaly: Math.round(d.riskScore + (i % 3 === 0 ? 8 : -3))
  }));
  const trend = telemetryFor(3);
  const heat = devices.slice(0, 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Predictive Risk Monitoring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Simulated AI-driven anomaly detection across the fleet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border bg-gradient-to-r from-primary/10 via-accent/30 to-background p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/15 p-2 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "2 predictive warnings active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-sm text-muted-foreground", children: [
          "Models flagged unusual telemetry variance on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "PaceLink S5" }),
          " and rising incident velocity on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "InsulinFlow Pro" }),
          ". Recommended action: open investigation."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-3", children: alerts.slice(0, 3).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-warning/15 p-2 text-warning-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold", children: a.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: a.detail }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.deviceName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.time })
      ] })
    ] }) }, a.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Anomaly trend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Aggregate variance vs baseline · 30 days" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-warning-foreground" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: trend, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ag", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-chart-5)", stopOpacity: 0.35 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-chart-5)", stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "t", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 8,
          border: "1px solid var(--color-border)",
          background: "var(--color-card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: 65, stroke: "var(--color-muted-foreground)", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "value", stroke: "var(--color-chart-5)", strokeWidth: 2, fill: "url(#ag)" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Device anomaly index" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Device" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Risk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Anomaly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Severity" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: anomaly.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: d.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: d.id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: d.riskScore }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: d.anomaly }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: d.anomaly > 70 ? "Critical" : d.anomaly > 50 ? "High" : d.anomaly > 30 ? "Medium" : "Low" }) })
          ] }, d.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Risk heatmap" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Per-device intensity (simulated)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 sm:grid-cols-4", children: heat.map((d) => {
            const intensity = d.riskScore;
            const bg = intensity > 70 ? "bg-destructive/80" : intensity > 50 ? "bg-chart-5/70" : intensity > 30 ? "bg-warning/70" : "bg-success/70";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `aspect-square rounded-md ${bg} p-2 text-[11px] text-white shadow-sm`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: d.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-3 text-lg font-semibold", children: d.riskScore })
            ] }, d.id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-3 rounded-sm bg-success/70" }),
              " Low"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-3 rounded-sm bg-warning/70" }),
              " Medium"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-3 rounded-sm bg-chart-5/70" }),
              " High"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-3 rounded-sm bg-destructive/80" }),
              " Critical"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AlertsPage as component
};
