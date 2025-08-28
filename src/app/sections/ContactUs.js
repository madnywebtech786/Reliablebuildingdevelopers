"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

// Extremely creative, unique, modern contact section (no TypeScript, no animations)
// Tailwind-only styling. Drop this component into a Next.js `app` or `pages` route.

export default function ModernContactCreative() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
    { id: "linkedin", href: "#", icon: <Linkedin className="w-5 h-5" /> },
    { id: "twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { id: "instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
    { id: "github", href: "#", icon: <Github className="w-5 h-5" /> },
  ];

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // demo fake submit
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 900);
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
                  Let's create something unusual
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A contact section that surprises — bold shapes, layered depth,
                  and unexpected layout.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-xl bg-white/6 border border-white/6"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/10">{c.icon}</div>
                    <div>
                      <div className="text-xs font-semibold">{c.title}</div>
                      <a
                        href={c.href}
                        className="text-sm font-medium block mt-1 hover:underline"
                      >
                        {c.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    className="p-3 rounded-lg bg-white/8 flex items-center justify-center"
                  >
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
                  <div className="text-xs font-semibold uppercase text-primary/90">
                    Start a project
                  </div>
                  <h3 className="text-2xl font-bold">
                    Tell us about your idea
                  </h3>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-4"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`border  px-3 py-2 rounded-lg ${
                      errors.name ? "border-red-400" : "border-primary"
                    } bg-transparent`}
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`border border-primary px-3 py-2 rounded-lg ${
                      errors.email ? "border-red-400" : "border-primary"
                    } bg-transparent`}
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us the gist — budget & timeline helps."
                  className={`border  px-3 py-2 rounded-lg ${
                    errors.message ? "border-red-400" : "border-primary"
                  } bg-transparent`}
                />

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2 font-semibold bg-primary text-white shadow"
                  >
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Sending..." : "Get in touch"}
                  </button>
                </div>

                {status === "success" && (
                  <div className="rounded-md bg-green-900/30 border border-green-600/30 p-3 text-green-100 text-sm">
                    Thanks — your message has been sent!
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-md bg-red-900/30 border border-red-600/30 p-3 text-red-100 text-sm">
                    Something went wrong — please try again later.
                  </div>
                )}
              </form>
            </div>

            {/* diagonal corner accent */}
            <svg
              className="absolute right-0 bottom-0 w-36 h-36 opacity-8"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
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
