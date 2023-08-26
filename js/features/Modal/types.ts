import { Input } from '../../shared/ui/Input/types';
import { Button } from '../../shared/ui/Button/types';
import { Title, Link } from '../../schema/types';

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
