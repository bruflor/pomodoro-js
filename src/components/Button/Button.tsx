import { GreenButton } from "./style";

// interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}
export const Button = ({
  ...buttonProps
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return <GreenButton {...buttonProps}> {buttonProps.children} </GreenButton>;
};
