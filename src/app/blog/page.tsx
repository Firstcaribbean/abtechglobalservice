import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Palette } from "lucide-react";

const posts = [
  {
    title: "How to prepare project chapters for professional formatting",
    icon: FileText,
    date: "May 2026",
    summary:
      "Arrange chapters, references, tables, figures, appendices, and supervisor instructions before submission to reduce corrections and speed up delivery."
  },
  {
    title: "Why every small business needs a professional letterhead",
    icon: Palette,
    date: "May 2026",
    summary:
      "A clean letterhead improves trust, makes quotations and proposals look official, and gives your brand a consistent document identity."
  },
  {
    title: "Choosing the right portfolio website style for your brand",
    icon: BookOpen,
    date: "May 2026",
    summary:
      "Students, creators, consultants, and businesses need different layouts. The best portfolio makes your work easy to understand and quick to contact."
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] px-4 py-10 text-[color:var(--fg)]">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-bold">
          <ArrowLeft size={18} /> Back home
        </Link>
        <div className="mt-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">AB TECH Blog</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Updates, tutorials, and client guides.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Practical articles for students, businesses, and professionals using AB TECH GLOBAL SERVICE for digital and technical work.
          </p>
        </div>
        <div className="mt-10 grid gap-5">
          {posts.map(({ title, icon: Icon, date, summary }) => (
            <article key={title} className="glass rounded-3xl p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-royal/20 text-gold">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-bold text-gold">{date}</p>
                  <h2 className="mt-2 text-2xl font-black">{title}</h2>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">{summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
