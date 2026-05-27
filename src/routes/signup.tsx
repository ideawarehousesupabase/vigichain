import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShieldHalf, Activity, FileCheck, AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { signUp } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account · VigiChain MedSecure" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (password.length < 6) { setErr("Password must be at least 6 characters."); return; }

    setLoading(true);
    try {
      await signUp(name, organization, email.trim().toLowerCase(), password);
      refresh();
      toast.success("Account created");
      navigate({ to: "/dashboard" });
    } catch (error: any) {
      setErr(error?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-sidebar p-12 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <ShieldHalf className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">VigiChain</div>
            <div className="text-xs text-sidebar-foreground/60">MedSecure Platform</div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight">Post-Market Surveillance, engineered for MHRA 2025.</h1>
          <p className="max-w-md text-sidebar-foreground/70">
            Manage devices, incidents, predictive risk and audit-ready reports under SI 2024/1368 — in one compliance-first workspace.
          </p>
          <div className="grid max-w-md grid-cols-3 gap-3 pt-4">
            {[
              { icon: Activity, label: "Predictive risk" },
              { icon: FileCheck, label: "PSUR · PMSR · CAPA" },
              { icon: AlertCircle, label: "Audit chain" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
                <Icon className="h-4 w-4 text-sidebar-primary" />
                <div className="mt-2 text-xs text-sidebar-foreground/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs text-sidebar-foreground/50">© 2026 VigiChain Ltd · United Kingdom</div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <Card className="w-full max-w-md border-border/60 shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold">Create your workspace</h2>
            <p className="mt-1 text-sm text-muted-foreground">Start your 14-day compliance trial.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org">Organization name</Label>
                <Input id="org" required value={organization} onChange={(e) => setOrganization(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPw ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" className="pr-10" />
                  <button type="button" onClick={() => setShowPw(v => !v)} className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground" aria-label={showPw ? "Hide password" : "Show password"}>
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              {err && <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{err}</div>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating…</> : "Create account"}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
