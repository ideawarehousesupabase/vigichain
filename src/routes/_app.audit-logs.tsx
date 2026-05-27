import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, ShieldCheck, Link2 } from "lucide-react";
import { auditLog } from "@/lib/mock-data";
import { StatusBadge } from "@/components/badges";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/_app/audit-logs")({
  head: () => ({ meta: [{ title: "Audit Logs · VigiChain MedSecure" }] }),
  component: AuditLogsPage,
});

function AuditLogsPage() {
  const [q, setQ] = useState("");
  const rows = useMemo(() => auditLog.filter(a =>
    a.user.toLowerCase().includes(q.toLowerCase()) ||
    a.action.toLowerCase().includes(q.toLowerCase()) ||
    a.device.toLowerCase().includes(q.toLowerCase())
  ), [q]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Audit Logs</h1>
          <p className="text-sm text-muted-foreground">Tamper-evident compliance event ledger.</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border bg-success/10 px-3 py-2 text-sm text-success">
          <ShieldCheck className="h-4 w-4" /> Chain integrity verified · {auditLog.length} entries
        </div>
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-2"><CardTitle className="text-base">Ledger</CardTitle></CardHeader>
        <CardContent>
          <div className="relative mb-4 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search user, action, device…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader><TableRow>
                <TableHead>Timestamp</TableHead><TableHead>User</TableHead>
                <TableHead>Action</TableHead><TableHead>Device</TableHead>
                <TableHead>Status</TableHead><TableHead>Hash</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map(a => (
                  <TableRow key={a.id} className="hover:bg-muted/40">
                    <TableCell className="font-mono text-xs">{a.timestamp}</TableCell>
                    <TableCell className="text-sm">{a.user}</TableCell>
                    <TableCell className="text-sm font-medium">{a.action}</TableCell>
                    <TableCell className="text-sm">{a.device}</TableCell>
                    <TableCell><StatusBadge status={a.status} /></TableCell>
                    <TableCell><span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"><Link2 className="h-3 w-3" />{a.hash}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
