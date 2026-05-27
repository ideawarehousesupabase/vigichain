import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./_ssr/card-DIV666p3.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { R as Root, T as Thumb } from "./_libs/radix-ui__react-switch.mjs";
import { c as cn } from "./_ssr/utils-H80jjgLf.mjs";
import { A as Avatar, a as AvatarFallback } from "./_ssr/avatar-BJDbbUeP.mjs";
import { B as Badge } from "./_ssr/badge-DyfXZgLs.mjs";
import { b as useAuth } from "./_ssr/router-lDJB15sn.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import "./_libs/firebase__auth.mjs";
import "./_libs/firebase__app.mjs";
import "./_libs/firebase__logger.mjs";
import "./_libs/firebase__firestore.mjs";
import "./_libs/firebase.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/firebase__util.mjs";
import "./_libs/firebase__component.mjs";
import "./_libs/idb.mjs";
import "./_libs/firebase__webchannel-wrapper.mjs";
import "./_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "./_libs/@grpc/proto-loader.mjs";
import "path";
import "./_libs/lodash.camelcase.mjs";
import "./_libs/protobufjs.mjs";
import "./_libs/protobufjs__aspromise.mjs";
import "./_libs/protobufjs__base64.mjs";
import "./_libs/protobufjs__eventemitter.mjs";
import "./_libs/protobufjs__float.mjs";
import "./_libs/@protobufjs/inquire.mjs";
import "./_libs/protobufjs__utf8.mjs";
import "./_libs/protobufjs__pool.mjs";
import "./_libs/long.mjs";
import "./_libs/protobufjs__codegen.mjs";
import "./_libs/protobufjs__fetch.mjs";
import "./_libs/protobufjs__path.mjs";
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root.displayName;
const team = [{
  name: "Sara Patel",
  email: "s.patel@novamed.co.uk",
  role: "Compliance Lead"
}, {
  name: "Jude Okafor",
  email: "j.okafor@novamed.co.uk",
  role: "QA Engineer"
}, {
  name: "Mei Lee",
  email: "m.lee@novamed.co.uk",
  role: "Regulatory Analyst"
}, {
  name: "Tom Reeve",
  email: "t.reeve@novamed.co.uk",
  role: "Operations"
}];
function OrgPage() {
  const {
    user
  } = useAuth();
  const [org, setOrg] = reactExports.useState(user?.organization || "NovaMed Ltd");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Organization Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Workspace configuration and team overview." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Organization information" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: org, onChange: (e) => setOrg(e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "United Kingdom" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "MHRA Reg. number", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "GBMF-08821" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Registered address", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "14 Beaufort Street, London EC2A 4QB" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => toast.success("Organization saved"), children: "Save changes" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Compliance preferences" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Auto-generate PSUR drafts quarterly", defaultChecked: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Require CAPA on Critical incidents", defaultChecked: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Block submission with expired certifications", defaultChecked: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Enable predictive risk monitoring", defaultChecked: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Notification preferences" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Email me on Critical alerts", defaultChecked: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Daily compliance digest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Weekly executive summary", defaultChecked: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "In-app banner for audit events", defaultChecked: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Subscription" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Current plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-semibold", children: "Enterprise" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mt-2 border-success/30 bg-success/10 text-success", children: "Active · renews 14 Jun 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Manage billing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-3 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/40 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Devices" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "8 / 250" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/40 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Seats" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "4 / 25" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/40 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Reports / mo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "37 / ∞" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Team" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "divide-y p-0", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-9 w-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-primary", children: m.name.split(" ").map((p) => p[0]).join("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: m.role })
      ] }, m.email)) })
    ] })
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
function Toggle({
  label,
  defaultChecked
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border bg-muted/20 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked })
  ] });
}
export {
  OrgPage as component
};
