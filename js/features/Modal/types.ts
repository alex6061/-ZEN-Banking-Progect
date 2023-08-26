export type dataModal = {
  name: string,
  title: string;
  fields: Input[];
  connection: string[];
  checkbox: string;
  button: Button;
}

export type Button = {
  type: string;
  content: string;
}

export type Input = {
  value: string,
  content: string,
}