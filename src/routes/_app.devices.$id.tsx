import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, AlertTriangle, FileText } from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine,
} from "recharts";
import { devices, incidents, alerts, reports, telemetryFor } from "@/lib/mock-data";
import { SeverityBadge, StatusBadge } from "@/components/badges";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/_app/devices/$id")({
  head: () => ({ meta: [{ title: "Device · VigiChain MedSecure" }] }),
  component: DeviceDetails,
});

function DeviceDetails() {
  const { id } = useParams({ from: "/_app/devices/$id" });
  const device = devices.find(d => d.id === id);
  if (!device) {
    return (
      <div className="space-y-3">
        <Button asChild variant="ghost" size="sm"><Link to="/devices"><ChevronLeft className="mr-1 h-4 w-4" /> Back</Link></Button>
        <Card><CardContent className="p-10 text-center text-muted-foreground">Device not found.</CardContent></Card>
      </div>
    );
  }
  const data = telemetryFor(device.riskScore / 10);
  const linkedIncidents = incidents.filter(i => i.deviceId === device.id);
  const linkedAlerts = alerts.filter(a => a.deviceId === device.id);
  const linkedReports = reports.filter(r => r.device === device.name);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm"><Link to="/devices"><ChevronLeft className="mr-1 h-4 w-4" /> All devices</Link></Button>
        <Button size="sm"><FileText className="mr-1.5 h-4 w-4" /> Generate report</Button>
      </div>

      <Card className="border-border/60">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-xs text-muted-foreground">{device.id}</div>
              <h1 className="text-2xl font-semibold">{device.name}</h1>
              <div className="mt-1 text-sm text-muted-foreground">{device.category} · {device.manufacturer}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={device.status} />
              <StatusBadge status={device.certStatus} />
              <span className="rounded-md border bg-muted/40 px-2.5 py-0.5 text-xs font-medium">Class {device.riskClass}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-sm">Compliance status</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{device.complianceScore}%</div>
            <Progress value={device.complianceScore} className="mt-3 h-1.5" />
            <p className="mt-2 text-xs text-muted-foreground">Based on certificate validity, incident frequency and report cadence.</p>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-sm">Risk score</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{device.riskScore}<span className="text-base text-muted-foreground">/100</span></div>
            <Progress value={device.riskScore} className="mt-3 h-1.5" />
            <p className="mt-2 text-xs text-muted-foreground">Composite of telemetry variance and incident trends (simulated).</p>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-sm">Open alerts</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{linkedAlerts.length}</div>
            <p className="mt-2 text-xs text-muted-foreground">{linkedIncidents.length} incidents linked to this device.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Telemetry (simulated)</CardTitle><p className="text-xs text-muted-foreground">30-day operational metric · baseline reference</p></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="t" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
              <ReferenceLine y={65} stroke="var(--color-muted-foreground)" strokeDasharray="4 4" />
              <Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Incident history</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {linkedIncidents.length === 0 && <p className="text-sm text-muted-foreground">No incidents recorded.</p>}
            {linkedIncidents.map(i => (
              <div key={i.id} className="flex items-start gap-3 rounded-md border bg-muted/30 p-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between"><span className="text-sm font-medium">{i.id}</span><SeverityBadge severity={i.severity} /></div>
                  <p className="mt-1 text-xs text-muted-foreground">{i.description}</p>
                  <div className="mt-1 text-[11px] text-muted-foreground">{i.created} · {i.status}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Recent alerts</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {linkedAlerts.length === 0 && <p className="text-sm text-muted-foreground">No active alerts.</p>}
            {linkedAlerts.map(a => (
              <div key={a.id} className="flex items-start gap-3 rounded-md border bg-muted/30 p-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-warning" />
                <div className="flex-1">
                  <div className="flex items-center justify-between"><span className="text-sm font-medium">{a.title}</span><SeverityBadge severity={a.severity} /></div>
                  <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Linked reports</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {linkedReports.length === 0 && <p className="text-sm text-muted-foreground">No reports generated yet.</p>}
          {linkedReports.map(r => (
            <div key={r.id} className="flex items-center justify-between rounded-md border bg-muted/30 p-3">
              <div>
                <div className="text-sm font-medium">{r.type} · {r.id}</div>
                <div className="text-xs text-muted-foreground">{r.generated} · {r.author}</div>
              </div>
              <StatusBadge status={r.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
