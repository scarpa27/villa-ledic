// Content for the About section on the Home page, kept separate from the
// component that renders it (see AboutSection.jsx).

import aboutImage from "../assets/images/apartments/house-drone.webp";

export const about = {
  label: "About Us",
  heading: "Family hospitality on the Makarska Riviera",
  paragraph:
    "Apartments Ledić is a family-run apartment house in Krvavica, located just 350 meters from the sea. We offer seven apartments for couples, families and small groups, with private parking, fiber internet, air conditioning and a warm family atmosphere. Our goal is to make every guest feel welcome and relaxed while exploring the Makarska Riviera.",
  image: aboutImage,
  buttons: [
    { text: "View Apartments", to: "/accommodation", variant: "primary" },
    { text: "Contact Us", to: "/contact", variant: "secondary" },
  ],
};
