import { site } from "@/data/site";
import { InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  const social = [
    { label: "IG", href: site.contact.instagram, icon: <InstagramIcon /> },
    { label: "IN", href: site.contact.linkedin, icon: <LinkedInIcon /> },
    { label: "MAIL", href: site.contact.emailHref, icon: <MailIcon /> },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="flex flex-col items-center gap-10 text-center md:gap-12">
          <a
            href="#top"
            className="group flex items-center gap-3 font-mono text-lg font-bold uppercase tracking-[0.35em] text-cream"
          >
            SMITXFX
            <span className="block size-1.5 rounded-full bg-ember transition-transform duration-300 group-hover:scale-150" />
          </a>

          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-smoke">
            {site.role}
          </p>

          <div className="flex items-center gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "MAIL" ? undefined : "_blank"}
                rel={item.label === "MAIL" ? undefined : "noreferrer"}
                aria-label={item.label}
                data-cursor={item.label}
                className="flex size-11 items-center justify-center rounded-full border border-line text-cream/70 transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            © 2026 {site.fullName} —{" "}
            <a
              href="mailto:hello@smityourmail.com"
              className="text-cream/70 transition-colors hover:text-ember"
            >
              Designed &amp; edited by Smit.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}