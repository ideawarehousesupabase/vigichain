import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Card, a as CardContent } from "./card-DIV666p3.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { s as signIn } from "./router-lDJB15sn.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { u as ShieldHalf, A as Activity, k as FileCheck, g as CircleAlert, j as EyeOff, i as Eye, n as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
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
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/@protobufjs/inquire.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const user = await signIn(email.trim().toLowerCase(), password);
      toast.success(`Welcome back, ${user.name.split(" ")[0]}`);
      navigate({
        to: "/dashboard"
      });
    } catch (error) {
      const code = error?.code;
      if (code === "auth/invalid-credential" || code === "auth/user-not-found" || code === "auth/wrong-password") {
        setErr("Invalid email or password.");
      } else if (code === "auth/too-many-requests") {
        setErr("Too many attempts. Please try again later.");
      } else if (code === "auth/invalid-email") {
        setErr("Invalid email address.");
      } else {
        setErr(error?.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden flex-col justify-between bg-sidebar p-12 text-sidebar-foreground lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldHalf, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "VigiChain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-sidebar-foreground/60", children: "MedSecure Platform" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold leading-tight", children: "Post-Market Surveillance, engineered for MHRA 2025." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sidebar-foreground/70", children: "Manage devices, incidents, predictive risk and audit-ready reports under SI 2024/1368 — in one compliance-first workspace." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid max-w-md grid-cols-3 gap-3 pt-4", children: [{
          icon: Activity,
          label: "Predictive risk"
        }, {
          icon: FileCheck,
          label: "PSUR · PMSR · CAPA"
        }, {
          icon: CircleAlert,
          label: "Audit chain"
        }].map(({
          icon: Icon,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-sidebar-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-sidebar-foreground/80", children: label })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-sidebar-foreground/50", children: "© 2026 VigiChain Ltd · United Kingdom" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md border-border/60 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Access your MedSecure workspace." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Work email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: showPw ? "text" : "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((v) => !v), className: "absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground", "aria-label": showPw ? "Hide password" : "Show password", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          " Signing in…"
        ] }) : "Sign in" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "No account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "font-medium text-primary hover:underline", children: "Create one" })
      ] })
    ] }) }) })
  ] });
}
export {
  LoginPage as component
};
