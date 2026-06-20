import { NavbarTypes } from "@/types";

export const NAV_DATA: NavbarTypes[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/about-us",
  },
  {
    id: 5,
    title: "Products",
    isMegaMenu: true,
    child: [
      {
        id: 1,
        categoryTitle: "AI Solutions",
        products: [
          {
            id: 101,
            title: "CareOn",
            description: "Advanced NLP for customer support.",
            url: "http://careon.io/",
            image: "/image/products/24.png",
          },
          {
            id: 102,
            title: "Frontliner",
            description: "Advanced NLP for customer support.",
            url: "https://frontliner.io/",
            image: "/image/products/1.png",
          },
          {
            id: 103,
            title: "Virtual Agent",
            description: "Real-time image recognition system.",
            url: "https://vagent.us/",
            image: "/image/products/23.png",
          },
          {
            id: 104,
            title: "Smart Care",
            description: "Real-time image recognition system.",
            url: "https://smartcarehms.com/",
            image: "/image/products/25.png",
          },
          {
            id: 105,
            title: "Barta Bahok",
            description: "Real-time image recognition system.",
            url: "https://smartcarehms.com/",
            image: "/image/products/32.png",
          },
        ],
      },
      {
        id: 2,
        categoryTitle: "Machine Learning",
        products: [
          {
            id: 201,
            title: "Vehicle Management",
            description: "Resource planning on the cloud.",
            url: "#",
             image: "/image/products/33.png",
          },
          {
            id: 202,
            title: "Object Detection",
            description: "Enterprise-grade data encryption.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
          },
          {
            id: 203,
            title: "Recommendation System",
            description: "Enterprise-grade data encryption.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
          },
          {
            id: 204,
            title: "Decision Making Simulator",
            description: "Enterprise-grade data encryption.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
          },
        ],
      },
      {
        id: 3,
        categoryTitle: "Internet of Things (IOT)",
        products: [
          {
            id: 301,
            title: "VV Pad Voting System",
            description: "Low-code mobile app platform.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
          {
            id: 302,
            title: "Election Management System",
            description: "Low-code mobile app platform.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
          {
            id: 303,
            title: "VOIP Solution",
            description: "Low-code mobile app platform.",
            url: "#",
            image: "/image/products/16.png",
          },
          {
            id: 304,
            title: "Cyber Falcon",
            description: "Low-code mobile app platform.",
            url: "#",
            image: "/image/products/21.png",
          },
          {
            id: 305,
            title: "Smart Kitchen",
            description: "Low-code mobile app platform.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
        ],
      },
      {
        id: 4,
        categoryTitle: "Blockchain",
        products: [
          {
            id: 401,
            title: "Finixbit",
            description: "Low-code mobile app platform.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
          {
            id: 402,
            title: "NFT Marketplace",
            description: "Low-code mobile app platform.",
            url: "#",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
        ],
      },
      {
        id: 5,
        categoryTitle: "Customized Software",
        products: [
          {
            id: 501,
            title: "Club ERP",
            description: "Low-code mobile app platform.",
            url: "https://app.gnclbd.com/login",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
          {
            id: 502,
            title: "Real Estate ERP",
            description: "Low-code mobile app platform.",
            url: "https://portal.uniflexlimited.com/",
            image: "/image/products/14.png",
          },
          {
            id: 503,
            title: "School Management System",
            description: "Low-code mobile app platform.",
            url: "https://apps.softacademiaedu.com/login/",
            image: "/image/products/12.png",
          },
          {
            id: 504,
            title: "Point of Sales (POS)",
            description: "Low-code mobile app platform.",
            url: "https://cashboxglobal.com/login/",
            image: "/image/products/18.png",
          },
          {
            id: 505,
            title: "Accounting Mangement Solution",
            description: "Low-code mobile app platform.",
            url: "https://edependable.com/",
            image: "/image/products/3.png",
          },
          {
            id: 506,
            title: "Logistic Management System",
            description: "Low-code mobile app platform.",
            url: "https://cashboxglobal.com/login/",
            image: "/image/products/13.png",
          },
          {
            id: 509,
            title: "ePharma Management System",
            description: "Low-code mobile app platform.",
            url: "https://cashboxglobal.com/login/",
            image: "/image/products/19.png",
          },
          {
            id: 510,
            title: "Human Resource Management System",
            description: "Low-code mobile app platform.",
            url: "https://cashboxglobal.com/login/",
            image: "/image/products/22.png",
          },
        ],
      },
      {
        id: 6,
        categoryTitle: "Mobile Applications",
        products: [
          {
            id: 601,
            title: "Payment Gateway",
            description: "Low-code mobile app platform.",
            url: "https://swanpays.com/",
            image: "/image/products/7.png",
          },
          {
            id: 602,
            title: "Payment Gateway",
            description: "Low-code mobile app platform.",
            url: "https://epaymaker.com/",
            image: "/image/products/2.png",
          },
          {
            id: 603,
            title: "Barta Bahok",
            description: "Real-time image recognition system.",
            url: "https://smartcarehms.com/",
            image: "/image/products/32.png",
          },
        ],
      },
      {
        id: 7,
        categoryTitle: "Web Application",
        products: [
          {
            id: 701,
            title: "E-commerce",
            description: "Low-code mobile app platform.",
            url: "https://brandszoneglobal.com/",
            image: "/image/products/5.png",
          },
          {
            id: 702,
            title: "Auction",
            description: "Low-code mobile app platform.",
            url: "https://freeworldimports.com/",
            image: "/image/products/4.png",
          },
          {
            id: 703,
            title: "SAAS Applications",
            description: "Low-code mobile app platform.",
            url: "https://www.sasapplication.com/",
            image: "/image/products/11.png",
          },
          {
            id: 704,
            title: "Service Portal",
            description: "Low-code mobile app platform.",
            url: "https://laajim.com/",
            image: "/image/products/8.png",
          },
          {
            id: 705,
            title: "Hotel Reservation",
            description: "Low-code mobile app platform.",
            url: "https://hoteldmore.com/",
            image: "/image/products/26.png",
          },
          {
            id: 706,
            title: "Payment Gateway",
            description: "Low-code mobile app platform.",
            url: "https://vpos4u.com/",
            image: "/image/products/10.png",
          },
          {
            id: 707,
            title: "Social Media",
            description: "Low-code mobile app platform.",
            url: "https://talkingtota.com/guest/",
            image: "/image/products/6.png",
          },
          {
            id: 708,
            title: "OTT Platform",
            description: "Low-code mobile app platform.",
            url: "https://transboardernetwork.com/",
            image: "/image/products/9.png",
          },
          {
            id: 709,
            title: "Payment Service (Card Processing)",
            description: "Low-code mobile app platform.",
            url: "https://transboardernetwork.com/",
            image: "/image/products/15.png",
          },
          {
            id: 710,
            title: "E-Commerce Marketplace",
            description: "Low-code mobile app platform.",
            url: "https://transboardernetwork.com/",
            image: "/image/products/20.png",
          },
        ],
      },
      {
        id: 8,
        categoryTitle: "Web Site",
        products: [
          {
            id: 801,
            title: "Australian System Assurance Company",
            description: "Low-code mobile app platform.",
            url: "https://asacrail.com/",
            image: "/image/products/27.png",
          },
          {
            id: 802,
            title: "Bangladesh China Club Ltd.",
            description: "Low-code mobile app platform.",
            url: "https://bdchinaclub.com.bd/",
            image: "/image/products/31.png",
          },
          {
            id: 803,
            title: "Transborder Ventures LLC.",
            description: "Low-code mobile app platform.",
            url: "https://tventuresllc.com/",
            image: "/image/products/28.png",
          },
          {
            id: 804,
            title: "Portfolio Website",
            description: "Low-code mobile app platform.",
            url: "https://drsohel.com/",
            image: "/image/products/29.png",
          },
          {
            id: 805,
            title: "DE Soft",
            description: "Low-code mobile app platform.",
            url: "https://de-softbd.com/",
            image: "/image/products/17.png",
          },
          {
            id: 806,
            title: "N. Jahan LPC",
            description: "Low-code mobile app platform.",
            url: "https://njahanlaw.ca/",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
          {
            id: 807,
            title: "Brother Engineering Corporation",
            description: "Low-code mobile app platform.",
            url: "https://becorporation.com.bd/",
            image:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    child: [
      {
        id: 1,
        title: "Ai Solutions",
        url: "/ai",
      },
      {
        id: 2,
        title: "Machine Learning",
        url: "/ml",
      },
      {
        id: 3,
        title: "Internet of Things (IOT)",
        url: "/iot",
      },
      {
        id: 4,
        title: "Blockchain",
        url: "/blockchain",
      },
      {
        id: 5,
        title: "Customized Software",
        url: "/customizedSoftware",
      },
      {
        id: 6,
        title: "Mobile Apps",
        url: "/mobileapps",
      },
      {
        id: 7,
        title: "Web Development",
        url: "/webdevelopment",
      },
    ],
  },
  {
    id: 4,
    title: "Our Clients",
    url: "/our-clients",
  },
  {
    id: 4,
    title: "Careers",
    url: "/careers",
  },
  {
    id: 6,
    title: "Contact Us",
    url: "/contact-us",
  },
];
