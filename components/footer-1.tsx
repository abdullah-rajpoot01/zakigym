import Link from "next/link";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string
  url: string
}
interface FooterLinksSection {
  title: string
  links: FooterLink[]
}

const Footer1 = () => {

  const linkSections: FooterLinksSection[] = [
    {
      title: "Quick Links",
      links: [{ label: "Home", url: "/" },
      { label: "Web Development", url: "/website-design" },
      { label: "Google My Business", url: "/google-my-business" },
      { label: "Graphic Design", url: "/graphic-design" },
      { label: "Pricing", url: "/pricing" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "About Us", url: "/about-us" },
        { label: "Contact Us", url: "/contact-us" },
        { label: "FAQs", url: "/faqs" },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Terms And Conditions", url: "/terms-and-conditions" },
      ],
    },
  ];

  return (
    <div className="px-6 w-full relative text-foreground">
    
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-primary-foreground relative! overflow-hidden">
          <AnimatedGridPattern
                 className={cn(
                   "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
                   "inset-x-0 h-full w-full skew-y-12"
                 )}
                 duration={3}
                 maxOpacity={0.1}
                 numSquares={30}
               />
        <div className="">
          <a href={"/"} className="inline-flex items-center justify-center gap-2  rounded-full ">
            <img
              src={
                "/text-logo.png"
              }
              className="max-h-25 dark:invert"
            />
          </a>
          <p className="max-w-102 mt-6 text-foreground/80">
            We don’t just build websites or create content — we build a complete digital presence that attracts high-value clients, boosts credibility, and turns visitors into loyal customers.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-foreground md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-foreground">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:underline transition text-foreground/80">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-foreground/80 border-t border-t-primary-foreground/50">
        Copyright 2026 © <Link href="/">Eligo Digital .</Link> All
        Right Reserved.
      </p>
    </div>
  );
};

export default Footer1;
