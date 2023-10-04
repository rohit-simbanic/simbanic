import da from "@/public/images/da.svg";
import inter from "@/public/images/inter.svg";
import atlassian from "@/public/images/atlassian.svg";
import click from "@/public/images/click-travel.svg";
import notion from "@/public/images/notion.svg";
import hr from "@/public/images/h&r-block.svg";
import etoro from "@/public/images/etoro.svg";
import contentful from "@/public/images/contentful-logo.svg";
import daDark from "@/public/images/daDark.svg";
import interDark from "@/public/images/interDark.svg";
import atlassianDark from "@/public/images/atlassianDark.svg";
import clickTravelDark from "@/public/images/clickTravelDark.svg";
import hrDark from "@/public/images/hrDark.svg";
import etoroDark from "@/public/images/etoroDark.svg";
import contentfulDark from "@/public/images/contentfulDark.svg";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Company",
    hash: "/company",
  },
  {
    name: "Marketplace",
    hash: "/projects",
  },
  {
    name: "Features",
    hash: "/features",
  },
  {
    name: "Team",
    hash: "/team",
  },
  {
    name: "Contact us",
    hash: "/contact",
  },
] as const;

export const clientsLogo = [
  {
    imageUrl: da,
    imageUrlDark: daDark,
  },
  {
    imageUrl: inter,
    imageUrlDark: interDark,
  },
  {
    imageUrl: atlassian,
    imageUrlDark: atlassianDark,
  },
  {
    imageUrl: click,
    imageUrlDark: clickTravelDark,
  },
  {
    imageUrl: notion,
    imageUrlDark: notion,
  },
  {
    imageUrl: hr,
    imageUrlDark: hrDark,
  },
  {
    imageUrl: etoro,
    imageUrlDark: etoroDark,
  },
  {
    imageUrl: contentful,
    imageUrlDark: contentfulDark,
  },
  {
    imageUrl: da,
    imageUrlDark: daDark,
  },
  {
    imageUrl: inter,
    imageUrlDark: interDark,
  },
  {
    imageUrl: atlassian,
    imageUrlDark: atlassianDark,
  },
  {
    imageUrl: click,
    imageUrlDark: clickTravelDark,
  },
  {
    imageUrl: notion,
    imageUrlDark: notion,
  },
  {
    imageUrl: hr,
    imageUrlDark: hrDark,
  },
  {
    imageUrl: etoro,
    imageUrlDark: etoroDark,
  },
  {
    imageUrl: contentful,
    imageUrlDark: contentfulDark,
  },
] as const;

export const services = {
  subheading: "What We Can Do For You",
  heading: "Services we can help<br/> you with",
  details:
    "Explore our diverse range of services, delivering cutting-edge<br/> solutions tailored to your specific needs and goals.",
  servicesItem: [
    {
      id: 1,
      name: "Product Engineering",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/product.svg"),
    },
    {
      id: 2,
      name: "Performance Engineering",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/performance.svg"),
    },
    {
      id: 3,
      name: "Digital Experience",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/digital.svg"),
    },
    {
      id: 4,
      name: "Application Modernisation",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/application.svg"),
    },
    {
      id: 5,
      name: "Cloud Engineering ",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/cloud.svg"),
    },
    {
      id: 6,
      name: "Quality Engineering",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/quality.svg"),
    },
  ],
};

export const companyInfo = [
  {
    id: 1,
    heading: "100+",
    description: "Project Completed",
  },
  {
    id: 2,
    heading: "98%",
    description: "Positive Feedback",
  },
  {
    id: 3,
    heading: "80%",
    description: "Repetitive Clients",
  },
] as const;

export const portfolioItem = {
  subheading: "Showcasing Our Projects",
  heading: "A Glimpse into Our Portfolio",
  portfolioItems: [
    {
      id: 1,
      name: "A Glimpse into Our Portfolio",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe",
      photoURL: require("@/public/images/portfolio/port-1.svg"),
    },
    {
      id: 2,
      name: "A Glimpse into Our Portfolio",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe",
      photoURL: require("@/public/images/portfolio/port-2.svg"),
    },
  ],
} as const;
export const testimonialData = {
  subheading: "Testimonial",
  heading: "Our Client Say",
  description:
    "Our team lives, breathes and dreams about technology. We are visionaries, dreamers, specialists and perfectionists. The diversity, commitment and expertise of our team, working cohesively with our clients, and partners,... ",
  clientName: "Martha Maldonado",
  designation: "Executive Chairman",
  clientPhoto: require("@/public/images/testimonial/client_group.svg"),
  quoteIcon: require("@/public/images/testimonial/quote_icon.svg"),
  linkedIn: require("@/public/images/testimonial/linkedin.svg"),
};

export const blogData = {
  heading: "Blog",
  blogItesm: [
    {
      title: "How Catboat Can Help You Drive More Sales",
      blogImage: require("@/public/images/blogs/blog-1.svg"),
      author: require("@/public/images/blogs/author-1.svg"),
      authorName: "John Smith",
      date: "2021-01-01",
      designation: "CEO & Founder",
      tag: "CRM SOFTWARE",
    },
    {
      title: "8 Things About Web Design Your Boss Wants To Know",
      blogImage: require("@/public/images/blogs/blog-2.svg"),
      author: require("@/public/images/blogs/author-2.svg"),
      authorName: "John Kach",
      date: "2023-04-01",
      designation: "MD & Founder",
      tag: "CRM SOFTWARE",
    },
    {
      title: "6 tips personal Selling that guarantee Success in 2023",
      blogImage: require("@/public/images/blogs/blog-3.svg"),
      author: require("@/public/images/blogs/author-3.svg"),
      authorName: "Mark Doe",
      date: "2023-02-06",
      designation: "MD & Founder",
      tag: "CRM SOFTWARE",
    },
  ],
};

export const footerData = {
  footerDetails:
    "A leading data science company enabling companies to establish data-driven growth paths.",
  phone: "+91 - 840 194 8827",
  email: "info@Simabanic.com",
  footerLinks: [
    { linkName: "Data Analytics" },
    { linkName: "Data Engineering" },
    { linkName: "ML And AI Solutions" },
    { linkName: "Product Engineering" },
    { linkName: "Cloud Data Migration" },
    { linkName: "RPA Services" },
    { linkName: "Database Services" },
  ],
  companyInfo: [
    { pages: "About Us" },
    { pages: "Services" },
    { pages: "Our Work" },
    { pages: "Technologies" },
    { pages: "Blogs" },
    { pages: "Careers" },
    { pages: "Contact Us" },
  ],
  siteLinks: [
    { links: "Sitemap" },
    { links: "Terms of Use" },
    { links: "Privacy Policy" },
  ],
};
