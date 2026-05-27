import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { e as devices, i as incidentTrend, d as complianceTrend, h as riskDistribution, a as alertActivity, r as reportStats } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { l as ResponsiveContainer, b as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, B as Bar, e as LineChart, d as Line, f as PieChart, P as Pie, c as Cell, j as RadarChart, h as PolarGrid, g as PolarAngleAxis, i as PolarRadiusAxis, R as Radar } from "./_libs/recharts.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
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
function AnalyticsPage() {
  const perf = devices.slice(0, 6).map((d) => ({
    name: d.name.split(" ")[0],
    compliance: d.complianceScore,
    risk: d.riskScore
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Executive Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Cross-fleet compliance and operational insights." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Incident trends" }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Low", stackId: "a", fill: "var(--color-success)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Medium", stackId: "a", fill: "var(--color-warning)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "High", stackId: "a", fill: "var(--color-chart-5)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Critical", stackId: "a", fill: "var(--color-destructive)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Compliance performance" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: complianceTrend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [60, 100], stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "score", stroke: "var(--color-primary)", strokeWidth: 2, dot: {
            r: 3
          } })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Device risk distribution" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: riskDistribution, dataKey: "value", nameKey: "name", outerRadius: 90, label: true, children: riskDistribution.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Monthly alert activity" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: alertActivity, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "week", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "alerts", fill: "var(--color-chart-2)", radius: [4, 4, 0, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Report generation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: reportStats, layout: "vertical", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", horizontal: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "type", type: "category", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", fill: "var(--color-primary)", radius: [0, 4, 4, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Device performance" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: perf, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--color-border)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "name", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarRadiusAxis, { stroke: "var(--color-muted-foreground)", fontSize: 10 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { name: "Compliance", dataKey: "compliance", stroke: "var(--color-primary)", fill: "var(--color-primary)", fillOpacity: 0.3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { name: "Risk", dataKey: "risk", stroke: "var(--color-chart-5)", fill: "var(--color-chart-5)", fillOpacity: 0.2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
        ] }) }) })
      ] })
    ] })
  ] });
}
export {
  AnalyticsPage as component
};
