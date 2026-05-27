import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, FileBarChart, FileCheck, Download, Plus } from "lucide-react";
import { reports as seed, type ReportItem } from "@/lib/mock-data";
import { StatusBadge } from "@/components/badges";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({ meta: [{ title: "Reports · VigiChain MedSecure" }] }),
  component: ReportsPage,
});

function ReportsPage() {
  const [list, setList] = useState<ReportItem[]>(seed);
  const generate = (type: "PSUR" | "PMSR" | "CAPA") => {
    const r: ReportItem = {
      id: `RPT-${3400 + Math.floor(Math.random()*600)}`,
      type, device: "CardioPulse X3",
      generated: new Date().toISOString().slice(0,10),
      status: "Draft", author: "S. Patel",
    };
    setList([r, ...list]);
    toast.success(`${type} draft created`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Compliance Reports</h1>
        <p className="text-sm text-muted-foreground">PSUR · PMSR · CAPA · automated draft generation.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { type: "PSUR" as const, icon: FileText, label: "Periodic Safety Update Report", color: "from-primary/15 to-primary/5" },
          { type: "PMSR" as const, icon: FileBarChart, label: "Post-Market Surveillance Report", color: "from-info/15 to-info/5" },
          { type: "CAPA" as const, icon: FileCheck, label: "Corrective & Preventive Action", color: "from-success/15 to-success/5" },
        ].map(({ type, icon: Icon, label, color }) => (
          <Card key={type} className={`border-border/60 bg-gradient-to-br ${color}`}>
            <CardContent className="p-5">
              <div className="rounded-lg bg-background/60 p-2 w-fit"><Icon className="h-5 w-5 text-primary" /></div>
              <div className="mt-3 text-sm font-semibold">{type}</div>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              <Button size="sm" className="mt-4 w-full" onClick={() => generate(type)}><Plus className="mr-1.5 h-4 w-4" /> Generate {type}</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Latest report preview</CardTitle></CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/20 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">{list[0]?.id} · {list[0]?.type}</div>
                <div className="mt-1 text-lg font-semibold">CardioPulse X3 — Periodic Safety Update</div>
                <div className="text-xs text-muted-foreground">Reporting period: Q1 2026 · Generated {list[0]?.generated}</div>
              </div>
              <Button variant="outline" size="sm" onClick={() => toast.success("Export queued (mock)")}><Download className="mr-1.5 h-4 w-4" /> Export PDF</Button>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                { label: "Device units", value: "12,430" },
                { label: "Incidents (qtr)", value: "9" },
                { label: "Compliance", value: "94%" },
                { label: "Open CAPAs", value: "1" },
              ].map(s => <div key={s.label} className="rounded-md bg-background p-3"><div className="text-xs text-muted-foreground">{s.label}</div><div className="text-lg font-semibold">{s.value}</div></div>)}
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-md bg-background p-4"><div className="text-xs font-semibold uppercase text-muted-foreground">Risk analysis</div><p className="mt-2 text-sm">Low residual risk profile. Trend lines remain within tolerated variance. No new safety signals detected this period.</p></div>
              <div className="rounded-md bg-background p-4"><div className="text-xs font-semibold uppercase text-muted-foreground">Corrective actions</div><p className="mt-2 text-sm">Firmware v4.12 rollout completed across 98.4% of fleet. Calibration review scheduled for Q2.</p></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Report history</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Report</TableHead><TableHead>Type</TableHead><TableHead>Device</TableHead><TableHead>Generated</TableHead><TableHead>Author</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
            <TableBody>
              {list.map(r => (
                <TableRow key={r.id} className="hover:bg-muted/40">
                  <TableCell className="font-medium">{r.id}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>{r.device}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{r.generated}</TableCell>
                  <TableCell>{r.author}</TableCell>
                  <TableCell><StatusBadge status={r.status} /></TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="sm" onClick={() => toast.success("Export queued (mock)")}><Download className="mr-1.5 h-4 w-4" /> PDF</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
