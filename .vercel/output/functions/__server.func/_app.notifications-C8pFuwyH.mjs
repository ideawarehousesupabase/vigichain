import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { n as notifications } from "./_ssr/mock-data-CmlqfHOc.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { c as Check, r as Settings, s as ShieldAlert, l as FileText, B as Bell, O as OctagonAlert } from "./_libs/lucide-react.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
const icons = {
  Critical: OctagonAlert,
  Reminder: Bell,
  Report: FileText,
  Risk: ShieldAlert,
  System: Settings
};
const tones = {
  Critical: "bg-destructive/10 text-destructive",
  Reminder: "bg-warning/15 text-warning-foreground",
  Report: "bg-info/15 text-info",
  Risk: "bg-chart-5/15 text-chart-5",
  System: "bg-muted text-muted-foreground"
};
function NotificationsPage() {
  const [read, setRead] = reactExports.useState({});
  const markRead = (id) => {
    setRead((r) => ({
      ...r,
      [id]: true
    }));
    toast.success("Marked as read");
  };
  const markAll = () => {
    setRead(Object.fromEntries(notifications.map((n) => [n.id, true])));
    toast.success("All marked as read");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Central alert and reminder centre." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: markAll, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-2 h-4 w-4" }),
        "Mark all read"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "divide-y p-0", children: notifications.map((n) => {
      const Icon = icons[n.type];
      const isRead = read[n.id];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-4 p-4 hover:bg-muted/30 ${isRead ? "opacity-60" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-2 ${tones[n.type]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: n.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: n.time })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: n.body })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: isRead ? "ghost" : "outline", disabled: isRead, onClick: () => markRead(n.id), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1 h-3.5 w-3.5" }),
          isRead ? "Read" : "Mark read"
        ] })
      ] }, n.id);
    }) }) })
  ] });
}
export {
  NotificationsPage as component
};
