export interface ProjectScreenshot {
  title: string;
  description: string;
  image: string;
}

export interface ProjectDetail {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  technologies: string[];
  features: string[];
  screenshots: ProjectScreenshot[];
  relatedServiceSlug: string;
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "e-commerce-platform",
    category: "WEB DESIGN",
    title: "E-Commerce Platform",
    subtitle: "Modern Online Shopping Experience",
    description:
      "A modern e-commerce platform with seamless user experience, featuring product catalogs, secure checkout, and real-time inventory management.",
    longDescription:
      "I designed and developed a fully functional e-commerce platform from the ground up for a growing retail brand. The platform features a clean, conversion-optimized storefront with advanced product filtering, wishlists, size guides, and a streamlined multi-step checkout process integrated with Stripe. The admin panel gives the client full control over inventory, orders, and customer data with real-time analytics dashboards.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    technologies: ["React", "Next.js", "Stripe", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Product Catalog with Filters",
      "Secure Stripe Checkout",
      "Real-Time Inventory Tracking",
      "Customer Account Portal",
      "Admin Dashboard",
      "Order Management System",
    ],
    relatedServiceSlug: "e-commerce-development",
    screenshots: [
      {
        title: "Product Listing Page",
        description:
          "A beautifully designed product grid with advanced filtering options including price range, categories, and ratings. Each card features quick-add-to-cart and wishlist functionality with smooth hover animations.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      },
      {
        title: "Shopping Cart & Checkout",
        description:
          "A streamlined multi-step checkout flow with real-time order summary, discount code support, and multiple payment options. Designed to minimize cart abandonment with progress indicators and trust badges.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      },
      {
        title: "Admin Analytics Dashboard",
        description:
          "The backend admin panel provides real-time sales analytics, revenue tracking, top-selling products, and customer insights. Interactive charts help the business owner make data-driven decisions effortlessly.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      },
    ],
  },
  {
    slug: "fitness-tracking-app",
    category: "MOBILE APP",
    title: "Mobile App Development",
    subtitle: "Fitness Tracking App — Cross-Platform",
    description:
      "A comprehensive fitness application that helps users track workouts, monitor progress, and achieve their health goals.",
    longDescription:
      "I built a cross-platform fitness tracking application using React Native that runs natively on both iOS and Android. The app includes custom workout plan creation, real-time exercise tracking with animated guides, progress visualization through interactive charts, and Apple Health / Google Fit integration. It features an offline-first architecture so users never lose data, and push notifications keep them motivated with daily reminders and milestone celebrations.",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Lottie", "HealthKit"],
    features: [
      "Custom Workout Plans",
      "Real-Time Exercise Tracking",
      "Progress Charts & Analytics",
      "Apple Health Integration",
      "Offline-First Architecture",
      "Push Notifications",
    ],
    relatedServiceSlug: "mobile-development",
    screenshots: [
      {
        title: "Home Dashboard",
        description:
          "The main dashboard greets users with their daily fitness summary — calories burned, steps taken, active minutes, and progress toward weekly goals. Animated ring charts provide instant visual feedback on daily targets.",
        image:
          "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop",
      },
      {
        title: "Workout Session Screen",
        description:
          "During a workout, users see real-time stats including heart rate, duration, reps completed, and calories burned. Animated exercise guides demonstrate proper form, and rest timers auto-countdown between sets.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
      },
      {
        title: "Progress & Analytics",
        description:
          "Detailed progress tracking with weekly, monthly, and yearly views. Interactive charts show workout frequency, weight progression, and personal records. Users can compare performance across different time periods.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      },
    ],
  },
  {
    slug: "luxury-brand-identity",
    category: "BRANDING",
    title: "Luxury Brand Identity",
    subtitle: "Premium Lifestyle Brand Design",
    description:
      "Complete brand identity design for a luxury lifestyle brand, including logo design, color palette, typography, and comprehensive brand guidelines.",
    longDescription:
      "I crafted an entire brand identity system for an upscale lifestyle brand entering the market. The project began with deep research into the luxury market landscape and target demographics, followed by mood board creation, logo concepts, and iterative refinements. The final deliverables included a primary and secondary logo, a sophisticated color palette with metallic accents, custom typography pairings, iconography, packaging design, social media templates, and a 60-page brand guidelines document ensuring visual consistency across every touchpoint.",
    heroImage:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=600&fit=crop",
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "InDesign", "Procreate"],
    features: [
      "Logo & Monogram Design",
      "Color Palette System",
      "Typography Guidelines",
      "Packaging Design",
      "Social Media Templates",
      "Brand Guidelines Document",
    ],
    relatedServiceSlug: "ui-ux-design",
    screenshots: [
      {
        title: "Logo & Visual Identity",
        description:
          "The primary logo features an elegant wordmark with custom letterforms, paired with a minimal monogram mark for smaller applications. The design conveys sophistication through balanced proportions and refined serif details.",
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
      },
      {
        title: "Brand Collateral & Packaging",
        description:
          "Luxury packaging design featuring embossed logos on matte black boxes, gold foil accents on business cards, and a cohesive stationery set. Every physical touchpoint reinforces the premium brand positioning.",
        image:
          "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=500&fit=crop",
      },
      {
        title: "Digital Brand Application",
        description:
          "The brand identity seamlessly extends to digital platforms — from the website hero section with cinematic imagery to Instagram story templates and email newsletter layouts, all maintaining the luxury aesthetic.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      },
    ],
  },
  {
    slug: "dashboard-analytics",
    category: "UI/UX DESIGN",
    title: "Dashboard Analytics",
    subtitle: "Business Intelligence Interface",
    description:
      "An intuitive analytics dashboard designed for data-driven decision making with interactive charts and real-time updates.",
    longDescription:
      "I designed and developed a comprehensive analytics dashboard for a B2B SaaS company that needed to present complex business data in an intuitive, actionable format. The dashboard features real-time data visualization with interactive charts, customizable widget layouts, role-based access controls, and automated report generation. I conducted extensive user research with stakeholders and iterated through multiple prototypes to ensure the interface surfaces the most critical KPIs without overwhelming users.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Real-Time Data Visualization",
      "Customizable Widget Layout",
      "Automated Report Generation",
      "Role-Based Access Control",
      "Data Export (CSV/PDF)",
      "Dark Mode Support",
    ],
    relatedServiceSlug: "web-development",
    screenshots: [
      {
        title: "Main Dashboard Overview",
        description:
          "The primary dashboard view displays key metrics through a mix of line charts, bar graphs, and KPI cards. Users can switch between daily, weekly, and monthly views. Drag-and-drop widget positioning lets each team member customize their view.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      },
      {
        title: "Revenue & Sales Analytics",
        description:
          "Deep-dive revenue analytics with cohort analysis, funnel visualization, and predictive trend lines. The interactive tooltip system reveals granular data on hover, and comparison mode lets users overlay multiple time periods.",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      },
      {
        title: "Team Performance Reports",
        description:
          "Automated performance reports with exportable summaries. Visualizes team productivity, task completion rates, and project timelines. Scheduled email reports keep stakeholders informed without logging in.",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
      },
    ],
  },
  {
    slug: "portfolio-website",
    category: "WEB DEVELOPMENT",
    title: "Portfolio Website",
    subtitle: "Creative Showcase Platform",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations, responsive design, and optimized performance.",
    longDescription:
      "I designed and developed a high-performance portfolio website for a creative professional looking to stand out in a competitive market. The site features smooth scroll-triggered animations, a dynamic project gallery with category filtering, an integrated blog, and a contact form with email notifications. Built with a focus on performance — achieving a perfect 100 Lighthouse score — the site loads in under 1 second and delivers a buttery-smooth browsing experience across all devices.",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite", "Vercel"],
    features: [
      "Scroll-Triggered Animations",
      "Dynamic Project Gallery",
      "Category Filtering",
      "Integrated Blog",
      "Contact Form with Email",
      "100 Lighthouse Score",
    ],
    relatedServiceSlug: "full-stack-development",
    screenshots: [
      {
        title: "Hero & Landing Section",
        description:
          "A dramatic full-screen hero with kinetic typography and parallax scrolling. The minimalist navigation transforms into a hamburger menu on mobile. Subtle gradient overlays and micro-interactions create an immersive first impression.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      },
      {
        title: "Project Gallery",
        description:
          "An interactive masonry grid showcasing projects with category tabs for filtering. Each card reveals a preview overlay on hover with project title, tags, and a 'View Case Study' link. Smooth FLIP animations during filtering create a polished feel.",
        image:
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop",
      },
      {
        title: "Case Study Detail Page",
        description:
          "Individual project pages feature a cinematic hero image, client overview, challenge-solution-result narrative, and a scrollable image gallery. A sticky sidebar shows project metadata and links to live demos.",
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=500&fit=crop",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsData.find((p) => p.slug === slug);
};
