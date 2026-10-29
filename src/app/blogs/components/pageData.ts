import blogData from "./blogData";
import { contacts } from "@/utils/constant";

/** First ~140 characters of the summary, cut at a word boundary. */
const excerpt = (text = "") => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 140) return clean;
  const cut = clean.slice(0, 140);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export const blogPagedata = {
  banner: {
    title: "From Our Journal",
    subTitle: `From Our Journal — Stories & Guides from EBC Mussoorie`,
    description:
      "Travel guides, glamping tips and resort stories published monthly",
  },
  cards: blogData.map((blog) => ({
    id: blog.id,
    slug: `/blogs/${blog.slug}/`,
    image: blog.image,
    category: blog.Category,
    date: blog.date,
    title: blog.title.replace(/\n/g, "").trim(),
    description: excerpt(blog.subtitle),
    buttonLabel: "READ MORE",
  })),
  // cards: blogData.map((card) => ({
  //   id: card.id,
  //   link: card.slug,
  //   image: card.image,
  //   title: card.title,
  // })),

  socialSection: {
    title: "Publishing New Stories Every Month",
    description:
      "Publishing new stories every month. Follow us on Instagram for daily updates from the resort.",

    buttons: [
      {
        label: "FOLLOW @EBCMUSSOORIE",
        href: "https://www.instagram.com/ebcmussoorie",
        variant: "primary",
      },
      {
        label: "FOLLOW ON FACEBOOK",
        href: contacts.socialContacts.facebook,
        variant: "outline",
      },
    ],
  },
};
