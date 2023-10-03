import da from "@/public/images/da.svg";
import inter from "@/public/images/inter.svg";
import atlassian from "@/public/images/atlassian.svg";
import click from "@/public/images/click-travel.svg";
import notion from "@/public/images/notion.svg";
import hr from "@/public/images/h&r-block.svg";
import etoro from "@/public/images/etoro.svg";
import contentful from "@/public/images/contentful-logo.svg";

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
  },
  {
    imageUrl: inter,
  },
  {
    imageUrl: atlassian,
  },
  {
    imageUrl: click,
  },
  {
    imageUrl: notion,
  },
  {
    imageUrl: hr,
  },
  {
    imageUrl: etoro,
  },
  {
    imageUrl: contentful,
  },
  {
    imageUrl: da,
  },
  {
    imageUrl: inter,
  },
  {
    imageUrl: atlassian,
  },
  {
    imageUrl: click,
  },
  {
    imageUrl: notion,
  },
  {
    imageUrl: hr,
  },
  {
    imageUrl: etoro,
  },
  {
    imageUrl: contentful,
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
      logoUrl: require("@/public/images/portfolio/port-2.svg"),
    },
  ],
};
