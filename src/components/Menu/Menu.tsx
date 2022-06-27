import { House, ListChecks, ChartBar, SignOut, Info } from "phosphor-react";

import { MenuContainer, Section } from "./styles";
export const Menu = () => {
  return (
    <MenuContainer>
      <div>
        {/* <Section>
          <House size={"1.25rem"} />
          <PageName>Dashboard</PageName>
        </Section> */}
        <Section>
          <ListChecks size={"1.25rem"} />
          <p>My Tasks</p>
        </Section>
        <Section>
          <ChartBar size={"1.25rem"} />
          <p>Statistics</p>
        </Section>
      </div>

      <div>
        <Section>
          <SignOut size={"1.25rem"} />
          <p>Sign Out</p>
        </Section>
        <Section>
          <Info size={"1.25rem"} />
          <p>Info</p>
        </Section>
      </div>
    </MenuContainer>
  );
};
