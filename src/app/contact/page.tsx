"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Mail, Copy, Check, User, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "../../../content/site";

export default function ContactPage() {
  const { contact } = siteConfig;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    `${contact.formSubjectPrefix} from ${name || "Student"}`
  )}&body=${encodeURIComponent(message || "")}`;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = contact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [contact.email]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Interested in joining or have a question? Reach out!
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-accent-600" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <Input
                    id="contact-name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-1.5"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <textarea
                    id="contact-message"
                    placeholder="I'd like to join the math club..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="flex w-full rounded-lg border border-[hsl(var(--input))] bg-transparent pl-10 pr-3 py-2 text-sm ring-offset-[hsl(var(--background))] placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 resize-none"
                  />
                </div>
              </div>

              <a href={mailtoHref}>
                <Button className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Open in Email Client
                </Button>
              </a>

              <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
                This will open your default email client with the message
                pre-filled.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Info */}
        <div className="space-y-6">
          <FadeIn delay={0.15}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Club Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between gap-3">
                  <code className="text-sm font-mono text-accent-600">
                    {contact.email}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyEmail}
                    className="gap-1.5 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Faculty Advisor</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[hsl(var(--muted-foreground))]">
                <p className="font-medium text-[hsl(var(--foreground))]">
                  {contact.advisorName}
                </p>
                <a
                  href={`mailto:${contact.advisorEmail}`}
                  className="text-accent-600 hover:underline"
                >
                  {contact.advisorEmail}
                </a>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Meeting Info</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[hsl(var(--muted-foreground))]">
                <p>{siteConfig.about.meetingSchedule}</p>
              </CardContent>
            </Card>
          </FadeIn>

          {contact.qrCodeImage && (
            <FadeIn delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Scan to Connect</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-32 h-32 relative bg-white rounded-lg p-2">
                    <Image
                      src={contact.qrCodeImage}
                      alt="QR code to connect with the club"
                      fill
                      className="object-contain p-2"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
