import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/components/AuthProvider";
import { updateProfile, changeUserPassword } from "@/lib/auth";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({ meta: [{ title: "Profile · VigiChain MedSecure" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user, refresh } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [org, setOrg] = useState(user?.organization ?? "");
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [saving, setSaving] = useState(false);
  const [changingPw, setChangingPw] = useState(false);

  const email = user?.email ?? "";

  const saveProfile = async () => {
    setSaving(true);
    try {
      await updateProfile({ name, organization: org });
      refresh();
      toast.success("Profile updated");
    } catch (error: any) {
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
      await changeUserPassword(pwd.current, pwd.next);
      refresh();
      setPwd({ current: "", next: "", confirm: "" });
      toast.success("Password updated");
    } catch (error: any) {
      toast.error(error?.message || "Failed to change password");
    } finally {
      setChangingPw(false);
    }
  };

  const initials = (user?.name ?? "").split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase() || "U";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-sm text-muted-foreground">Personal information and account security.</p>
      </div>

      <Card className="border-border/60">
        <CardContent className="flex flex-wrap items-center gap-5 p-6">
          <Avatar className="h-16 w-16"><AvatarFallback className="bg-primary text-primary-foreground text-lg">{initials}</AvatarFallback></Avatar>
          <div>
            <div className="text-lg font-semibold">{user?.name || "Your name"}</div>
            <div className="text-sm text-muted-foreground">{email}</div>
            <div className="text-xs text-muted-foreground">{user?.organization}</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Personal information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Full name"><Input value={name} onChange={(e) => setName(e.target.value)} /></Field>
            <Field label="Email"><Input value={email} disabled /></Field>
            <Field label="Organization"><Input value={org} onChange={(e) => setOrg(e.target.value)} /></Field>
            <Button onClick={saveProfile} disabled={saving}>{saving ? "Saving…" : "Save profile"}</Button>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Change password</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Current password"><Input type="password" value={pwd.current} onChange={(e) => setPwd({ ...pwd, current: e.target.value })} /></Field>
            <Field label="New password"><Input type="password" value={pwd.next} onChange={(e) => setPwd({ ...pwd, next: e.target.value })} /></Field>
            <Field label="Confirm new password"><Input type="password" value={pwd.confirm} onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })} /></Field>
            <Button variant="outline" onClick={handleChangePassword} disabled={changingPw}>{changingPw ? "Updating…" : "Update password"}</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Activity summary</CardTitle></CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-4">
          {[
            { label: "Reports authored", value: "12" },
            { label: "Incidents reviewed", value: "34" },
            { label: "Alerts acknowledged", value: "57" },
            { label: "Devices managed", value: "8" },
          ].map(s => (
            <div key={s.label} className="rounded-md bg-muted/30 p-4">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-2xl font-semibold">{s.value}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><Label className="text-xs">{label}</Label>{children}</div>;
}
