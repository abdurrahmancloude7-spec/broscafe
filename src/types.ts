export interface RestaurantInfo {
  name: string;
  brand: string;
  tagline: string;
  headline: string;
  subheadline: string;
  address: {
    building: string;
    sector: string;
    landmark: string;
    city: string;
    country: string;
    fullFormatted: string;
  };
  phone: string;
  phoneTel: string;
  social: {
    facebook: {
      url: string;
      followers: string;
      label: string;
    };
    instagram: {
      url: string;
      followers: string;
      label: string;
    };
  };
  mapsUrl: string;
}

export interface ExperienceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  accent: string;
  sampleItems: {
    name: string;
    highlight: string;
    notes: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: string;
  image: string;
  alt: string;
}
