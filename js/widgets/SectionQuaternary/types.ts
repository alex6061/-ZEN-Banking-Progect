import { Title } from '../../schema/types';

export type Props = {
  name: string;
  title: Title;
  brands: {
    light: Brand[];
    dark: Brand[];
  };
};

export type Brand = {
  source: string;
  description: string;
};