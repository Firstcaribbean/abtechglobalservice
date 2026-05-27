import {
  BarChart3,
  Bell,
  CheckCircle2,
  Clock,
  CreditCard,
  FileArchive,
  FileText,
  Globe2,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  Palette,
  Search,
  Settings,
  ShieldCheck,
  Users
} from "lucide-react";

const requests = [
  {
    id: "ABT-MAY-001",
    client: "Aisha M.",
    service: "Project Typing & Formatting",
    priority: "High",
    status: "Files review",
    due: "Today"
  },
  {
    id: "ABT-MAY-002",
    client: "Daniel O.",
    service: "Branding & Letterhead",
    priority: "Normal",
    status: "Design preview",
    due: "Tomorrow"
  },
  {
    id: "ABT-MAY-003",
    client: "Ibrahim K.",
    service: "Portfolio Website",
    priority: "High",
    status: "Development",
    due: "May 30"
  },
  {
    id: "ABT-MAY-004",
    client: "Maryam S.",
    service: "Seminar Presentation",
    priority: "Normal",
    status: "Final review",
    due: "May 29"
  }
];

const pipeline = [
  ["New Request", "8", Inbox],
  ["In Progress", "12", Clock],
  ["Awaiting Client", "5", MessageCircle],
  ["Completed", "300+", CheckCircle2]
];

const serviceControls = [
  ["Website projects", "4 active", Globe2],
  ["Academic documents", "9 active", FileText],
  ["Brand designs", "3 active", Palette],
  ["Uploaded files", "18 files", FileArchive]
];

export default function AdminPage() {
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
            {[
              ["Dashboard", LayoutDashboard],
              ["Requests", Inbox],
              ["Clients", Users],
              ["Projects", BarChart3],
              ["Payments", CreditCard],
              ["Files", FileArchive],
              ["Website Content", Globe2],
              ["Settings", Settings]
            ].map(([label, Icon]) => (
              <a key={label as string} href={`#${String(label).toLowerCase().replaceAll(" ", "-")}`} className="flex items-center gap-3 rounded-2xl px-4 py-3 font-bold text-[color:var(--muted)] transition hover:bg-white/10 hover:text-[color:var(--fg)]">
                <Icon size={18} /> {label as string}
              </a>
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
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Operations Dashboard</h1>
              <p className="mt-2 text-[color:var(--muted)]">Manage requests, projects, clients, payments, files, and website content from one organized control center.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 font-bold">
                <Bell size={18} /> Alerts
              </button>
              <a href="https://wa.me/2347062279160" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 font-black text-navy">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </header>

          <section id="dashboard" className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pipeline.map(([label, value, Icon]) => (
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

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
            <section id="requests" className="glass overflow-hidden rounded-3xl">
              <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-black">Request Queue</h2>
                  <p className="text-sm text-[color:var(--muted)]">Track client requests from intake to delivery.</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <Search size={16} className="text-gold" />
                  <span className="text-sm font-bold text-[color:var(--muted)]">Search requests</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-white/5 text-xs uppercase tracking-widest text-[color:var(--muted)]">
                    <tr>
                      <th className="px-5 py-4">ID</th>
                      <th className="px-5 py-4">Client</th>
                      <th className="px-5 py-4">Service</th>
                      <th className="px-5 py-4">Priority</th>
                      <th className="px-5 py-4">Status</th>
                      <th className="px-5 py-4">Due</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {requests.map((request) => (
                      <tr key={request.id}>
                        <td className="px-5 py-4 font-black text-gold">{request.id}</td>
                        <td className="px-5 py-4 font-bold">{request.client}</td>
                        <td className="px-5 py-4 text-[color:var(--muted)]">{request.service}</td>
                        <td className="px-5 py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-black ${request.priority === "High" ? "bg-gold text-navy" : "bg-white/10 text-[color:var(--muted)]"}`}>{request.priority}</span>
                        </td>
                        <td className="px-5 py-4 font-bold">{request.status}</td>
                        <td className="px-5 py-4 text-[color:var(--muted)]">{request.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="payments" className="glass rounded-3xl p-5">
              <h2 className="text-2xl font-black">Payment Overview</h2>
              <div className="mt-5 space-y-4">
                {[
                  ["Pending invoices", "₦85,000"],
                  ["Confirmed payments", "₦420,000"],
                  ["Deposits this week", "₦120,000"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                    <p className="text-sm font-bold text-[color:var(--muted)]">{label}</p>
                    <p className="mt-2 text-2xl font-black">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section id="projects" className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceControls.map(([label, value, Icon]) => (
              <article key={label as string} className="glass rounded-3xl p-6">
                <Icon className="text-gold" />
                <h3 className="mt-5 text-xl font-black">{label as string}</h3>
                <p className="mt-2 text-[color:var(--muted)]">{value as string}</p>
              </article>
            ))}
          </section>

          <section id="website-content" className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              ["Portfolio Manager", "Add, update, categorize, and feature projects displayed on the public portfolio grid."],
              ["Blog Manager", "Prepare updates, tutorials, client guides, and service announcements."],
              ["Service Pricing", "Organize service packages, turnaround times, and internal payment notes."]
            ].map(([title, copy]) => (
              <article key={title} className="glass rounded-3xl p-6">
                <ShieldCheck className="text-gold" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[color:var(--muted)]">{copy}</p>
                <button className="mt-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-black">Manage</button>
              </article>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}
