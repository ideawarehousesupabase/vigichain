import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { e as devices, t as telemetryFor, f as incidents, b as alerts, g as reports } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { a as StatusBadge, S as SeverityBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { P as Progress } from "./_ssr/progress-BRG1z6ZI.mjs";
import { e as ChevronLeft, l as FileText, x as TriangleAlert } from "./_libs/lucide-react.mjs";
import { l as ResponsiveContainer, e as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, k as ReferenceLine, d as Line } from "./_libs/recharts.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/isbot.mjs";
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
function DeviceDetails() {
  const {
    id
  } = useParams({
    from: "/_app/devices/$id"
  });
  const device = devices.find((d) => d.id === id);
  if (!device) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/devices", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "mr-1 h-4 w-4" }),
        " Back"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-10 text-center text-muted-foreground", children: "Device not found." }) })
    ] });
  }
  const data = telemetryFor(device.riskScore / 10);
  const linkedIncidents = incidents.filter((i) => i.deviceId === device.id);
  const linkedAlerts = alerts.filter((a) => a.deviceId === device.id);
  const linkedReports = reports.filter((r) => r.device === device.name);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/devices", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "mr-1 h-4 w-4" }),
        " All devices"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mr-1.5 h-4 w-4" }),
        " Generate report"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: device.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: device.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
          device.category,
          " · ",
          device.manufacturer
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: device.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: device.certStatus }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border bg-muted/40 px-2.5 py-0.5 text-xs font-medium", children: [
          "Class ",
          device.riskClass
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Compliance status" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-semibold", children: [
            device.complianceScore,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: device.complianceScore, className: "mt-3 h-1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Based on certificate validity, incident frequency and report cadence." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Risk score" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-semibold", children: [
            device.riskScore,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: device.riskScore, className: "mt-3 h-1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Composite of telemetry variance and incident trends (simulated)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Open alerts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold", children: linkedAlerts.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
            linkedIncidents.length,
            " incidents linked to this device."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Telemetry (simulated)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "30-day operational metric · baseline reference" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "t", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 8,
          border: "1px solid var(--color-border)",
          background: "var(--color-card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: 65, stroke: "var(--color-muted-foreground)", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "value", stroke: "var(--color-primary)", strokeWidth: 2, dot: false })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Incident history" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
          linkedIncidents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No incidents recorded." }),
          linkedIncidents.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-3 rounded-md border bg-muted/30 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: i.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: i.severity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: i.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[11px] text-muted-foreground", children: [
              i.created,
              " · ",
              i.status
            ] })
          ] }) }, i.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Recent alerts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
          linkedAlerts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No active alerts." }),
          linkedAlerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-md border bg-muted/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 text-warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: a.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: a.detail })
            ] })
          ] }, a.id))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Linked reports" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
        linkedReports.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No reports generated yet." }),
        linkedReports.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border bg-muted/30 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              r.type,
              " · ",
              r.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              r.generated,
              " · ",
              r.author
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
        ] }, r.id))
      ] })
    ] })
  ] });
}
export {
  DeviceDetails as component
};
