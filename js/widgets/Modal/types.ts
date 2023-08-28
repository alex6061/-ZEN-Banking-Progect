import { Title, Link, Input, Button } from '../../schema/types';

export type Props = {
  name: string;
  title: Title;
  fields: Input[];
  connection: {
    value: string
    content: string;
  };
  checkbox: string;
  link: Link;
  button: Button;
}

export type Connections = {
  value: string;
  content: string;
}
