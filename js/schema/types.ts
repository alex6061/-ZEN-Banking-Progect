export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export type Link = {
  source: string;
  description: string;
};

export type SectionPrimaryProps = {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google:  Link;
  };
};

export type SectionTernaryProps = {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
};





