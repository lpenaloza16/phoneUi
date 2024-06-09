export interface Listing {
  id: number;
  slug: string;
  title: string;
}

export const listings: Listing[] = [
  { id: 1, slug: "post-1", title: "Scotland Island" },
  { id: 2, slug: "post-2", title: "The Charles Grand Brasserie & Bar" },
  { id: 3, slug: "post-3", title: "Bridge Climb" },
  { id: 4, slug: "post-2", title: "Scotland island" },
  { id: 5, slug: "post-2", title: "Clam Bar" },
  { id: 6, slug: "post-2", title: "Vivid Festival" },

  // Add more listings here
];
