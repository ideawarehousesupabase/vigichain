import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/organization")({
  head: () => ({ meta: [{ title: "Organization · VigiChain MedSecure" }] }),
  component: OrgPage,
});

const team = [
  { name: "Sara Patel", email: "s.patel@novamed.co.uk", role: "Compliance Lead" },
  { name: "Jude Okafor", email: "j.okafor@novamed.co.uk", role: "QA Engineer" },
  { name: "Mei Lee", email: "m.lee@novamed.co.uk", role: "Regulatory Analyst" },
  { name: "Tom Reeve", email: "t.reeve@novamed.co.uk", role: "Operations" },
];

function OrgPage() {
  const { user } = useAuth();
  const [org, setOrg] = useState(user?.organization || "NovaMed Ltd");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Organization Settings</h1>
        <p className="text-sm text-muted-foreground">Workspace configuration and team overview.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Organization information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Organization name"><Input value={org} onChange={(e) => setOrg(e.target.value)} /></Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Country"><Input defaultValue="United Kingdom" /></Field>
              <Field label="MHRA Reg. number"><Input defaultValue="GBMF-08821" /></Field>
            </div>
            <Field label="Registered address"><Input defaultValue="14 Beaufort Street, London EC2A 4QB" /></Field>
            <Button onClick={() => toast.success("Organization saved")}>Save changes</Button>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Compliance preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Toggle label="Auto-generate PSUR drafts quarterly" defaultChecked />
            <Toggle label="Require CAPA on Critical incidents" defaultChecked />
            <Toggle label="Block submission with expired certifications" defaultChecked />
            <Toggle label="Enable predictive risk monitoring" defaultChecked />
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Notification preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Toggle label="Email me on Critical alerts" defaultChecked />
            <Toggle label="Daily compliance digest" />
            <Toggle label="Weekly executive summary" defaultChecked />
            <Toggle label="In-app banner for audit events" defaultChecked />
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Subscription</CardTitle></CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Current plan</div>
                <div className="mt-1 text-2xl font-semibold">Enterprise</div>
                <Badge variant="outline" className="mt-2 border-success/30 bg-success/10 text-success">Active · renews 14 Jun 2026</Badge>
              </div>
              <Button variant="outline">Manage billing</Button>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-md bg-muted/40 p-3"><div className="text-xs text-muted-foreground">Devices</div><div className="font-semibold">8 / 250</div></div>
              <div className="rounded-md bg-muted/40 p-3"><div className="text-xs text-muted-foreground">Seats</div><div className="font-semibold">4 / 25</div></div>
              <div className="rounded-md bg-muted/40 p-3"><div className="text-xs text-muted-foreground">Reports / mo</div><div className="font-semibold">37 / ∞</div></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Team</CardTitle></CardHeader>
        <CardContent className="divide-y p-0">
          {team.map(m => (
            <div key={m.email} className="flex items-center gap-3 p-4">
              <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary/10 text-primary">{m.name.split(" ").map(p=>p[0]).join("")}</AvatarFallback></Avatar>
              <div className="flex-1"><div className="text-sm font-medium">{m.name}</div><div className="text-xs text-muted-foreground">{m.email}</div></div>
              <Badge variant="outline">{m.role}</Badge>
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
function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-md border bg-muted/20 p-3">
      <span className="text-sm">{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
