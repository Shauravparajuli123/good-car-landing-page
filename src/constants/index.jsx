import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];



export const features = [
  {
    icon: <BotMessageSquare />,
    text: "3D Customization Tool",
    description:
      "Use our interactive 3D tool to visualize modifications on your car in real-time. Choose colors, wheels, and accessories to see your personalized touch come to life before your eyes.",
  },
  {
    icon: <Fingerprint />,
    text: "Parts Selector",
    description:
      "Browse our extensive catalog of performance parts and aesthetic enhancements. Filter by car model, part type, or brand to find the perfect components to upgrade your vehicle.",
  },
  {
    icon: <ShieldHalf />,
    text: "Photo Gallery",
    description:
      "Explore our photo gallery showcasing before-and-after images of previous projects. Get inspired by transformations and see the quality of work we deliver.",
  },
  {
    icon: <BatteryCharging />,
    text: "Virtual Consultations",
    description:
      "Book a virtual meeting with our customization experts. Get professional advice tailored to your car’s make, model, and your personal style preferences.",
  },
  {
    icon: <PlugZap />,
    text: "Cost Estimator",
    description:
      "Input your desired customizations using our cost estimator tool to receive an instant quote. Plan your budget and explore different options within your price range.",
  },
  {
    icon: <GlobeLock />,
    text: "Appointment Scheduler ",
    description:
      "Easily schedule installation appointments once you've chosen your customizations. Select a time and date that works for you, and our technicians will handle the rest.",
  },
];


