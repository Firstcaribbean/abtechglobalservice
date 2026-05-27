import { NextRequest, NextResponse } from "next/server";

const serviceHints = [
  {
    keywords: ["website", "portfolio", "web", "landing"],
    answer:
      "For website or portfolio work, AB TECH can help with planning, design, development, mobile responsiveness, SEO setup, and deployment to Vercel."
  },
  {
    keywords: ["print", "printing", "di"],
    answer:
      "For printing and DI printing, prepare your document, quantity, preferred paper size, and deadline. You can submit the request form and continue on WhatsApp."
  },
  {
    keywords: ["project", "typing", "format", "seminar", "assignment"],
    answer:
      "For academic projects, typing, formatting, seminars, and assignments, send your chapters or outline, department format, deadline, and any supervisor instructions."
  },
  {
    keywords: ["cv", "resume"],
    answer:
      "For CV or resume design, share your education, work history, skills, contact details, and the role you are targeting."
  },
  {
    keywords: ["brand", "logo", "letterhead", "business"],
    answer:
      "For branding, AB TECH can prepare logos, letterheads, business cards, brand colors, and clean business identity documents."
  }
];

export async function POST(request: NextRequest) {
  const { message } = (await request.json()) as { message?: string };
  const cleanMessage = (message ?? "").toLowerCase();

  const match = serviceHints.find((hint) => hint.keywords.some((keyword) => cleanMessage.includes(keyword)));

  return NextResponse.json({
    answer:
      match?.answer ??
      "AB TECH GLOBAL SERVICE can help with web design, printing, online registration, documentation, branding, and computer services. Tell me the service, deadline, and files you have, then submit a request or chat on WhatsApp.",
    quickActions: ["Submit a request", "Chat on WhatsApp", "View portfolio"]
  });
}
