import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity, AlertTriangle, Cpu, FileText, ShieldCheck, TrendingUp, Plus, FileBarChart,
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, Legend, PieChart, Pie, Cell,
} from "recharts";
import { complianceTrend, incidentTrend, riskDistribution, devices, alerts, incidents } from "@/lib/mock-data";
import { SeverityBadge } from "@/components/badges";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · VigiChain MedSecure" }] }),
  component: Dashboard,
});

function StatCard({ icon: Icon, label, value, delta, tone }: any) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">{value}</div>
            {delta && <div className={`mt-1 text-xs ${tone === "down" ? "text-success" : tone === "up" ? "text-destructive" : "text-muted-foreground"}`}>{delta}</div>}
          </div>
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary"><Icon className="h-5 w-5" /></div>
        </div>
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  const openIncidents = incidents.filter(i => i.status !== "Resolved").length;
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Compliance Overview</h1>
          <p className="text-sm text-muted-foreground">Live PMS posture across your device fleet · MHRA SI 2024/1368</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Plus className="mr-1.5 h-4 w-4" /> Add device</Button>
          <Button size="sm"><FileBarChart className="mr-1.5 h-4 w-4" /> Generate PSUR</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard icon={ShieldCheck} label="Compliance score" value="91%" delta="+3% vs last quarter" tone="down" />
        <StatCard icon={Cpu} label="Total devices" value={devices.length} delta={`${devices.filter(d=>d.status==="Active").length} active`} />
        <StatCard icon={AlertTriangle} label="Active alerts" value={alerts.length} delta="2 critical" tone="up" />
        <StatCard icon={Activity} label="Open incidents" value={openIncidents} delta="1 high severity" tone="up" />
        <StatCard icon={FileText} label="Pending reports" value="4" delta="Due within 7 days" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Compliance trend</CardTitle>
                <p className="text-xs text-muted-foreground">Last 6 months</p>
              </div>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={complianceTrend}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis domain={[60, 100]} stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Area type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Risk distribution</CardTitle><p className="text-xs text-muted-foreground">By device risk score</p></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={riskDistribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                  {riskDistribution.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Incident severity over time</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={incidentTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Legend />
                <Bar dataKey="Low" stackId="a" fill="var(--color-success)" radius={[0,0,0,0]} />
                <Bar dataKey="Medium" stackId="a" fill="var(--color-warning)" />
                <Bar dataKey="High" stackId="a" fill="var(--color-chart-5)" />
                <Bar dataKey="Critical" stackId="a" fill="var(--color-destructive)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Device fleet health</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {devices.slice(0, 5).map(d => (
              <div key={d.id}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium">{d.name}</span>
                  <span className="text-muted-foreground">{d.complianceScore}%</span>
                </div>
                <Progress value={d.complianceScore} className="h-1.5" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Recent activity</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { user: "S. Patel", action: "generated PSUR for CardioPulse X3", time: "2h ago" },
              { user: "System", action: "raised critical alert on PaceLink S5", time: "5h ago" },
              { user: "J. Okafor", action: "updated incident INC-2202", time: "1d ago" },
              { user: "M. Lee", action: "added device ThermoView T1", time: "1d ago" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border bg-muted/30 p-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1 text-sm"><span className="font-medium">{a.user}</span> <span className="text-muted-foreground">{a.action}</span></div>
                <div className="text-xs text-muted-foreground">{a.time}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Active risk alerts</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {alerts.slice(0, 4).map(a => (
              <div key={a.id} className="flex items-start gap-3 rounded-lg border bg-muted/30 p-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-warning" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{a.title}</span>
                    <SeverityBadge severity={a.severity} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{a.detail}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
