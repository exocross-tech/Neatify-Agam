import { TestimonialItem } from "@/types";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    service: "Wardrobe Organisation",
    reviewText: "Wardrobe looks so neat and organised. Very satisfied with the service!",
    customerName: "Anonymous Customer",
  },
  {
    id: "review-2",
    service: "Overhead Water Tank Cleaning",
    reviewText: "Hi bro, thank you for your water tank cleaning work. Fully satisfied. Thank you, NEATIFY AGAM!",
    customerName: "Anonymous Customer",
  },
];

/**
 * Full list of potential service filter categories.
 * As per prompt requirement:
 * "Show other category filters only when published reviews exist for that category."
 */
export const ALL_SERVICE_FILTERS = [
  "All Reviews",
  "Cleaning",
  "Wardrobe Organisation",
  "Overhead Water Tank Cleaning",
  "New Home Setup",
  "Home Organisation",
  "Plant Care",
  "Senior Assistance",
  "Other Services",
] as const;
