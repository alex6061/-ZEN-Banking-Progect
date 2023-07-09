export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface BrandLink {
  link: string;
  url: string;
};

export interface Text {
  content: string;
};

export interface SectionPrimary {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: BrandLink[];
};