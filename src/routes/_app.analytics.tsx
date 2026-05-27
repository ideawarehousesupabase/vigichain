import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { complianceTrend, incidentTrend, riskDistribution, alertActivity, reportStats, devices } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/analytics")({
  head: () => ({ meta: [{ title: "Analytics · VigiChain MedSecure" }] }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const perf = devices.slice(0,6).map(d => ({ name: d.name.split(" ")[0], compliance: d.complianceScore, risk: d.riskScore }));
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Executive Analytics</h1>
        <p className="text-sm text-muted-foreground">Cross-fleet compliance and operational insights.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Incident trends</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={incidentTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Legend />
                <Bar dataKey="Low" stackId="a" fill="var(--color-success)" />
                <Bar dataKey="Medium" stackId="a" fill="var(--color-warning)" />
                <Bar dataKey="High" stackId="a" fill="var(--color-chart-5)" />
                <Bar dataKey="Critical" stackId="a" fill="var(--color-destructive)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Compliance performance</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={complianceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis domain={[60,100]} stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Line type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={2} dot={{ r:3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Device risk distribution</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={riskDistribution} dataKey="value" nameKey="name" outerRadius={90} label>
                  {riskDistribution.map((e,i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Monthly alert activity</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={alertActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="week" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Bar dataKey="alerts" fill="var(--color-chart-2)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Report generation</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={reportStats} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
                <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis dataKey="type" type="category" stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                <Bar dataKey="count" fill="var(--color-primary)" radius={[0,4,4,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2"><CardTitle className="text-base">Device performance</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={perf}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={11} />
                <PolarRadiusAxis stroke="var(--color-muted-foreground)" fontSize={10} />
                <Radar name="Compliance" dataKey="compliance" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
                <Radar name="Risk" dataKey="risk" stroke="var(--color-chart-5)" fill="var(--color-chart-5)" fillOpacity={0.2} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
