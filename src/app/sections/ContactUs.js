"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Paperclip,
  X,
  Facebook,
} from "lucide-react";

// Calgary Renovation Contact Section  Optimized for Local SEO & Conversions
// Tailwind-only styling. Drop this component into a Next.js `app` or `pages` route.

export default function ModernContactCreative() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // now supports multiple attachments
  const [attachments, setAttachments] = useState([]); // Array<File>
  const [previews, setPreviews] = useState([]); // Array<{id, url?, name, size, type}>
  const [attachmentError, setAttachmentError] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const fileRef = useRef(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const MAX_FILES = 5; // adjust as needed
  const ALLOWED_PREFIXES = ["image/", "application/pdf"];

  const contactCards = [
    {
      id: "email",
      title: "Email",
      value: "hello@yourcompany.com",
      href: "mailto:hello@yourcompany.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      id: "phone",
      title: "Phone",
      value: "(123) 456-7890",
      href: "tel:(123) 456-7890",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      id: "address",
      title: "Address",
      value: "Calgary, Canada",
      href: "#",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  const socials = [
    { id: "facebook", href: "#", icon: <Facebook className="w-5 h-5" /> },
    { id: "twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { id: "instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
  ];

  // build previews for new attachments and clean up old object URLs
  useEffect(() => {
    // revoke previous urls
    previews.forEach((p) => {
      if (p.url) URL.revokeObjectURL(p.url);
    });

    const nextPreviews = attachments.map((f, idx) => {
      const isImage = f.type.startsWith("image/");
      return {
        id: `${f.name}-${f.size}-${idx}`,
        url: isImage ? URL.createObjectURL(f) : null,
        name: f.name,
        size: f.size,
        type: f.type,
      };
    });

    setPreviews(nextPreviews);

    // cleanup on unmount
    return () => {
      nextPreviews.forEach((p) => {
        if (p.url) URL.revokeObjectURL(p.url);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attachments]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function addFilesFromList(fileList) {
    if (!fileList || !fileList.length) return;

    const incoming = Array.from(fileList);

    // enforce file count limit
    if (attachments.length + incoming.length > MAX_FILES) {
      setAttachmentError(`You can upload up to ${MAX_FILES} files.`);
      return;
    }

    // validate each incoming file
    for (const f of incoming) {
      const okType = ALLOWED_PREFIXES.some((p) => f.type.startsWith(p));
      if (!okType) {
        setAttachmentError("Only images and PDFs are allowed.");
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setAttachmentError("Each file must be 10MB or smaller.");
        return;
      }
    }

    setAttachmentError("");
    setAttachments((prev) => [...prev, ...incoming]);
  }

  function handleFile(e) {
    const fileList = e.target.files;
    addFilesFromList(fileList);
    // keep click from re-opening after choose
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleDrop(e) {
    e.preventDefault();
    const fileList = e.dataTransfer?.files ?? null;
    addFilesFromList(fileList);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function removeAttachment(index) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);

      // append each file as 'attachments' (server reads formData.getAll('attachments'))
      attachments.forEach((f) => {
        fd.append("attachments", f, f.name);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const err = await res.text().catch(() => null);
        console.error("Server error:", err);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setAttachments([]);
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  // small helper to display sizes nicely
  function fmtSize(bytes) {
    if (!bytes) return "";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-32 bg-primary/5">
      {/* Decorative SVG accents */}
      <div className="relative">
        <svg
          className="absolute -top-16 -left-10 w-72 h-72 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="60" fill="url(#g1)" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* left art + info */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-white/60 to-white/20 border border-white/8 rounded-3xl p-6 md:p-8 overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                <span>✦</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Free Calgary Renovation Quote  No Obligation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get a clear, fixed-price estimate with timeline  designed for Alberta homes and your budget.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-white/6 border border-white/6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/10">{c.icon}</div>
                    <div>
                      <div className="text-xs font-semibold">{c.title}</div>
                      <a href={c.href} className="text-sm font-medium block mt-1 hover:underline">
                        {c.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Our Calgary Projects</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.id} href={s.href} className="p-3 rounded-lg bg-white/8 flex items-center justify-center">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* right form panel - unique clipped shape */}
          <div className="lg:col-span-7 relative z-40">
            <div className="absolute z-10 -left-6 top-6 w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-400 opacity-12"></div>
            <div className="relative z-50 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/4 to-white/6 border border-white/6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase text-primary/90">Start Your Reno</div>
                  <h3 className="text-2xl font-bold">Tell Us About Your Project</h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={`border px-3 py-2 rounded-lg ${errors.name ? "border-red-400" : "border-primary"} bg-transparent w-full`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`border border-primary px-3 py-2 rounded-lg ${errors.email ? "border-red-400" : "border-primary"} bg-transparent w-full`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="E.g., ‘Basement reno with legal suite in McKenzie Towne  budget $60K’"
                    className={`border px-3 py-2 rounded-lg ${errors.message ? "border-red-400" : "border-primary"} bg-transparent w-full`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
                </div>

                {/* File Upload (multiple) */}
                <div className="mb-6">
                  <div
                    onClick={() => fileRef.current && fileRef.current.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className={`relative rounded-xl border-2 border-dashed p-5 cursor-pointer ${attachments.length ? "border-primary bg-primary/5" : "border-primary hover:border-primary/30 hover:bg-gray-50"}`}
                  >
                    {/* keep the drop area simple  previews are shown under this input now */}
                    <div className="text-center py-2">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <Paperclip className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-gray-600 text-sm">
                          <span className="font-medium text-primary">Upload floor plans</span> or inspiration pics
                        </p>
                        <p className="text-gray-400 text-xs mt-1">JPG, PNG, PDF up to 10MB (max {MAX_FILES})</p>
                      </div>
                    </div>

                    <input ref={fileRef} type="file" onChange={handleFile} className="hidden" accept="image/*,application/pdf" multiple />
                  </div>

                  {/* attachment error shown under the file input (as requested) */}
                  {attachmentError && <p className="text-red-500 text-xs mt-2">{attachmentError}</p>}
                </div>

                {/* PREVIEWS: show the selected file previews BELOW the original file input */}
                {previews.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {previews.map((p, idx) => (
                      <div key={p.id} className="flex items-center justify-between bg-primary/5 rounded-md p-3 border border-primary/6">
                        <div className="flex items-center gap-3">
                          {p.url ? (
                            <img src={p.url} alt={p.name} className="w-12 h-12 object-cover rounded-md" />
                          ) : (
                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/6 text-xs">{p.name.slice(0, 2).toUpperCase()}</div>
                          )}
                          <div className="min-w-0">
                            <div className="text-sm truncate max-w-xs">{p.name}</div>
                            <div className="text-xs text-muted-foreground">{fmtSize(p.size)}</div>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(idx)}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl px-5 py-2 font-semibold bg-primary text-white shadow">
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Sending..." : "Get Free Quote"}
                  </button>
                </div>

                {status === "success" && (
                  <div className="rounded-md bg-green-900/30 border border-green-600/30 p-3 text-green-100 text-sm">Thanks  we’ll call you within 24 hours!</div>
                )}
                {status === "error" && (
                  <div className="rounded-md bg-red-900/30 border border-red-600/30 p-3 text-red-100 text-sm">Something went wrong  please call us directly.</div>
                )}
              </form>
            </div>

            {/* diagonal corner accent */}
            <svg className="absolute right-0 bottom-0 w-36 h-36 opacity-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 L100 0 L100 100 Z" fill="#18427c" />
              <defs>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#18427c" />
                  <stop offset="100%" stopColor="#18427c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}