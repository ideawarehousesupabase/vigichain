import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { incidents as seed, devices, type Incident, type IncidentStatus } from "@/lib/mock-data";
import { SeverityBadge, StatusBadge } from "@/components/badges";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/incidents")({
  head: () => ({ meta: [{ title: "Incidents · VigiChain MedSecure" }] }),
  component: IncidentsPage,
});

function IncidentsPage() {
  const [list, setList] = useState<Incident[]>(seed);
  const [q, setQ] = useState("");
  const [sev, setSev] = useState("All");
  const [stat, setStat] = useState("All");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => list.filter(i =>
    (sev === "All" || i.severity === sev) &&
    (stat === "All" || i.status === stat) &&
    (i.id.toLowerCase().includes(q.toLowerCase()) || i.description.toLowerCase().includes(q.toLowerCase()) || i.deviceName.toLowerCase().includes(q.toLowerCase()))
  ), [list, q, sev, stat]);

  const cycle: Record<IncidentStatus, IncidentStatus> = { Open: "Investigating", Investigating: "Resolved", Resolved: "Open" };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Incidents & Complaints</h1>
          <p className="text-sm text-muted-foreground">Post-market vigilance record book.</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus className="mr-1.5 h-4 w-4" /> Log incident</Button></DialogTrigger>
          <NewIncidentDialog onSave={(i) => { setList([i, ...list]); setOpen(false); toast.success("Incident logged"); }} />
        </Dialog>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {(["Open","Investigating","Resolved"] as const).map(s => (
          <Card key={s} className="border-border/60"><CardContent className="p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{s}</div>
            <div className="mt-1 text-2xl font-semibold">{list.filter(i => i.status === s).length}</div>
          </CardContent></Card>
        ))}
        <Card className="border-border/60"><CardContent className="p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Critical (open)</div>
          <div className="mt-1 text-2xl font-semibold text-destructive">{list.filter(i => i.severity === "Critical" && i.status !== "Resolved").length}</div>
        </CardContent></Card>
      </div>

      <Card className="border-border/60">
        <CardContent className="p-4">
          <div className="mb-4 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search incidents…" className="pl-9" />
            </div>
            <Select value={sev} onValueChange={setSev}><SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>{["All","Low","Medium","High","Critical"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={stat} onValueChange={setStat}><SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>{["All","Open","Investigating","Resolved"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader><TableRow>
                <TableHead>Incident</TableHead><TableHead>Device</TableHead>
                <TableHead>Severity</TableHead><TableHead>Created</TableHead>
                <TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {filtered.map(i => (
                  <TableRow key={i.id} className="hover:bg-muted/40">
                    <TableCell>
                      <div className="font-medium">{i.id}</div>
                      <div className="line-clamp-1 text-xs text-muted-foreground">{i.description}</div>
                    </TableCell>
                    <TableCell className="text-sm">{i.deviceName}<div className="text-xs text-muted-foreground">{i.deviceId}</div></TableCell>
                    <TableCell><SeverityBadge severity={i.severity} /></TableCell>
                    <TableCell className="text-sm text-muted-foreground">{i.created}</TableCell>
                    <TableCell><StatusBadge status={i.status} /></TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => { setList(list.map(x => x.id === i.id ? { ...x, status: cycle[x.status] } : x)); toast.success(`Status → ${cycle[i.status]}`); }}>
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && <TableRow><TableCell colSpan={6} className="py-10 text-center text-muted-foreground">No incidents.</TableCell></TableRow>}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function NewIncidentDialog({ onSave }: { onSave: (i: Incident) => void }) {
  const [deviceId, setDeviceId] = useState(devices[0].id);
  const [severity, setSeverity] = useState<"Low"|"Medium"|"High"|"Critical">("Medium");
  const [description, setDescription] = useState("");
  const submit = () => {
    const dev = devices.find(d => d.id === deviceId)!;
    onSave({
      id: `INC-${2300 + Math.floor(Math.random()*700)}`,
      deviceId, deviceName: dev.name, severity, description: description || "Pending details",
      created: new Date().toISOString().slice(0,10), status: "Open",
    });
  };
  return (
    <DialogContent>
      <DialogHeader><DialogTitle>Log new incident</DialogTitle></DialogHeader>
      <div className="space-y-3">
        <div className="space-y-1.5"><Label className="text-xs">Device</Label>
          <Select value={deviceId} onValueChange={setDeviceId}><SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{devices.map(d => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5"><Label className="text-xs">Severity</Label>
          <Select value={severity} onValueChange={(v: any) => setSeverity(v)}><SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["Low","Medium","High","Critical"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5"><Label className="text-xs">Description</Label>
          <Textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe what happened, observed impact, reporting source…" />
        </div>
      </div>
      <DialogFooter><Button onClick={submit}>Log incident</Button></DialogFooter>
    </DialogContent>
  );
}
