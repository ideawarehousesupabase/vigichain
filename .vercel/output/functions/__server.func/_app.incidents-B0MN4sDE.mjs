import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { c as cn } from "./_ssr/utils-H80jjgLf.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { D as Dialog, e as DialogTrigger, S as Select, h as SelectTrigger, i as SelectValue, f as SelectContent, g as SelectItem, a as DialogContent, c as DialogHeader, d as DialogTitle, b as DialogFooter } from "./_ssr/select-DhN13T2l.mjs";
import { f as incidents, e as devices } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { S as SeverityBadge, a as StatusBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { q as Plus, S as Search } from "./_libs/lucide-react.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-dialog.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_ssr/badge-DyfXZgLs.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function IncidentsPage() {
  const [list, setList] = reactExports.useState(incidents);
  const [q, setQ] = reactExports.useState("");
  const [sev, setSev] = reactExports.useState("All");
  const [stat, setStat] = reactExports.useState("All");
  const [open, setOpen] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => list.filter((i) => (sev === "All" || i.severity === sev) && (stat === "All" || i.status === stat) && (i.id.toLowerCase().includes(q.toLowerCase()) || i.description.toLowerCase().includes(q.toLowerCase()) || i.deviceName.toLowerCase().includes(q.toLowerCase()))), [list, q, sev, stat]);
  const cycle = {
    Open: "Investigating",
    Investigating: "Resolved",
    Resolved: "Open"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Incidents & Complaints" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Post-market vigilance record book." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
          " Log incident"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewIncidentDialog, { onSave: (i) => {
          setList([i, ...list]);
          setOpen(false);
          toast.success("Incident logged");
        } })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
      ["Open", "Investigating", "Resolved"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-semibold", children: list.filter((i) => i.status === s).length })
      ] }) }, s)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Critical (open)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-semibold text-destructive", children: list.filter((i) => i.severity === "Critical" && i.status !== "Resolved").length })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search incidents…", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sev, onValueChange: setSev, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["All", "Low", "Medium", "High", "Critical"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stat, onValueChange: setStat, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["All", "Open", "Investigating", "Resolved"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Incident" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Device" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Severity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Created" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          filtered.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: i.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-xs text-muted-foreground", children: i.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm", children: [
              i.deviceName,
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: i.deviceId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: i.severity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: i.created }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: i.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => {
              setList(list.map((x) => x.id === i.id ? {
                ...x,
                status: cycle[x.status]
              } : x));
              toast.success(`Status → ${cycle[i.status]}`);
            }, children: "Update" }) })
          ] }, i.id)),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "py-10 text-center text-muted-foreground", children: "No incidents." }) })
        ] })
      ] }) })
    ] }) })
  ] });
}
function NewIncidentDialog({
  onSave
}) {
  const [deviceId, setDeviceId] = reactExports.useState(devices[0].id);
  const [severity, setSeverity] = reactExports.useState("Medium");
  const [description, setDescription] = reactExports.useState("");
  const submit = () => {
    const dev = devices.find((d) => d.id === deviceId);
    onSave({
      id: `INC-${2300 + Math.floor(Math.random() * 700)}`,
      deviceId,
      deviceName: dev.name,
      severity,
      description: description || "Pending details",
      created: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      status: "Open"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Log new incident" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Device" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: deviceId, onValueChange: setDeviceId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: devices.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d.id, children: d.name }, d.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Severity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: severity, onValueChange: (v) => setSeverity(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Low", "Medium", "High", "Critical"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Describe what happened, observed impact, reporting source…" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, children: "Log incident" }) })
  ] });
}
export {
  IncidentsPage as component
};
