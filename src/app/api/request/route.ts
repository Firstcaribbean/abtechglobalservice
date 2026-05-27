import { NextRequest, NextResponse } from "next/server";

type RequestPayload = {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  fileName?: string;
};

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  let payload: RequestPayload = {};

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const file = formData.get("file");
    payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      fileName: file instanceof File ? file.name : ""
    };
  } else {
    payload = await request.json();
  }

  if (!payload.name || !payload.phone || !payload.message) {
    return NextResponse.json({ error: "Name, WhatsApp number, and message are required." }, { status: 400 });
  }

  const trackingId = `ABT-${Date.now().toString(36).toUpperCase()}`;
  const whatsappText = encodeURIComponent(
    `Hello AB TECH GLOBAL SERVICE, I submitted request ${trackingId}.\n\nName: ${payload.name}\nService: ${payload.service ?? "General request"}\nMessage: ${payload.message}`
  );

  return NextResponse.json({
    ok: true,
    trackingId,
    status: "Request received",
    nextStep: "AB TECH will review the details and contact you on WhatsApp.",
    fileName: payload.fileName,
    whatsappUrl: `https://wa.me/2349079354758?text=${whatsappText}`
  });
}
