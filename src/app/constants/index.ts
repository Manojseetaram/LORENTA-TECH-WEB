import { 
  Shield, 
  Zap, 
  Clock, 
  Star, 
  Smartphone, 
  User,
  Printer,
  Code2,
  AppWindow,
  Wrench 
} from "lucide-react";

export const SECTIONS = [
  { key: "how" as const, label: "How to Use" },
  { key: "why" as const, label: "Why us?" },
  { key: "services" as const, label: "Services" },
  { key: "contact" as const, label: "Contact" },
] as const;

// Make sure it includes ALL section IDs including "home"
export const SECTION_IDS = ["home", "how", "why", "services", "contact"] as const;

export type SectionKey = typeof SECTION_IDS[number];


export const FEATURE_ITEMS = [
  { icon: Shield, title: "100% Secured Documents" },
  { icon: Clock, title: "24/7 Availability" },
  { icon: Star, title: "Patented Technology" },
] as const;

export const FEATURE_ITEMS_RIGHT = [
  { icon: Zap, title: "Print Under 60 Seconds" },
  { icon: Smartphone, title: "Contactless & Clean" },
  { icon: User, title: "Ideal for All Users" },
] as const;

export const STEP_CARDS = [
  { step: "STEP 1", title: "Scan the Kiosk QR", desc: "Scan the kiosk QR using your mobile camera." },
  { step: "STEP 2", title: "Upload Your Document", desc: "Choose your document from phone, laptop, or Google Drive." },
  { step: "STEP 3", title: "Set Print Preference", desc: "Select copies, B&W or color, duplex/single side, and orientation." },
  { step: "STEP 4", title: "Get Your Print Instantly", desc: "Enter OTP / scan QR to receive your print quickly." },
] as const;

export const WHY_US_ITEMS_ROW1 = [
  { icon: Shield, title: "Your Documents Are Completely Safe", desc: "Secure handling and privacy-first design for user documents." },
  { icon: Zap, title: "Fast Printing Experience", desc: "Optimized workflow from scan to print—simple and quick." },
  { icon: Clock, title: "Always Available – 24/7", desc: "Self-service printing for late nights, weekends, and holidays." },
] as const;

export const WHY_US_ITEMS_ROW2 = [
  { icon: Star, title: "Self-Service Print Solution", desc: "Reduce dependency on manual staff and avoid queues." },
  { icon: Smartphone, title: "Contactless & Hassle-Free", desc: "Scan, upload and print without shared devices or staff interaction." },
  { icon: User, title: "Perfect for Students & Professionals", desc: "Ideal for campuses, offices and public spaces." },
] as const;

export const SERVICE_ITEMS = [
  {
    icon: Printer,
    title: "Document Printing Vending Machines",
    desc: "We design and build document printing vending machines that allow users to print documents quickly without staff support.",
    bullets: [
      "Saves time for users",
      "Reduces dependency on manual staff",
      "Self-service system",
      "Available anytime",
    ]
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Clean and responsive websites focused on usability, performance, and stability.",
    bullets: [
      "Works smoothly on all devices",
      "Easy to manage and update",
      "Built for speed and reliability",
    ]
  },
  {
    icon: AppWindow,
    title: "App Development",
    desc: "Mobile applications for Android and iOS based on real user needs.",
    bullets: [
      "Simple user experience",
      "Secure and scalable",
      "Designed for real-world use",
    ]
  },
  {
    icon: Wrench,
    title: "Customisable Product Development",
    desc: "From concept to deployment, we build solutions that fit specific requirements.",
    bullets: [
      "Custom-built to match your needs",
      "Easy to modify and scale",
      "Practical, tested, reliable",
      "Complete support end-to-end",
    ]
  }
] as const;

export const TEAM_MEMBERS = ["Suhas", "Prasana", "Manoj", "Ranjana prasad C.H"];

export const MARQUEE_TEXT = "Encrypted Files   ✦   Smart Printing   ✦   24/7 Service   ✦   Zero Queues   ✦   Instant Print";
export const MARQUEE_TEXT_INVERSE = "Contactless Prints   ✦   Instant Print   ✦   Zero Queues   ✦   24/7 Service   ✦   Encrypted Files";

export const CONTACT_INFO = {
  phone: "(add your number)",
  email: "sales@rdltech.in",
  address: "(add address)"
} as const;


