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
import about from "@/public/images/menu/about.svg";
import star from "@/public/images/menu/star.svg";
import team from "@/public/images/menu/team.svg";
import menuTeam from "@/public/images/discussion.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Company",
    hash: "/company",
    submenu: true,
    img: menuTeam,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "About Us", link: "/about-us", img: about },
          { name: "Company Reviews", link: "/reviews", img: star },
          { name: "Our Team", link: "/team", img: team },
        ],
      },
    ],
  },
  {
    name: "Services",
    hash: "/services",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "Product Engineering", link: "/service/product-engineering" },
        ],
      },
      {
        sublink: [
          {
            name: "Performance Engineering",
            link: "/service/performance-engineering",
          },
        ],
      },
      {
        sublink: [
          {
            name: "Application Modernisation",
            link: "/service/application-modernisation",
          },
        ],
      },
      {
        sublink: [
          { name: "Digital Experience", link: "/service/digital-experience" },
        ],
      },
      {
        sublink: [
          { name: "Cloud Engineering", link: "/service/cloud-engineering" },
        ],
      },
      {
        sublink: [
          {
            name: "Application Modernisation",
            link: "/service/application-modernisation",
          },
        ],
      },
      {
        sublink: [
          { name: "Quality Engineering", link: "/service/quality-engineering" },
        ],
      },
    ],
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
  subheadingServices: "Our Services",
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
      url: "/service/product-engineering",
    },
    {
      id: 2,
      name: "Performance Engineering",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/performance.svg"),
      url: "/service/performance-engineering",
    },
    {
      id: 3,
      name: "Digital Experience",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/digital.svg"),
      url: "/service/digital-experience",
    },
    {
      id: 4,
      name: "Application Modernisation",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/application.svg"),
      url: "/service/application-modernisation",
    },
    {
      id: 5,
      name: "Cloud Engineering ",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/cloud.svg"),
      url: "/service/cloud-engineering",
    },
    {
      id: 6,
      name: "Quality Engineering",
      description:
        "Building Impactful Software Products to Solve Your Unique Business Problems",
      logoUrl: require("@/public/images/services/quality.svg"),
      url: "/service/quality-engineering",
    },
  ],
  servicesProductEngItem: [
    {
      id: 1,
      name: "Product Discovery and Design",
      description:
        "Substitute speculation with effective product exploration and verified methodologies. Our approach involves designing a strategic canvas and collaborating with you to gain insights into user experiences and essential tasks to accomplish.",
      logoUrl: require("@/public/images/services/productEng/s1.svg"),
    },
    {
      id: 2,
      name: "UX Design and Development Services",
      description:
        "Utilize data to comprehend customer behavior and motivation. Develop user-friendly flows that simplify tasks. Our innovative developers materialize the vision through interactive designs.",
      logoUrl: require("@/public/images/services/productEng/s2.svg"),
    },
    {
      id: 3,
      name: "App Development Services",
      description:
        "Transforming product designs into tangible products can be a daunting task. However, we have a proven history of designing for scalability and creating products using an iterative development approach.",
      logoUrl: require("@/public/images/services/productEng/s3.svg"),
    },
    {
      id: 4,
      name: "Product Transformation and ReEngineering Services",
      description:
        "Enhance your product by implementing a more robust user experience or adopting a new architecture that supports SaaS delivery. Our product transformation services provide a seamless upgrade process with minimal disruption to existing users",
      logoUrl: require("@/public/images/services/productEng/s4.svg"),
    },
    {
      id: 5,
      name: "Software Qualify Services",
      description:
        "Create resilient digital products by applying the principles of quality management processes and utilizing quality tools to ensure their excellence. We focus on continuously improving the quality of products through an ongoing cycle of planning, execution, and assessment.",
      logoUrl: require("@/public/images/services/productEng/s5.svg"),
    },
    {
      id: 6,
      name: "Product Transformation and ReEngineering Services",
      description:
        "Enhance your product by implementing a more robust user experience or adopting a new architecture that supports SaaS delivery. Our product transformation services provide a seamless upgrade process with minimal disruption to existing users",
      logoUrl: require("@/public/images/services/productEng/s6.svg"),
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
    "612, Rhythm Plaza, Amar Jawan Cir, Nikol, Ahmedabad, Gujarat 382350",
  phone: "+91 - 076228 11355",
  email: "info@simabanic.com",
  footerLinks: [
    { linkName: "Product Engineering", hash: "/service/product-engineering" },
    {
      linkName: "Performance Engineering",
      hash: "/service/performance-engineering",
    },
    { linkName: "Digital Experience", hash: "/service/digital-experience" },
    {
      linkName: "Application Modernisation",
      hash: "/service/application-modernisation",
    },
    { linkName: "Cloud Engineering", hash: "/service/cloud-modernisation" },
    { linkName: "Quality Engineering", hash: "/service/quality-modernisation" },
  ],
  companyInfo: [
    { pages: "About Us", hash: "/about-us" },
    { pages: "Contact Us", hash: "/contact-us" },
  ],
  siteLinks: [{ links: "Sitemap" }],
};
