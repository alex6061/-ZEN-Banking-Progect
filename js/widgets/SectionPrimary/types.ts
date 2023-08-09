import {
  Title,
  Image,
  Link,
} from '../../schema/types';

export interface Props {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  link?: {
    apple: Link;
    google: Link;
  };
};
