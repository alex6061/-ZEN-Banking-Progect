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

export interface Header {
  name: string;
  logo: Object;
  menuItems: [];
  langs: [];
};
export interface SectionPrimary {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?:{
    apple: Link;
    google:  Link;
  };
};