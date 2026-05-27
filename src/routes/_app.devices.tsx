import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Pencil, Trash2, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { devices as seed, type Device } from "@/lib/mock-data";
import { StatusBadge } from "@/components/badges";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/devices")({
  head: () => ({ meta: [{ title: "Devices · VigiChain MedSecure" }] }),
  component: DevicesPage,
});

function DevicesPage() {
  const [list, setList] = useState<Device[]>(seed);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Device | null>(null);

  const filtered = useMemo(() =>
    list.filter(d =>
      (status === "All" || d.status === status) &&
      (d.name.toLowerCase().includes(q.toLowerCase()) || d.manufacturer.toLowerCase().includes(q.toLowerCase()) || d.id.toLowerCase().includes(q.toLowerCase()))
    ), [list, q, status]);

  const save = (d: Device) => {
    if (editing) setList(list.map(x => x.id === d.id ? d : x));
    else setList([d, ...list]);
    setOpen(false); setEditing(null);
    toast.success(editing ? "Device updated" : "Device added");
  };

  const remove = (id: string) => {
    setList(list.filter(d => d.id !== id));
    toast.success("Device removed");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Device Management</h1>
          <p className="text-sm text-muted-foreground">Catalogue of registered medical devices.</p>
        </div>
        <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setEditing(null); }}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-1.5 h-4 w-4" /> Add device</Button>
          </DialogTrigger>
          <DeviceFormDialog editing={editing} onSave={save} />
        </Dialog>
      </div>

      <Card className="border-border/60">
        <CardContent className="p-4">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, ID, manufacturer…" className="pl-9" />
            </div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                {["All", "Active", "Under Review", "Recalled", "Decommissioned"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Cert</TableHead>
                  <TableHead>Manufacturer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(d => (
                  <TableRow key={d.id} className="hover:bg-muted/40">
                    <TableCell>
                      <div className="font-medium">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.id}</div>
                    </TableCell>
                    <TableCell>{d.category}</TableCell>
                    <TableCell><span className="rounded-md border px-2 py-0.5 text-xs font-medium">Class {d.riskClass}</span></TableCell>
                    <TableCell><StatusBadge status={d.certStatus} /></TableCell>
                    <TableCell>{d.manufacturer}</TableCell>
                    <TableCell><StatusBadge status={d.status} /></TableCell>
                    <TableCell className="text-muted-foreground text-sm">{d.updated}</TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex gap-1">
                        <Button asChild variant="ghost" size="icon"><Link to="/devices/$id" params={{ id: d.id }}><ExternalLink className="h-4 w-4" /></Link></Button>
                        <Button variant="ghost" size="icon" onClick={() => { setEditing(d); setOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => remove(d.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow><TableCell colSpan={8} className="py-10 text-center text-muted-foreground">No devices found.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DeviceFormDialog({ editing, onSave }: { editing: Device | null; onSave: (d: Device) => void }) {
  const [d, setD] = useState<Device>(editing || {
    id: `DEV-${1050 + Math.floor(Math.random() * 900)}`,
    name: "", category: "Diagnostic", riskClass: "IIa",
    certStatus: "UKCA", manufacturer: "", status: "Active",
    updated: new Date().toISOString().slice(0, 10), riskScore: 20, complianceScore: 90,
  });
  return (
    <DialogContent className="max-w-lg">
      <DialogHeader><DialogTitle>{editing ? "Edit device" : "Add device"}</DialogTitle></DialogHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Device name"><Input value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} /></Field>
        <Field label="Manufacturer"><Input value={d.manufacturer} onChange={(e) => setD({ ...d, manufacturer: e.target.value })} /></Field>
        <Field label="Category">
          <Select value={d.category} onValueChange={(v) => setD({ ...d, category: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["Cardiac Monitor","Infusion Pump","Imaging","Ventilator","Diagnostic","Dialysis","Implant"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field label="Risk class">
          <Select value={d.riskClass} onValueChange={(v: any) => setD({ ...d, riskClass: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["I","IIa","IIb","III"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field label="Certification">
          <Select value={d.certStatus} onValueChange={(v: any) => setD({ ...d, certStatus: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["UKCA","CE","Pending","Expired"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field label="Status">
          <Select value={d.status} onValueChange={(v: any) => setD({ ...d, status: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["Active","Under Review","Recalled","Decommissioned"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
      </div>
      <DialogFooter><Button onClick={() => onSave({ ...d, updated: new Date().toISOString().slice(0, 10) })}>{editing ? "Save changes" : "Add device"}</Button></DialogFooter>
    </DialogContent>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><Label className="text-xs">{label}</Label>{children}</div>;
}
