import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  Dumbbell,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const plusPoints = [
  {
    icon: ShieldCheckIcon,
    image: "/gym/pexels-mamadvali-17706035.jpg",
    title: "Real-Time Protection",
    description:
      "Stay alert with instant notifications and smart security monitoring.",
  },
  {
    icon: CogIcon,
    image: "/gym/pexels-tima-miroshnichenko-5327502.jpg",
    title: "Smart & Simple Setup",
    description: "Install easily in minutes with no complex tools or wiring.",
  },
  {
    icon: BinocularsIcon,
    image: "/gym/pexels-alexapopovich-10551491.jpg",
    title: "Peace of Mind Anywhere",
    description: "Monitor and control your home from anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl) px-6 py-24 text-center"
      id="why-choose-us"
    >
      <strong className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        Why Choose Us
      </strong>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium text-4xl/tight tracking-[-0.04em] sm:text-[2.75rem]">
        We are Leading in Smart Assistants with Nearly 20 Years of Experience
      </h2>
      <p className="mt-5 text-muted-foreground text-xl -tracking-[0.01em] sm:text-2xl">
        We are constantly always keep pace with the time.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-4 relative overflow-hidden">
        {plusPoints.map((plusPoint, index) => (
          <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className={`relative w-full overflow-hidden  border bg-linear-to-b from-foreground/3 px-6 py-15 sm:max-w-xs `}
            key={plusPoint.title}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${plusPoint.image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            {/* <BackgroundPattern /> */}

            <div className="isolate flex flex-col items-center gap-2">
              <plusPoint.icon className="size-20 border-2 bg-white p-3 rounded-full object-cover aspect-square text-gray-600" />

              <h3 className="mt-8 font-medium text-xl tracking-[-0.005em] text-white">
                {plusPoint.title}
              </h3>
              <p className="text-balance text-base  text-white/70">
                {plusPoint.description}
              </p>
              <Button className="mt-6 bg-white hover:bg-white text-black">
                Learn More <ArrowUpRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
