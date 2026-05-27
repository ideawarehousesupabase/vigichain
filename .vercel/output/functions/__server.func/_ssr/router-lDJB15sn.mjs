import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, e as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { o as onAuthStateChanged, g as getAuth, c as createUserWithEmailAndPassword, s as signInWithEmailAndPassword, a as signOut, u as updatePassword } from "../_libs/firebase__auth.mjs";
import { i as initializeApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { a as getFirestore, g as getDoc, d as doc, b as setDoc, u as updateDoc, s as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const firebaseConfig = {
  apiKey: "AIzaSyBVGCrkfEwPp-nUinaTCXCpgflVvlwst0E",
  authDomain: "vigichain.firebaseapp.com",
  projectId: "vigichain",
  storageBucket: "vigichain.firebasestorage.app",
  messagingSenderId: "888275921481",
  appId: "1:888275921481:web:cb9cc7bf4a240a36b7ad98",
  measurementId: "G-7L7GNBD5P4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
async function signUp(name, organization, email, password) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = credential.user.uid;
  const profile = { name, organization, email };
  await setDoc(doc(db, "users", uid), {
    ...profile,
    createdAt: serverTimestamp()
  });
  return { ...profile, uid };
}
async function signIn(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const uid = credential.user.uid;
  const profile = await fetchProfile(uid);
  return { ...profile, uid };
}
async function logOut() {
  await signOut(auth);
}
async function fetchProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  if (snap.exists()) {
    const data = snap.data();
    return {
      name: data.name ?? "",
      organization: data.organization ?? "",
      email: data.email ?? ""
    };
  }
  const firebaseUser = auth.currentUser;
  return {
    name: firebaseUser?.displayName ?? "",
    organization: "",
    email: firebaseUser?.email ?? ""
  };
}
async function updateProfile(patch) {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  await updateDoc(doc(db, "users", user.uid), patch);
}
async function changeUserPassword(newPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  await updatePassword(user, newPassword);
}
function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}
const AuthContext = reactExports.createContext({ user: null, loading: true });
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const profile = await fetchProfile(firebaseUser.uid);
          setUser({ ...profile, uid: firebaseUser.uid });
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, loading }, children });
}
function useAuth() {
  return reactExports.useContext(AuthContext);
}
const appCss = "/assets/styles-BTngEG_8.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VigiChain MedSecure" },
      { name: "description", content: "Post-Market Surveillance platform engineered for MHRA 2025 compliance." },
      { name: "author", content: "VigiChain" },
      { property: "og:title", content: "VigiChain MedSecure" },
      { property: "og:description", content: "Post-Market Surveillance platform engineered for MHRA 2025 compliance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@VigiChain" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$e = () => import("./signup-Q9laQ67P.mjs");
const Route$e = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Create account · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./login-BgiPZ6VU.mjs");
const Route$d = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("../_app-BQjY_pMJ.mjs");
const Route$c = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./index-DMvuqWam.mjs");
const Route$b = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("../_app.reports-DHU1Cslq.mjs");
const Route$a = createFileRoute("/_app/reports")({
  head: () => ({
    meta: [{
      title: "Reports · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("../_app.profile-bIUIOOgC.mjs");
const Route$9 = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [{
      title: "Profile · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("../_app.organization-B0nNgkrx.mjs");
const Route$8 = createFileRoute("/_app/organization")({
  head: () => ({
    meta: [{
      title: "Organization · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("../_app.notifications-C8pFuwyH.mjs");
const Route$7 = createFileRoute("/_app/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("../_app.incidents-B0MN4sDE.mjs");
const Route$6 = createFileRoute("/_app/incidents")({
  head: () => ({
    meta: [{
      title: "Incidents · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_app.devices-BESjc5i7.mjs");
const Route$5 = createFileRoute("/_app/devices")({
  head: () => ({
    meta: [{
      title: "Devices · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_app.dashboard-BScrg8e6.mjs");
const Route$4 = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_app.audit-logs-BIi90T1i.mjs");
const Route$3 = createFileRoute("/_app/audit-logs")({
  head: () => ({
    meta: [{
      title: "Audit Logs · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_app.analytics-BuMLw5FL.mjs");
const Route$2 = createFileRoute("/_app/analytics")({
  head: () => ({
    meta: [{
      title: "Analytics · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_app.alerts-DGId6b09.mjs");
const Route$1 = createFileRoute("/_app/alerts")({
  head: () => ({
    meta: [{
      title: "Risk Monitoring · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_app.devices._id-CQoztci-.mjs");
const Route = createFileRoute("/_app/devices/$id")({
  head: () => ({
    meta: [{
      title: "Device · VigiChain MedSecure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SignupRoute = Route$e.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$f
});
const LoginRoute = Route$d.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$f
});
const AppRoute = Route$c.update({
  id: "/_app",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const AppReportsRoute = Route$a.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => AppRoute
});
const AppProfileRoute = Route$9.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => AppRoute
});
const AppOrganizationRoute = Route$8.update({
  id: "/organization",
  path: "/organization",
  getParentRoute: () => AppRoute
});
const AppNotificationsRoute = Route$7.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => AppRoute
});
const AppIncidentsRoute = Route$6.update({
  id: "/incidents",
  path: "/incidents",
  getParentRoute: () => AppRoute
});
const AppDevicesRoute = Route$5.update({
  id: "/devices",
  path: "/devices",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppAuditLogsRoute = Route$3.update({
  id: "/audit-logs",
  path: "/audit-logs",
  getParentRoute: () => AppRoute
});
const AppAnalyticsRoute = Route$2.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppRoute
});
const AppAlertsRoute = Route$1.update({
  id: "/alerts",
  path: "/alerts",
  getParentRoute: () => AppRoute
});
const AppDevicesIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppDevicesRoute
});
const AppDevicesRouteChildren = {
  AppDevicesIdRoute
};
const AppDevicesRouteWithChildren = AppDevicesRoute._addFileChildren(
  AppDevicesRouteChildren
);
const AppRouteChildren = {
  AppAlertsRoute,
  AppAnalyticsRoute,
  AppAuditLogsRoute,
  AppDashboardRoute,
  AppDevicesRoute: AppDevicesRouteWithChildren,
  AppIncidentsRoute,
  AppNotificationsRoute,
  AppOrganizationRoute,
  AppProfileRoute,
  AppReportsRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  LoginRoute,
  SignupRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  signUp as a,
  useAuth as b,
  changeUserPassword as c,
  logOut as l,
  router as r,
  signIn as s,
  updateProfile as u
};
