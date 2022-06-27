import { UserCircle } from "phosphor-react";
import { HeaderContainer, LogoContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Time Tracker</LogoContainer>
      <UserCircle className="icon" size={32} />
    </HeaderContainer>
  );
};
