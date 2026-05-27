import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, CreditCard, FileText, Users } from "lucide-react";

const requests = [
  ["ABT-MAY-001", "Portfolio Website", "Design preview", "In progress"],
  ["ABT-MAY-002", "Project Formatting", "Final review", "Ready"],
  ["ABT-MAY-003", "Brand Letterhead", "Invoice pending", "Awaiting payment"]
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] px-4 py-10 text-[color:var(--fg)]">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-bold">
          <ArrowLeft size={18} /> Back home
        </Link>
        <div className="mt-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Admin Dashboard</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Client work control center.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              A functional dashboard concept for requests, project status, payments, files, and support follow-up.
            </p>
          </div>
          <a href="https://wa.me/2347062279160" className="rounded-full bg-gold px-6 py-3 font-black text-navy">
            Open WhatsApp
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ["Active Requests", "12", FileText],
            ["Clients", "120+", Users],
            ["Pending Payments", "3", CreditCard],
            ["Completed", "300+", CheckCircle2]
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="glass rounded-3xl p-6">
              <Icon className="text-gold" />
              <p className="mt-5 text-3xl font-black">{value as string}</p>
              <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--muted)]">{label as string}</p>
            </div>
          ))}
        </div>
        <section className="glass mt-6 overflow-hidden rounded-3xl">
          <div className="border-b border-white/10 p-6">
            <h2 className="text-2xl font-black">Recent Project Tracker</h2>
          </div>
          <div className="divide-y divide-white/10">
            {requests.map(([id, service, milestone, status]) => (
              <div key={id} className="grid gap-3 p-5 md:grid-cols-4 md:items-center">
                <p className="font-black text-gold">{id}</p>
                <p className="font-bold">{service}</p>
                <p className="text-[color:var(--muted)]">{milestone}</p>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-bold">
                  <Clock size={14} /> {status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
