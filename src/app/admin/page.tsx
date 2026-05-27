"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  CheckCircle2,
  Clock,
  CreditCard,
  Eye,
  FileArchive,
  FileText,
  Filter,
  Globe2,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  Palette,
  Plus,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X
} from "lucide-react";

type AdminSection = "Dashboard" | "Requests" | "Clients" | "Projects" | "Payments" | "Files" | "Website Content" | "Settings";
type RequestStatus = "New request" | "Files review" | "Design preview" | "Development" | "Awaiting client" | "Final review" | "Completed";

type ClientRequest = {
  id: string;
  client: string;
  phone: string;
  service: string;
  priority: "High" | "Normal";
  status: RequestStatus;
  due: string;
  paid: string;
  notes: string;
};

const initialRequests: ClientRequest[] = [
  {
    id: "ABT-MAY-001",
    client: "Aisha M.",
    phone: "+2347000000001",
    service: "Project Typing & Formatting",
    priority: "High",
    status: "Files review",
    due: "Today",
    paid: "Deposit paid",
    notes: "Final year project formatting. Needs chapter four tables checked."
  },
  {
    id: "ABT-MAY-002",
    client: "Daniel O.",
    phone: "+2347000000002",
    service: "Branding & Letterhead",
    priority: "Normal",
    status: "Design preview",
    due: "Tomorrow",
    paid: "Pending balance",
    notes: "Blue and gold letterhead with official business details."
  },
  {
    id: "ABT-MAY-003",
    client: "Ibrahim K.",
    phone: "+2347000000003",
    service: "Portfolio Website",
    priority: "High",
    status: "Development",
    due: "May 30",
    paid: "Deposit paid",
    notes: "Needs premium landing page, contact section, and portfolio grid."
  },
  {
    id: "ABT-MAY-004",
    client: "Maryam S.",
    phone: "+2347000000004",
    service: "Seminar Presentation",
    priority: "Normal",
    status: "Final review",
    due: "May 29",
    paid: "Paid",
    notes: "Malnutrition seminar deck. Final spell check before delivery."
  }
];

const sections: Array<[AdminSection, typeof LayoutDashboard]> = [
  ["Dashboard", LayoutDashboard],
  ["Requests", Inbox],
  ["Clients", Users],
  ["Projects", BarChart3],
  ["Payments", CreditCard],
  ["Files", FileArchive],
  ["Website Content", Globe2],
  ["Settings", Settings]
];

const statusOptions: RequestStatus[] = ["New request", "Files review", "Design preview", "Development", "Awaiting client", "Final review", "Completed"];

const contentManagers = [
  ["Portfolio Manager", "Add, update, categorize, and feature projects displayed on the public portfolio grid."],
  ["Blog Manager", "Prepare updates, tutorials, client guides, and service announcements."],
  ["Service Pricing", "Organize service packages, turnaround times, and internal payment notes."]
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("Dashboard");
  const [requests, setRequests] = useState(initialRequests);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | RequestStatus>("All");
  const [selectedRequest, setSelectedRequest] = useState<ClientRequest | null>(null);
  const [managerPanel, setManagerPanel] = useState<string | null>(null);
  const [notice, setNotice] = useState("Admin dashboard ready. No urgent system alerts.");
  const [draftTitle, setDraftTitle] = useState("");

  const filteredRequests = useMemo(() => {
    const term = query.trim().toLowerCase();
    return requests.filter((request) => {
      const matchesStatus = statusFilter === "All" || request.status === statusFilter;
      const matchesTerm =
        !term ||
        request.id.toLowerCase().includes(term) ||
        request.client.toLowerCase().includes(term) ||
        request.service.toLowerCase().includes(term) ||
        request.phone.toLowerCase().includes(term);
      return matchesStatus && matchesTerm;
    });
  }, [query, requests, statusFilter]);

  const stats = useMemo(
    () => [
      ["New Request", requests.filter((request) => request.status === "New request").length.toString(), Inbox],
      ["In Progress", requests.filter((request) => request.status !== "Completed").length.toString(), Clock],
      ["Awaiting Client", requests.filter((request) => request.status === "Awaiting client").length.toString(), MessageCircle],
      ["Completed", requests.filter((request) => request.status === "Completed").length.toString(), CheckCircle2]
    ],
    [requests]
  );

  function updateRequestStatus(id: string, status: RequestStatus) {
    setRequests((current) => current.map((request) => (request.id === id ? { ...request, status } : request)));
    setSelectedRequest((request) => (request?.id === id ? { ...request, status } : request));
    setNotice(`${id} moved to "${status}".`);
  }

  function addQuickRequest() {
    const nextNumber = String(requests.length + 1).padStart(3, "0");
    const newRequest: ClientRequest = {
      id: `ABT-MAY-${nextNumber}`,
      client: "New Client",
      phone: "+234",
      service: "General Service",
      priority: "Normal",
      status: "New request",
      due: "Unscheduled",
      paid: "Not paid",
      notes: "New request created from the admin dashboard."
    };
    setRequests((current) => [newRequest, ...current]);
    setSelectedRequest(newRequest);
    setActiveSection("Requests");
    setNotice(`${newRequest.id} created.`);
  }

  function saveManagerDraft() {
    const label = draftTitle.trim() || "Untitled update";
    setNotice(`${managerPanel ?? "Content"} saved: ${label}.`);
    setDraftTitle("");
    setManagerPanel(null);
  }

  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-black/20 p-5 backdrop-blur lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-royal to-gold font-black text-white">AB</span>
            <div>
              <p className="font-black">AB TECH</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">Admin Panel</p>
            </div>
          </div>
          <nav className="mt-8 space-y-2">
            {sections.map(([label, Icon]) => (
              <button
                key={label}
                onClick={() => setActiveSection(label)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-bold transition ${
                  activeSection === label ? "bg-gold text-navy shadow-gold" : "text-[color:var(--muted)] hover:bg-white/10 hover:text-[color:var(--fg)]"
                }`}
              >
                <Icon size={18} /> {label}
              </button>
            ))}
          </nav>
          <form action="/api/admin/logout" method="post" className="mt-8">
            <button className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 font-black transition hover:border-gold">
              Logout
            </button>
          </form>
        </aside>

        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <header className="glass flex flex-col gap-4 rounded-3xl p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Secure Workspace</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">{activeSection}</h1>
              <p className="mt-2 text-[color:var(--muted)]">{notice}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setNotice("Alerts checked. No failed requests or payment warnings.")} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 font-bold">
                <Bell size={18} /> Alerts
              </button>
              <button onClick={addQuickRequest} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 font-bold">
                <Plus size={18} /> New Request
              </button>
              <a href="https://wa.me/2347062279160" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 font-black text-navy">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </header>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(([label, value, Icon]) => (
              <article key={label as string} className="glass rounded-3xl p-6">
                <div className="flex items-start justify-between">
                  <Icon className="text-gold" />
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-[color:var(--muted)]">Live</span>
                </div>
                <p className="mt-6 text-4xl font-black">{value as string}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-[color:var(--muted)]">{label as string}</p>
              </article>
            ))}
          </section>

          {(activeSection === "Dashboard" || activeSection === "Requests" || activeSection === "Clients" || activeSection === "Projects") && (
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
              <section className="glass overflow-hidden rounded-3xl">
                <div className="flex flex-col gap-4 border-b border-white/10 p-5 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <h2 className="text-2xl font-black">Request Queue</h2>
                    <p className="text-sm text-[color:var(--muted)]">Search, filter, inspect, and update client work.</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                      <Search size={16} className="text-gold" />
                      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search requests" className="w-44 bg-transparent text-sm font-bold outline-none placeholder:text-[color:var(--muted)]" />
                    </label>
                    <label className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                      <Filter size={16} className="text-gold" />
                      <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "All" | RequestStatus)} className="bg-transparent text-sm font-bold outline-none">
                        <option>All</option>
                        {statusOptions.map((status) => (
                          <option key={status}>{status}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[920px] text-left">
                    <thead className="bg-white/5 text-xs uppercase tracking-widest text-[color:var(--muted)]">
                      <tr>
                        <th className="px-5 py-4">ID</th>
                        <th className="px-5 py-4">Client</th>
                        <th className="px-5 py-4">Service</th>
                        <th className="px-5 py-4">Priority</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4">Due</th>
                        <th className="px-5 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {filteredRequests.map((request) => (
                        <tr key={request.id}>
                          <td className="px-5 py-4 font-black text-gold">{request.id}</td>
                          <td className="px-5 py-4 font-bold">{request.client}</td>
                          <td className="px-5 py-4 text-[color:var(--muted)]">{request.service}</td>
                          <td className="px-5 py-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-black ${request.priority === "High" ? "bg-gold text-navy" : "bg-white/10 text-[color:var(--muted)]"}`}>{request.priority}</span>
                          </td>
                          <td className="px-5 py-4">
                            <select value={request.status} onChange={(event) => updateRequestStatus(request.id, event.target.value as RequestStatus)} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold outline-none">
                              {statusOptions.map((status) => (
                                <option key={status}>{status}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-5 py-4 text-[color:var(--muted)]">{request.due}</td>
                          <td className="px-5 py-4">
                            <button onClick={() => setSelectedRequest(request)} className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-black text-navy">
                              <Eye size={15} /> View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredRequests.length === 0 ? <p className="p-6 text-center font-bold text-[color:var(--muted)]">No request matches the current search.</p> : null}
              </section>

              <section className="glass rounded-3xl p-5">
                <h2 className="text-2xl font-black">Payment Overview</h2>
                <div className="mt-5 space-y-4">
                  {[
                    ["Pending invoices", "NGN 85,000"],
                    ["Confirmed payments", "NGN 420,000"],
                    ["Deposits this week", "NGN 120,000"]
                  ].map(([label, value]) => (
                    <button key={label} onClick={() => setNotice(`${label}: ${value}`)} className="block w-full rounded-2xl border border-white/15 bg-white/8 p-4 text-left transition hover:border-gold">
                      <p className="text-sm font-bold text-[color:var(--muted)]">{label}</p>
                      <p className="mt-2 text-2xl font-black">{value}</p>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          )}

          {(activeSection === "Dashboard" || activeSection === "Projects" || activeSection === "Files") && (
            <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Website projects", "4 active", Globe2],
                ["Academic documents", "9 active", FileText],
                ["Brand designs", "3 active", Palette],
                ["Uploaded files", "18 files", FileArchive]
              ].map(([label, value, Icon]) => (
                <button key={label as string} onClick={() => setNotice(`${label as string}: ${value as string}`)} className="glass rounded-3xl p-6 text-left transition hover:border-gold">
                  <Icon className="text-gold" />
                  <h3 className="mt-5 text-xl font-black">{label as string}</h3>
                  <p className="mt-2 text-[color:var(--muted)]">{value as string}</p>
                </button>
              ))}
            </section>
          )}

          {(activeSection === "Dashboard" || activeSection === "Website Content" || activeSection === "Settings") && (
            <section className="mt-6 grid gap-6 lg:grid-cols-3">
              {contentManagers.map(([title, copy]) => (
                <article key={title} className="glass rounded-3xl p-6">
                  <ShieldCheck className="text-gold" />
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">{copy}</p>
                  <button onClick={() => setManagerPanel(title)} className="mt-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-black transition hover:border-gold">
                    Manage
                  </button>
                </article>
              ))}
            </section>
          )}
        </section>
      </div>

      {selectedRequest ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-md">
          <section className="glass w-full max-w-xl rounded-3xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{selectedRequest.id}</p>
                <h2 className="mt-2 text-3xl font-black">{selectedRequest.client}</h2>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10" aria-label="Close request details">
                <X size={18} />
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Info label="Phone" value={selectedRequest.phone} />
              <Info label="Service" value={selectedRequest.service} />
              <Info label="Payment" value={selectedRequest.paid} />
              <Info label="Due" value={selectedRequest.due} />
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[color:var(--muted)]">Update status</span>
              <select value={selectedRequest.status} onChange={(event) => updateRequestStatus(selectedRequest.id, event.target.value as RequestStatus)} className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold outline-none">
                {statusOptions.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </label>
            <div className="mt-5 rounded-2xl border border-white/15 bg-white/8 p-4">
              <p className="text-sm font-bold text-[color:var(--muted)]">Notes</p>
              <p className="mt-2 leading-7">{selectedRequest.notes}</p>
            </div>
            <a href={`https://wa.me/${selectedRequest.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-black text-white">
              Contact client <MessageCircle size={18} />
            </a>
          </section>
        </div>
      ) : null}

      {managerPanel ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-md">
          <section className="glass w-full max-w-lg rounded-3xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Content Tool</p>
                <h2 className="mt-2 text-3xl font-black">{managerPanel}</h2>
              </div>
              <button onClick={() => setManagerPanel(null)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10" aria-label="Close manager">
                <X size={18} />
              </button>
            </div>
            <label className="mt-6 block">
              <span className="text-sm font-bold text-[color:var(--muted)]">Title or item name</span>
              <input value={draftTitle} onChange={(event) => setDraftTitle(event.target.value)} placeholder="Enter update title" className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
            </label>
            <textarea placeholder="Internal description or content notes" rows={5} className="mt-4 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
            <button onClick={saveManagerDraft} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-black text-navy">
              <Save size={18} /> Save update
            </button>
          </section>
        </div>
      ) : null}
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/8 p-4">
      <p className="text-sm font-bold text-[color:var(--muted)]">{label}</p>
      <p className="mt-2 font-black">{value}</p>
    </div>
  );
}
