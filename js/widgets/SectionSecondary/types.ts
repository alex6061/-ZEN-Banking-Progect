import {
  Title,
  Image,
} from '../../schema/types';

export interface Props {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
};
