export type Title = {
  priority: string | number;
  content: string;
};

export type Image = {
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

export type Input = {
  type: string;
  placeholder?: string;
}

export type Button = {
  type?: string;
  content: string;
}







