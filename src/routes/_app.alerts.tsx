import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Sparkles, Activity, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from "recharts";
import { alerts, devices, telemetryFor } from "@/lib/mock-data";
import { SeverityBadge } from "@/components/badges";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const Route = createFileRoute("/_app/alerts")({
  head: () => ({ meta: [{ title: "Risk Monitoring · VigiChain MedSecure" }] }),
  component: AlertsPage,
});

function AlertsPage() {
  const anomaly = devices.map((d, i) => ({ ...d, anomaly: Math.round(d.riskScore + (i % 3 === 0 ? 8 : -3)) }));
  const trend = telemetryFor(3);
  const heat = devices.slice(0, 8);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Predictive Risk Monitoring</h1>
        <p className="text-sm text-muted-foreground">Simulated AI-driven anomaly detection across the fleet.</p>
      </div>

      <div className="rounded-xl border bg-gradient-to-r from-primary/10 via-accent/30 to-background p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/15 p-2 text-primary"><Sparkles className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold">2 predictive warnings active</div>
            <p className="mt-0.5 text-sm text-muted-foreground">Models flagged unusual telemetry variance on <b>PaceLink S5</b> and rising incident velocity on <b>InsulinFlow Pro</b>. Recommended action: open investigation.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {alerts.slice(0, 3).map(a => (
          <Card key={a.id} className="border-border/60">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-warning/15 p-2 text-warning-foreground"><AlertTriangle className="h-4 w-4" /></div>
                <SeverityBadge severity={a.severity} />
              </div>
              <div className="mt-3 text-sm font-semibold">{a.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>{a.deviceName}</span><span>{a.time}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div><CardTitle className="text-base">Anomaly trend</CardTitle><p className="text-xs text-muted-foreground">Aggregate variance vs baseline · 30 days</p></div>
            <TrendingUp className="h-4 w-4 text-warning-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trend}>
              <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-chart-5)" stopOpacity={0.35} /><stop offset="100%" stopColor="var(--color-chart-5)" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="t" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
              <ReferenceLine y={65} stroke="var(--color-muted-foreground)" strokeDasharray="4 4" />
              <Area type="monotone" dataKey="value" stroke="var(--color-chart-5)" strokeWidth={2} fill="url(#ag)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Device anomaly index</CardTitle></CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader><TableRow><TableHead>Device</TableHead><TableHead>Risk</TableHead><TableHead>Anomaly</TableHead><TableHead>Severity</TableHead></TableRow></TableHeader>
              <TableBody>
                {anomaly.map(d => (
                  <TableRow key={d.id}>
                    <TableCell><div className="text-sm font-medium">{d.name}</div><div className="text-xs text-muted-foreground">{d.id}</div></TableCell>
                    <TableCell className="text-sm">{d.riskScore}</TableCell>
                    <TableCell className="text-sm font-medium">{d.anomaly}</TableCell>
                    <TableCell><SeverityBadge severity={d.anomaly > 70 ? "Critical" : d.anomaly > 50 ? "High" : d.anomaly > 30 ? "Medium" : "Low"} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Risk heatmap</CardTitle><p className="text-xs text-muted-foreground">Per-device intensity (simulated)</p></CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-4">
              {heat.map(d => {
                const intensity = d.riskScore;
                const bg = intensity > 70 ? "bg-destructive/80" : intensity > 50 ? "bg-chart-5/70" : intensity > 30 ? "bg-warning/70" : "bg-success/70";
                return (
                  <div key={d.id} className={`aspect-square rounded-md ${bg} p-2 text-[11px] text-white shadow-sm`}>
                    <div className="font-medium">{d.id}</div>
                    <div className="mt-auto pt-3 text-lg font-semibold">{d.riskScore}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-success/70" /> Low</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-warning/70" /> Medium</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-chart-5/70" /> High</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-destructive/80" /> Critical</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
