import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Starter (Monthly)",
    price: 999,
    description: "Perfect for beginners. Access to basic gym equipment and cardio zone.",
    features: [
      "Valid for 1 month",
      "Access to cardio & basic machines",
      "Separate timing for men & women",
      "Locker room access",
      "Free fitness consultation",
    ],
    buttonText: "Join Starter Plan",
  },
  {
    name: "Advanced (3 Months)",
    price: 1799,
    isRecommended: true,
    description: "Ideal for regular fitness enthusiasts. Includes strength training and guided support.",
    features: [
      "Valid for 3 months",
      "Full gym access (cardio + strength)",
      "1 free personal training session/week",
      "Separate areas for men & women",
      "Locker & shower access",
      "Free body composition analysis",
    ],
    buttonText: "Join Advanced Plan",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 3499,
    description: "Ultimate fitness experience with personal training and diet guidance.",
    features: [
      "Valid for 6 months",
      "Unlimited gym access",
      "3 personal training sessions/week",
      "Custom diet plan",
      "Monthly progress tracking",
      "Priority access to new equipment",
      "Free Zaki Gym kit (t-shirt + bottle)",
    ],
    buttonText: "Join Premium Plan",
  },
];

const Pricing = () => {
  
  return (
    <div className="px-6 py-20 ">
      <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Our Plans
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
        Choose the plan that fits your needs
      </p>
      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 overflow-hidden">
        {plans.map((plan,index) => (
          <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className="border border-border/85 bg-card p-6 shadow-xs/3 "
            key={plan.name}
          >
            <h3 className="font-medium text-lg">{plan.name}</h3>
            <p className="mt-2 font-satoshi font-semibold text-4xl">
              Rs {plan.price}
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full animate-shake"
              size="lg"
              variant={plan.isPopular ? "default" : "outline"}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
