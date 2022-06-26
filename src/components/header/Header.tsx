import { UserCircle } from "phosphor-react";
import { HeaderContainer, LogoContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>Time Tracker</LogoContainer>
      <UserCircle className="icon" size={32} />
    </HeaderContainer>
  );
}
