import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./_ssr/card-DIV666p3.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { A as Avatar, a as AvatarFallback } from "./_ssr/avatar-BJDbbUeP.mjs";
import { b as useAuth, u as updateProfile, c as changeUserPassword } from "./_ssr/router-lDJB15sn.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import "./_libs/firebase__auth.mjs";
import "./_libs/firebase__app.mjs";
import "./_libs/firebase__logger.mjs";
import "./_libs/firebase__firestore.mjs";
import "./_libs/firebase.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
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
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
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
function ProfilePage() {
  const {
    user
  } = useAuth();
  const [name, setName] = reactExports.useState(user?.name ?? "");
  const [org, setOrg] = reactExports.useState(user?.organization ?? "");
  const [pwd, setPwd] = reactExports.useState({
    current: "",
    next: "",
    confirm: ""
  });
  const [saving, setSaving] = reactExports.useState(false);
  const [changingPw, setChangingPw] = reactExports.useState(false);
  const email = user?.email ?? "";
  const saveProfile = async () => {
    setSaving(true);
    try {
      await updateProfile({
        name,
        organization: org
      });
      toast.success("Profile updated");
    } catch (error) {
      toast.error(error?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };
  const handleChangePassword = async () => {
    if (pwd.next.length < 6) return toast.error("New password too short");
    if (pwd.next !== pwd.confirm) return toast.error("New passwords don't match");
    setChangingPw(true);
    try {
      await changeUserPassword(pwd.next);
      setPwd({
        current: "",
        next: "",
        confirm: ""
      });
      toast.success("Password updated");
    } catch (error) {
      const code = error?.code;
      if (code === "auth/requires-recent-login") {
        toast.error("Please log out and log back in before changing your password.");
      } else {
        toast.error(error?.message || "Failed to change password");
      }
    } finally {
      setChangingPw(false);
    }
  };
  const initials = (user?.name ?? "").split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase() || "U";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Personal information and account security." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap items-center gap-5 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-16 w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-lg", children: initials }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: user?.name || "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: user?.organization })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Personal information" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: email, disabled: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: org, onChange: (e) => setOrg(e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveProfile, disabled: saving, children: saving ? "Saving…" : "Save profile" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Change password" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "New password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: pwd.next, onChange: (e) => setPwd({
            ...pwd,
            next: e.target.value
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Confirm new password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: pwd.confirm, onChange: (e) => setPwd({
            ...pwd,
            confirm: e.target.value
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: handleChangePassword, disabled: changingPw, children: changingPw ? "Updating…" : "Update password" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Activity summary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-3 sm:grid-cols-4", children: [{
        label: "Reports authored",
        value: "12"
      }, {
        label: "Incidents reviewed",
        value: "34"
      }, {
        label: "Alerts acknowledged",
        value: "57"
      }, {
        label: "Devices managed",
        value: "8"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/30 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-semibold", children: s.value })
      ] }, s.label)) })
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
export {
  ProfilePage as component
};
