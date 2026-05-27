import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { g as reports } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { a as StatusBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { l as FileText, F as FileChartColumnIncreasing, k as FileCheck, q as Plus, D as Download } from "./_libs/lucide-react.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_ssr/badge-DyfXZgLs.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
function ReportsPage() {
  const [list, setList] = reactExports.useState(reports);
  const generate = (type) => {
    const r = {
      id: `RPT-${3400 + Math.floor(Math.random() * 600)}`,
      type,
      device: "CardioPulse X3",
      generated: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      status: "Draft",
      author: "S. Patel"
    };
    setList([r, ...list]);
    toast.success(`${type} draft created`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Compliance Reports" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "PSUR · PMSR · CAPA · automated draft generation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: [{
      type: "PSUR",
      icon: FileText,
      label: "Periodic Safety Update Report",
      color: "from-primary/15 to-primary/5"
    }, {
      type: "PMSR",
      icon: FileChartColumnIncreasing,
      label: "Post-Market Surveillance Report",
      color: "from-info/15 to-info/5"
    }, {
      type: "CAPA",
      icon: FileCheck,
      label: "Corrective & Preventive Action",
      color: "from-success/15 to-success/5"
    }].map(({
      type,
      icon: Icon,
      label,
      color
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `border-border/60 bg-gradient-to-br ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-background/60 p-2 w-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold", children: type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "mt-4 w-full", onClick: () => generate(type), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
        " Generate ",
        type
      ] })
    ] }) }, type)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Latest report preview" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/20 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              list[0]?.id,
              " · ",
              list[0]?.type
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold", children: "CardioPulse X3 — Periodic Safety Update" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "Reporting period: Q1 2026 · Generated ",
              list[0]?.generated
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => toast.success("Export queued (mock)"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-4 w-4" }),
            " Export PDF"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-4", children: [{
          label: "Device units",
          value: "12,430"
        }, {
          label: "Incidents (qtr)",
          value: "9"
        }, {
          label: "Compliance",
          value: "94%"
        }, {
          label: "Open CAPAs",
          value: "1"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-background p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: s.value })
        ] }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-background p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase text-muted-foreground", children: "Risk analysis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: "Low residual risk profile. Trend lines remain within tolerated variance. No new safety signals detected this period." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-background p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase text-muted-foreground", children: "Corrective actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: "Firmware v4.12 rollout completed across 98.4% of fleet. Calibration review scheduled for Q2." })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Report history" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Device" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Generated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Author" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: list.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.device }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: r.generated }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => toast.success("Export queued (mock)"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-4 w-4" }),
            " PDF"
          ] }) })
        ] }, r.id)) })
      ] }) })
    ] })
  ] });
}
export {
  ReportsPage as component
};
