import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Astro Spherical",
  DESCRIPTION: "This is a blog and portfolio template site",
  AUTHOR: "John Doe",
};

// Profile
export const PROFILE = {
  LOCATION: "San Francisco, CA",
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
    TEXT: "johndoe@example.com",
    HREF: "mailto:johndoe@example.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "johndoe",
    HREF: "https://github.com/johndoe",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "johndoe",
    HREF: "https://www.linkedin.com/in/johndoe/",
  },
];
