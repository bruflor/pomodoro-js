import { H2Title } from "./style";

interface ITitle {
  name: string;
}
export const Title = (props: ITitle) => {
  return <H2Title>{props.name}</H2Title>;
};
