import { Image } from "../../schema/types";

export type Props = {
  title: string;
  links: links;
}
 type links = {
  content: string;
  source: string | Image;
}

