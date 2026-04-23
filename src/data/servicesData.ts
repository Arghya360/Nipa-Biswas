import { Code, Palette, Smartphone, Globe, Database, Rocket, Layout, ShoppingCart, Layers } from "lucide-react";

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  heroImage: string;
  features: string[];
  process: { step: string; description: string }[];
  technologies: string[];
  benefits: { title: string; description: string }[];
  portfolioProjects?: PortfolioProject[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Modern & Scalable Websites",
    description: "Building fast, responsive, and scalable websites using modern technologies like React, Next.js, and TypeScript.",
    longDescription: "I specialize in creating high-performance web applications that are built to scale. From single-page applications to complex enterprise solutions, I leverage cutting-edge technologies to deliver exceptional digital experiences that drive business growth.",
    icon: "Code",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    features: ["Custom Web Applications", "E-commerce Solutions", "CMS Integration", "API Development", "Progressive Web Apps", "Performance Optimization"],
    process: [
      { step: "Discovery", description: "Understanding your business goals, target audience, and technical requirements." },
      { step: "Architecture", description: "Designing scalable system architecture and choosing the right tech stack." },
      { step: "Development", description: "Building with clean, maintainable code following industry best practices." },
      { step: "Testing & Launch", description: "Rigorous testing across devices and browsers before a smooth deployment." },
    ],
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
    benefits: [
      { title: "Lightning Fast", description: "Optimized performance with sub-second load times for better user engagement." },
      { title: "SEO Friendly", description: "Built with search engine optimization in mind to maximize your online visibility." },
      { title: "Fully Responsive", description: "Pixel-perfect experience across all devices, from mobile to ultra-wide displays." },
      { title: "Future Proof", description: "Built with modern technologies that ensure long-term maintainability and scalability." },
    ],
    portfolioProjects: [
      {
        title: "TechVault — SaaS Dashboard",
        description: "A comprehensive analytics dashboard built with React and TypeScript for a fintech startup. Features real-time data visualization, role-based access control, and responsive design that handles millions of data points seamlessly.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "FreshCart — Grocery E-Commerce",
        description: "A full-featured online grocery store with product filtering, cart management, real-time inventory tracking, and Stripe-powered checkout. Optimized for Core Web Vitals with a 98 Lighthouse score.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
      },
      {
        title: "DevConnect — Developer Portfolio Hub",
        description: "A community-driven platform where developers showcase their projects, share code snippets, and connect with peers. Built with server-side rendering for lightning-fast page loads and excellent SEO.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Intuitive & Beautiful Interfaces",
    description: "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
    longDescription: "Great design goes beyond aesthetics — it's about creating meaningful experiences. I combine user research, wireframing, and prototyping to build interfaces that are not only beautiful but also intuitive and conversion-focused.",
    icon: "Palette",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Usability Testing"],
    process: [
      { step: "Research", description: "Deep dive into user behavior, competitor analysis, and market trends." },
      { step: "Wireframes", description: "Creating low-fidelity layouts to establish information architecture." },
      { step: "Visual Design", description: "Crafting high-fidelity mockups with your brand identity in mind." },
      { step: "Handoff", description: "Delivering pixel-perfect designs with detailed specifications for developers." },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Principle"],
    benefits: [
      { title: "User Centered", description: "Designs backed by research to ensure optimal user satisfaction and engagement." },
      { title: "Brand Consistent", description: "Cohesive visual language that strengthens your brand identity across touchpoints." },
      { title: "Conversion Focused", description: "Strategic design decisions that guide users toward desired actions." },
      { title: "Accessible", description: "WCAG-compliant designs ensuring inclusivity for all users." },
    ],
    portfolioProjects: [
      {
        title: "Flavor Studio — Restaurant Brand",
        description: "Complete brand identity and web design for a premium restaurant chain. Included logo design, typography system, color palette, and a fully interactive menu experience with smooth micro-animations.",
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&h=500&fit=crop",
        tags: ["Figma", "Branding", "Interaction Design"],
      },
      {
        title: "MindSpace — Meditation App UI",
        description: "Designed a calming, accessible interface for a meditation and wellness app. Created a comprehensive design system with 200+ components, dark mode support, and guided onboarding flows that boosted user retention by 40%.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
        tags: ["UI Design", "Figma", "Prototyping"],
      },
      {
        title: "FinTrack — Banking Dashboard",
        description: "Redesigned the customer-facing dashboard for a digital bank. Conducted user research with 50+ participants, created detailed journey maps, and delivered a clean, data-rich interface that reduced support tickets by 35%.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        tags: ["UX Research", "Wireframing", "Design System"],
      },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    subtitle: "Cross-Platform Excellence",
    description: "Developing cross-platform mobile applications with Flutter and React Native for iOS and Android.",
    longDescription: "I build performant, beautiful mobile applications that work seamlessly across iOS and Android. Using cross-platform frameworks, I deliver native-like experiences while maintaining a single codebase for faster development and easier maintenance.",
    icon: "Smartphone",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    features: ["Cross-Platform Apps", "Native Performance", "Push Notifications", "Offline Support", "App Store Deployment", "In-App Purchases"],
    process: [
      { step: "Planning", description: "Defining app features, user flows, and platform-specific requirements." },
      { step: "UI Design", description: "Designing mobile-first interfaces following platform design guidelines." },
      { step: "Development", description: "Building with Flutter/React Native for optimal cross-platform performance." },
      { step: "Deployment", description: "Publishing to App Store and Google Play with ongoing support." },
    ],
    technologies: ["Flutter", "React Native", "Dart", "Swift", "Kotlin", "Firebase"],
    benefits: [
      { title: "One Codebase", description: "Single codebase for both iOS and Android, reducing development time and cost." },
      { title: "Native Feel", description: "Platform-specific UI elements that make the app feel native on each platform." },
      { title: "Offline Ready", description: "Built-in offline capabilities for uninterrupted user experience." },
      { title: "Scalable", description: "Architecture designed to handle growing user bases without performance issues." },
    ],
    portfolioProjects: [
      {
        title: "RideEasy — Ride Sharing App",
        description: "A cross-platform ride-sharing application with real-time GPS tracking, in-app messaging, and secure payment integration. Built with React Native for seamless performance on both iOS and Android devices.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
        tags: ["React Native", "Firebase", "Maps API"],
      },
      {
        title: "FitPulse — Fitness Tracker",
        description: "A health and fitness tracking app with workout logging, progress charts, and Apple Health/Google Fit integration. Features offline-first architecture so users never lose their data even without connectivity.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop",
        tags: ["Flutter", "Dart", "SQLite"],
      },
      {
        title: "QuickBite — Food Delivery",
        description: "End-to-end food delivery app with restaurant browsing, real-time order tracking, push notifications, and Stripe payment. Handles 10,000+ concurrent users with optimized state management and caching.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
        tags: ["React Native", "Node.js", "Socket.io"],
      },
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    subtitle: "Visibility & Growth",
    description: "Optimizing websites for search engines to improve visibility, traffic, and conversions.",
    longDescription: "I implement comprehensive SEO strategies that go beyond keywords. From technical SEO audits to content optimization and performance tuning, I help your website rank higher and attract the right audience that converts into customers.",
    icon: "Globe",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
    features: ["Technical SEO", "Content Strategy", "Performance Audit", "Analytics Setup", "Keyword Research", "Link Building"],
    process: [
      { step: "Audit", description: "Comprehensive analysis of your current SEO performance and opportunities." },
      { step: "Strategy", description: "Creating a tailored SEO roadmap aligned with your business goals." },
      { step: "Implementation", description: "Executing on-page, off-page, and technical SEO improvements." },
      { step: "Monitoring", description: "Tracking rankings, traffic, and conversions with regular reporting." },
    ],
    technologies: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Schema.org"],
    benefits: [
      { title: "Higher Rankings", description: "Improved search engine positions for your target keywords and phrases." },
      { title: "More Traffic", description: "Increased organic traffic from users actively searching for your services." },
      { title: "Better ROI", description: "Sustainable, long-term traffic growth that reduces dependence on paid ads." },
      { title: "Data Driven", description: "Decisions backed by analytics and measurable performance metrics." },
    ],
    portfolioProjects: [
      {
        title: "LocalBiz — Business Directory SEO",
        description: "Comprehensive SEO overhaul for a local business directory. Implemented structured data, optimized page speed from 45 to 95 on Lighthouse, and built a content strategy that increased organic traffic by 280% in 6 months.",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
        tags: ["Technical SEO", "Schema.org", "Analytics"],
      },
      {
        title: "EduLearn — Online Course Platform",
        description: "SEO strategy for an e-learning platform that brought 150K+ monthly organic visitors. Included keyword mapping for 500+ course pages, internal linking architecture, and automated meta tag generation.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
        tags: ["Content Strategy", "Ahrefs", "Google Analytics"],
      },
      {
        title: "GreenHome — Eco Products Store",
        description: "E-commerce SEO project that ranked 200+ product pages on the first page of Google. Optimized product descriptions, implemented review schema, and built a blog strategy that drives 40% of total site traffic.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
        tags: ["E-commerce SEO", "Content Marketing", "Search Console"],
      },
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    subtitle: "Robust & Secure Systems",
    description: "Building robust server-side applications with Node.js, Python, and cloud services.",
    longDescription: "I architect and build powerful backend systems that form the backbone of your applications. From RESTful APIs to real-time systems, I ensure your server-side infrastructure is secure, scalable, and performant.",
    icon: "Database",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    features: ["REST APIs", "GraphQL", "Database Design", "Cloud Deployment", "Authentication", "Microservices"],
    process: [
      { step: "Analysis", description: "Evaluating data requirements, security needs, and scalability targets." },
      { step: "Design", description: "Designing database schemas, API contracts, and system architecture." },
      { step: "Build", description: "Implementing with best practices for security, performance, and reliability." },
      { step: "Deploy", description: "Setting up cloud infrastructure with monitoring and auto-scaling." },
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "AWS"],
    benefits: [
      { title: "Highly Secure", description: "Enterprise-grade security with encryption, authentication, and authorization." },
      { title: "Auto Scaling", description: "Infrastructure that automatically scales to handle traffic spikes." },
      { title: "99.9% Uptime", description: "Reliable systems with redundancy and failover mechanisms." },
      { title: "Well Documented", description: "Comprehensive API documentation for easy integration and maintenance." },
    ],
    portfolioProjects: [
      {
        title: "PayStream — Payment Gateway API",
        description: "Built a high-throughput payment processing API handling 50K+ transactions daily. Features include idempotent requests, webhook management, rate limiting, and comprehensive API documentation with Swagger.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop",
        tags: ["Node.js", "PostgreSQL", "Redis"],
      },
      {
        title: "ChatHub — Real-Time Messaging",
        description: "A scalable real-time messaging backend supporting 100K+ concurrent WebSocket connections. Implemented message queuing with Redis, end-to-end encryption, and a microservices architecture for independent scaling.",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop",
        tags: ["Python", "WebSocket", "MongoDB"],
      },
      {
        title: "DataVault — Analytics Engine",
        description: "Custom analytics data pipeline processing 10M+ events daily. Built with event sourcing pattern, time-series database optimization, and a GraphQL API that serves dashboards with sub-100ms query responses.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
        tags: ["Node.js", "GraphQL", "AWS Lambda"],
      },
    ],
  },
  {
    slug: "devops-deployment",
    title: "DevOps & Deployment",
    subtitle: "Seamless CI/CD Pipelines",
    description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure for seamless deployments.",
    longDescription: "I streamline your development workflow with modern DevOps practices. From containerization to automated testing and deployment pipelines, I ensure your team can ship faster with confidence and reliability.",
    icon: "Rocket",
    heroImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop",
    features: ["Docker & Kubernetes", "AWS/GCP/Azure", "CI/CD Pipelines", "Monitoring", "Infrastructure as Code", "Load Balancing"],
    process: [
      { step: "Assessment", description: "Evaluating current infrastructure and identifying improvement areas." },
      { step: "Pipeline Setup", description: "Configuring automated build, test, and deployment pipelines." },
      { step: "Containerization", description: "Dockerizing applications for consistent environments across stages." },
      { step: "Optimization", description: "Fine-tuning for cost efficiency, speed, and reliability." },
    ],
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx", "Prometheus"],
    benefits: [
      { title: "Faster Deploys", description: "Automated pipelines that reduce deployment time from hours to minutes." },
      { title: "Zero Downtime", description: "Rolling deployments and blue-green strategies for uninterrupted service." },
      { title: "Cost Efficient", description: "Optimized cloud resources to minimize infrastructure costs." },
      { title: "Full Visibility", description: "Comprehensive monitoring and alerting for proactive issue resolution." },
    ],
    portfolioProjects: [
      {
        title: "CloudScale — Auto-Scaling Platform",
        description: "Designed and deployed a Kubernetes-based auto-scaling infrastructure for a SaaS company. Reduced deployment time from 2 hours to 8 minutes with GitHub Actions CI/CD and zero-downtime rolling updates.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
        tags: ["Kubernetes", "Docker", "GitHub Actions"],
      },
      {
        title: "MonitorPro — Infrastructure Dashboard",
        description: "Built a comprehensive monitoring solution with Prometheus and Grafana for a microservices architecture. Includes custom alerting rules, automated incident response, and cost optimization dashboards that saved 40% on cloud spend.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
        tags: ["Prometheus", "Grafana", "Terraform"],
      },
      {
        title: "PipelineX — CI/CD Framework",
        description: "Created a reusable CI/CD framework with multi-environment deployments (dev, staging, production), automated security scanning, database migration management, and Slack-integrated deployment notifications.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
        tags: ["Terraform", "AWS", "Docker"],
      },
    ],
  },
  {
    slug: "cms-integration",
    title: "CMS Integration",
    subtitle: "Content Management Made Easy",
    description: "Integrating powerful content management systems that give you full control over your website content.",
    longDescription: "I integrate modern CMS platforms that empower your team to manage content without developer assistance. Whether it's a headless CMS or a traditional setup, I ensure seamless integration with your existing workflow and design.",
    icon: "Layout",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    features: ["Headless CMS Setup", "Content Modeling", "API Integration", "Media Management", "Multi-language Support", "Content Workflows"],
    process: [
      { step: "Requirements", description: "Understanding your content structure, team workflow, and publishing needs." },
      { step: "CMS Selection", description: "Recommending the best CMS platform based on your specific use case." },
      { step: "Integration", description: "Setting up the CMS with your frontend for seamless content delivery." },
      { step: "Training", description: "Hands-on training for your team to manage content independently." },
    ],
    technologies: ["Strapi", "Contentful", "Sanity", "WordPress", "Prismic", "Ghost"],
    benefits: [
      { title: "Easy Updates", description: "Non-technical team members can update content without developer help." },
      { title: "Structured Content", description: "Organized content models that ensure consistency across your site." },
      { title: "Multi-Channel", description: "Deliver content to websites, apps, and other platforms from one source." },
      { title: "Version Control", description: "Track content changes with full revision history and rollback capability." },
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    subtitle: "End-to-End Solutions",
    description: "Delivering complete web solutions from frontend interfaces to backend infrastructure and everything in between.",
    longDescription: "I provide end-to-end development services, handling both the client-facing interface and the server-side logic. This holistic approach ensures seamless integration, consistent code quality, and a unified vision from database to user interface.",
    icon: "Layers",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    features: ["Frontend & Backend", "Database Architecture", "API Design", "Authentication", "Real-time Features", "Cloud Integration"],
    process: [
      { step: "Blueprint", description: "Creating a comprehensive technical blueprint covering all application layers." },
      { step: "Frontend", description: "Building responsive, interactive user interfaces with modern frameworks." },
      { step: "Backend", description: "Developing secure APIs, business logic, and database integration." },
      { step: "Integration", description: "Connecting all layers with thorough testing and quality assurance." },
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "GraphQL", "Docker"],
    benefits: [
      { title: "Single Point", description: "One developer handling everything means better communication and faster delivery." },
      { title: "Consistent Quality", description: "Unified coding standards and architecture decisions across the entire stack." },
      { title: "Cost Effective", description: "No need to coordinate between multiple specialists for different layers." },
      { title: "Faster Delivery", description: "Streamlined development process without hand-off delays between teams." },
    ],
  },
  {
    slug: "e-commerce-development",
    title: "E-Commerce Development",
    subtitle: "Online Stores That Sell",
    description: "Building powerful e-commerce platforms with secure payments, inventory management, and conversion-optimized design.",
    longDescription: "I create custom e-commerce solutions that drive sales and provide exceptional shopping experiences. From product catalogs to secure checkout flows, I build online stores that are optimized for conversion and built to handle high traffic volumes.",
    icon: "ShoppingCart",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    features: ["Product Catalogs", "Secure Payments", "Inventory Management", "Order Tracking", "Customer Accounts", "Analytics Dashboard"],
    process: [
      { step: "Store Planning", description: "Defining product structure, payment methods, and shipping requirements." },
      { step: "Design", description: "Creating conversion-optimized layouts with trust-building elements." },
      { step: "Development", description: "Building secure checkout, payment integration, and admin panels." },
      { step: "Launch", description: "Testing all purchase flows and launching with monitoring in place." },
    ],
    technologies: ["Shopify", "Stripe", "React", "Node.js", "PostgreSQL", "Redis"],
    benefits: [
      { title: "High Conversion", description: "Optimized checkout flows that minimize cart abandonment rates." },
      { title: "Secure Payments", description: "PCI-compliant payment processing with multiple payment options." },
      { title: "Easy Management", description: "Intuitive admin panel for managing products, orders, and customers." },
      { title: "Growth Ready", description: "Scalable architecture that handles increasing traffic and product catalogs." },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData.find((s) => s.slug === slug);
};
