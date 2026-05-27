import { LockKeyhole, ShieldCheck } from "lucide-react";

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const next = params.next?.startsWith("/admin") ? params.next : "/admin";

  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--bg)] px-4 py-10 text-[color:var(--fg)]">
      <section className="glass w-full max-w-md rounded-3xl p-6 sm:p-8">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy shadow-gold">
          <LockKeyhole size={30} />
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Secure Admin</p>
          <h1 className="mt-3 text-3xl font-black">AB TECH Control Panel</h1>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
            Authorized administrators only. Sign in to manage requests, projects, payments, content, and service operations.
          </p>
        </div>
        <form action="/api/admin/login" method="post" className="mt-8 space-y-4">
          <input type="hidden" name="next" value={next} />
          <label className="block">
            <span className="text-sm font-bold text-[color:var(--muted)]">Admin email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="admin@example.com"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-[color:var(--muted)]">Password</span>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter password"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold"
            />
          </label>
          {params.error ? (
            <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200">
              {params.error}
            </p>
          ) : null}
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-navy shadow-gold">
            <ShieldCheck size={18} /> Sign in securely
          </button>
        </form>
      </section>
    </main>
  );
}
