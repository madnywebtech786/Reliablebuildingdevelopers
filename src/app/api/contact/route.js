import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // disable Next’s JSON parser
  },
};

export async function POST(request) {
  try {
    // Parse multipart/form-data
    const formData = await request.formData();

    const name = (formData.get("name")?.toString() || "").trim();
    const email = (formData.get("email")?.toString() || "").trim();
    const message = (formData.get("message")?.toString() || "").trim();

    // Accept files from either 'attachments' (multiple) or 'attachment' (single)
    const filesFromAttachments = formData.getAll("attachments") || [];
    const filesFromAttachment = formData.getAll("attachment") || [];
    const incomingFiles = [...filesFromAttachments, ...filesFromAttachment];

    const attachments = [];
    for (const file of incomingFiles) {
      // ensure this is a File-like object
      if (file && typeof file.arrayBuffer === "function" && file.size) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name || "attachment",
          content: buffer,
          contentType: file.type || "application/octet-stream",
        });
      }
    }

    // === Embed logo from public/images/logo.png as inline attachment (cid) ===
    // Ensure your logo file is at: <project-root>/public/images/logo.png
    const logoCid = "logo@cid";
    try {
      const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
      if (fs.existsSync(logoPath)) {
        const logoBuffer = fs.readFileSync(logoPath);
        // add as first attachment so nodemailer includes it
        attachments.unshift({
          filename: "logo.png",
          content: logoBuffer,
          cid: logoCid,
          contentType: "image/png",
        });
      } else {
        // If file missing, we continue without it (no throw)
        console.warn("Logo not found at", logoPath);
      }
    } catch (err) {
      console.warn("Error loading logo file:", err);
    }

    // Build attachments list HTML (if any)
    const attachmentsListHtml = attachments.length
      ? `<div style="margin-top:10px"><strong style="color:#11305e">Attachments (${
          attachments.length - (attachments[0]?.cid === logoCid ? 1 : 0)
        })</strong>
           <ul style="margin:6px 0 0 18px; padding:0; color:#233b75">
             ${attachments
               .filter((a) => a.cid !== logoCid) // don't list the inline logo
               .map(
                 (a) =>
                   `<li style="margin-bottom:6px; font-size:14px;">${escapeHtml(
                     a.filename
                   )}</li>`
               )
               .join("")}
           </ul>
         </div>`
      : `<p style="margin:8px 0 0;color:#666;font-size:14px">No attachments provided.</p>`;

    // Modern HTML email template (uses your colors) and embeds the logo via cid
    const primary = "#1471ba"; // --color-primary
    const secondary = "#11305e"; // --color-secondary

    const html = `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style>
          :root{
            --color-primary: ${primary};
            --color-secondary: ${secondary};
          }
          body{ margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:#f4f7fb; color:#0b2038; -webkit-font-smoothing:antialiased;}
          .wrap{ max-width:720px;margin:28px auto;padding:0 18px; }
          .card{ background:white;border-radius:12px;overflow:hidden;box-shadow: 0 10px 30px rgba(16,24,40,0.08); }
          .hero{ display:flex; align-items:center; gap:16px; padding:20px 22px; background:linear-gradient(90deg,var(--color-primary),var(--color-secondary)); color:#fff; }
          .logo-img{ width:100%;height:250px;border-radius:10px;background:rgba(255,255,255,0.12); display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px; }
          .hero h1{ margin:0;font-size:18px; letter-spacing:0.2px; }
          .body{ padding:22px; display:grid; grid-template-columns: 1fr; gap:18px; }
          .meta{ display:flex;flex-wrap:wrap; gap:10px; align-items:center; }
          .pill{ background:#f1f6fc;border-radius:999px;padding:8px 12px;font-size:13px;color:var(--color-secondary); border:1px solid rgba(17,48,94,0.06); }
          .section-title{ font-weight:700;color:var(--color-secondary); margin:0 0 6px 0; font-size:13px; }
          .message-box{ background:#fbfdff;border:1px solid rgba(17,48,94,0.04); padding:14px; border-radius:8px; color:#0b2038; font-size:15px; line-height:1.5; }
          .attachments{ margin-top:6px; }
          .message-col{margin-top:6px;}
          .footer{ padding:14px 22px; background:#fff; border-top:1px solid rgba(17,48,94,0.03); font-size:13px; color:#6b7b90; }
          @media (min-width:720px){
            .body{ grid-template-columns: 1fr 1fr; gap:22px; }
            .message-col{ grid-column: 1 / span 2; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <div class="hero">
              ${
                // if logo embedded, display it via cid; else fallback to star glyph
                attachments.length && attachments[0]?.cid === logoCid
                  ? `<img src="cid:${logoCid}" alt="logo" class="logo-img" />`
                  : `<div class="logo-img">✦</div>`
              }
              <div>
                <h1>New contact submission</h1>
                <div style="opacity:0.92;font-size:13px;margin-top:4px">A message received from your website contact form</div>
              </div>
            </div>

            <div class="body">
              <div>
                <div class="section-title">From</div>
                <div style="margin-top:8px">
                  <div class="pill">Name: ${escapeHtml(name || "—")}</div>
                </div>
                <div style="margin-top:8px">
                  <div class="pill">Email: ${escapeHtml(email || "—")}</div>
                </div>
              </div>

              <div class="message-col">
                <div class="section-title">Message</div>
                <div class="message-box" style="margin-top:8px">${nl2br(
                  escapeHtml(message || "—")
                )}</div>
              </div>
                              ${attachmentsListHtml}

            </div>

            <div class="footer">
              Received via website contact form — <span style="color:${secondary}; font-weight:600">please review</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Nodemailer transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "fahadjawad596@gmail.com",
      subject: `New contact from ${name || "website visitor"}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

// helpers
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function nl2br(str) {
  return String(str).replace(/\n/g, "<br/>");
}
