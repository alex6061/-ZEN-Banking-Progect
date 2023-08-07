export interface SectionPrimary {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?:{
    apple: Link;
    google: Link;
  };
};
export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface Link {
  source: string;
  description: string;
};

export interface SectionPrimaryData {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google:  Link;
  };
};

