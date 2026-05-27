const pdfText = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 1035 >>
stream
BT
/F1 26 Tf
72 720 Td
(AB TECH GLOBAL SERVICE) Tj
/F1 14 Tf
0 -34 Td
(Reliable Solutions. Exceptional Service.) Tj
0 -40 Td
(Location: Opp Federal Polytechnic Bida, Niger State, Nigeria) Tj
0 -24 Td
(Email: abtechglobalservice@gmail.com) Tj
0 -24 Td
(Website: abtechglobalservice.vercel.app) Tj
0 -24 Td
(WhatsApp: +2347062279160, +2349079354758) Tj
0 -42 Td
(Services:) Tj
0 -24 Td
(- Website Design and Portfolio Website Creation) Tj
0 -22 Td
(- Printing, DI Printing, Project Typing and Formatting) Tj
0 -22 Td
(- Online Registration, Internet Services and Documentation) Tj
0 -22 Td
(- Graphic Design, Branding, CV/Resume Design) Tj
0 -22 Td
(- Tech Consultation, Software Installation and Computer Services) Tj
0 -42 Td
(Mission:) Tj
0 -24 Td
(To deliver reliable, affordable, and excellent digital and technical services) Tj
0 -22 Td
(that help clients study, work, present, publish, and grow with confidence.) Tj
0 -42 Td
(Vision:) Tj
0 -24 Td
(To become a trusted Nigerian digital service brand known for premium design,) Tj
0 -22 Td
(dependable support, and modern technology workflows.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000241 00000 n 
0000001327 00000 n 
trailer
<< /Root 1 0 R /Size 6 >>
startxref
1397
%%EOF`;

export function GET() {
  return new Response(pdfText, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": 'attachment; filename="AB-TECH-GLOBAL-SERVICE-Company-Profile.pdf"'
    }
  });
}
