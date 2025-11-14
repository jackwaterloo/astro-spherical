import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Jack's Site",
  DESCRIPTION: "My personal site for my blog and projects",
  AUTHOR: "Jack Waterloo",
};

// Profile
export const PROFILE = {
  LOCATION: "Chicago, IL",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "jack.waterloo77@gmail.com",
    HREF: "mailto:jack.waterloo77@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "jackwaterloo",
    HREF: "https://github.com/jackwaterloo",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "jackwaterloo",
    HREF: "https://www.linkedin.com/in/jackwaterloo/",
  },
];
