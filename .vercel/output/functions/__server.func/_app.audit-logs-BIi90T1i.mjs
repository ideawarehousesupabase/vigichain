import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { c as auditLog } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { a as StatusBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { t as ShieldCheck, S as Search, m as Link2 } from "./_libs/lucide-react.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_ssr/badge-DyfXZgLs.mjs";
import "./_libs/class-variance-authority.mjs";
function AuditLogsPage() {
  const [q, setQ] = reactExports.useState("");
  const rows = reactExports.useMemo(() => auditLog.filter((a) => a.user.toLowerCase().includes(q.toLowerCase()) || a.action.toLowerCase().includes(q.toLowerCase()) || a.device.toLowerCase().includes(q.toLowerCase())), [q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Audit Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tamper-evident compliance event ledger." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border bg-success/10 px-3 py-2 text-sm text-success", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
        " Chain integrity verified · ",
        auditLog.length,
        " entries"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Ledger" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4 max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "pl-9", placeholder: "Search user, action, device…", value: q, onChange: (e) => setQ(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Timestamp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Device" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Hash" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: a.timestamp }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: a.user }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: a.action }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: a.device }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3 w-3" }),
              a.hash
            ] }) })
          ] }, a.id)) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  AuditLogsPage as component
};
