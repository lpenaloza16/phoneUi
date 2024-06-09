export interface Listing {
  id: number;
  slug: string;
  title: string;
}

export const listings: Listing[] = [
  { id: 1, slug: "post-1", title: "Post 1" },
  { id: 2, slug: "post-2", title: "Post 2" },
  // Add more listings here
];
