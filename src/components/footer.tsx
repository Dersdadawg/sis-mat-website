import Link from "next/link";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../../content/site";

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  discord: <MessageCircle className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const activeSocials = Object.entries(siteConfig.socials).filter(
    ([, url]) => url && url.length > 0
  );

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              <span className="text-accent-600">{siteConfig.clubName}</span>
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xs">
              {siteConfig.footer.blurb}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/competitions", label: "Competitions" },
                { href: "/worksheets", label: "Worksheets" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              Connect
            </h4>
            <div className="flex gap-3">
              {activeSocials.map(([key, url]) => (
                <a
                  key={key}
                  href={key === "email" ? `mailto:${url}` : url}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-950 transition-colors"
                  aria-label={key}
                >
                  {socialIcons[key] || <Mail className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[hsl(var(--border))] text-center text-xs text-[hsl(var(--muted-foreground))]">
          &copy; {new Date().getFullYear()} {siteConfig.schoolName} {siteConfig.clubName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
