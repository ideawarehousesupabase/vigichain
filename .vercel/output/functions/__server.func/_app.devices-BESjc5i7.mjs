import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { D as Dialog, e as DialogTrigger, S as Select, h as SelectTrigger, i as SelectValue, f as SelectContent, g as SelectItem, a as DialogContent, c as DialogHeader, d as DialogTitle, b as DialogFooter } from "./_ssr/select-DhN13T2l.mjs";
import { e as devices } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { a as StatusBadge } from "./_ssr/badges-D6k2r94z.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { q as Plus, S as Search, E as ExternalLink, p as Pencil, T as Trash2 } from "./_libs/lucide-react.mjs";
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
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
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
function DevicesPage() {
  const [list, setList] = reactExports.useState(devices);
  const [q, setQ] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("All");
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => list.filter((d) => (status === "All" || d.status === status) && (d.name.toLowerCase().includes(q.toLowerCase()) || d.manufacturer.toLowerCase().includes(q.toLowerCase()) || d.id.toLowerCase().includes(q.toLowerCase()))), [list, q, status]);
  const save = (d) => {
    if (editing) setList(list.map((x) => x.id === d.id ? d : x));
    else setList([d, ...list]);
    setOpen(false);
    setEditing(null);
    toast.success(editing ? "Device updated" : "Device added");
  };
  const remove = (id) => {
    setList(list.filter((d) => d.id !== id));
    toast.success("Device removed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Device Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Catalogue of registered medical devices." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (o) => {
        setOpen(o);
        if (!o) setEditing(null);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
          " Add device"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceFormDialog, { editing, onSave: save })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, ID, manufacturer…", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: setStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["All", "Active", "Under Review", "Recalled", "Decommissioned"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Device" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Cert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Manufacturer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          filtered.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: d.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: d.id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border px-2 py-0.5 text-xs font-medium", children: [
              "Class ",
              d.riskClass
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: d.certStatus }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.manufacturer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: d.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground text-sm", children: d.updated }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/devices/$id", params: {
                id: d.id
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => {
                setEditing(d);
                setOpen(true);
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => remove(d.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
            ] }) })
          ] }, d.id)),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, className: "py-10 text-center text-muted-foreground", children: "No devices found." }) })
        ] })
      ] }) })
    ] }) })
  ] });
}
function DeviceFormDialog({
  editing,
  onSave
}) {
  const [d, setD] = reactExports.useState(editing || {
    id: `DEV-${1050 + Math.floor(Math.random() * 900)}`,
    name: "",
    category: "Diagnostic",
    riskClass: "IIa",
    certStatus: "UKCA",
    manufacturer: "",
    status: "Active",
    updated: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    riskScore: 20,
    complianceScore: 90
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing ? "Edit device" : "Add device" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Device name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: d.name, onChange: (e) => setD({
        ...d,
        name: e.target.value
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Manufacturer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: d.manufacturer, onChange: (e) => setD({
        ...d,
        manufacturer: e.target.value
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: d.category, onValueChange: (v) => setD({
        ...d,
        category: v
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Cardiac Monitor", "Infusion Pump", "Imaging", "Ventilator", "Diagnostic", "Dialysis", "Implant"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Risk class", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: d.riskClass, onValueChange: (v) => setD({
        ...d,
        riskClass: v
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["I", "IIa", "IIb", "III"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c, children: [
          "Class ",
          c
        ] }, c)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Certification", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: d.certStatus, onValueChange: (v) => setD({
        ...d,
        certStatus: v
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["UKCA", "CE", "Pending", "Expired"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: d.status, onValueChange: (v) => setD({
        ...d,
        status: v
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Active", "Under Review", "Recalled", "Decommissioned"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onSave({
      ...d,
      updated: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    }), children: editing ? "Save changes" : "Add device" }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    children
  ] });
}
export {
  DevicesPage as component
};
