import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Added value",
    content:
      "Whallet is an open-source crypto wallet that allows anyone to become its owner through IDM DAO",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "Whallet is a secure wallet asset leveraging blockchain technology",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A crypto wallet can save you a significant amount of money in interest charges",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Blockchain technology is a powerful tool in the era of finance. It can take you wherever you wish, but it cannot replace your role as the driver of change",
    name: "Anna Yeoh",
    title: "South East Crypto Expert",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Cryptocurrency makes your life easier. If you're fortunate to possess it, consider yourself lucky as it brings convenience and new opportunities.",
    name: "Steve Mark",
    title: "Global Caller",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "In the world of blockchain and cryptocurrency, it is often individuals involved in the financial industry, finance sector, and international trade who achieve significant wealth.",
    name: "Kenn Gallagher",
    title: "Founder of Snippet",
    get title() {
      return this._title;
    },
    set title(value) {
      this._title = value;
    },
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Holder",
    value: "8824",
  },
  {
    id: "stats-2",
    title: "Trusted by Media",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "68707",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.whallet.id",
      },
      {
        name: "How it Works",
        link: "https://www.doc.whallet.id",
      },
      {
        name: "Create",
        link: "https://www.create.whallet.id",
      },
      {
        name: "Explore",
        link: "https://www.scan.whallet.id",
      },
      {
        name: "Terms & Services",
        link: "https://www.doc.whallet.id",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.whallet.id/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.whallet.id/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.whallet.id/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.doc.whallet.id",
      },
      {
        name: "Newsletters",
        link: "https://www.whallet.id/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.whallet.id/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.whallet.id/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];