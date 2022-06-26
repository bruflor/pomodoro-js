import { House, ListChecks, ChartBar, SignOut, Info } from "phosphor-react";

import {
  MenuContainer,
  Section,
  PageName,
  SectionPages,
  SectionUser,
} from "./styles";
export function Menu() {
  return (
    <MenuContainer>
      <SectionPages>
        <Section>
          <House size={"1.25rem"} />
          <PageName>Dashboard</PageName>
        </Section>
        <Section>
          <ListChecks size={"1.25rem"} />
          <PageName>Tasks</PageName>
        </Section>
        <Section>
          <ChartBar size={"1.25rem"} />
          <PageName>Statistics</PageName>
        </Section>
      </SectionPages>

      <SectionUser>
        <Section>
          <SignOut size={"1.25rem"} />
          <PageName>Sign Out</PageName>
        </Section>
        <Section>
          <Info size={"1.25rem"} />
          <PageName>Info</PageName>
        </Section>
      </SectionUser>
    </MenuContainer>
  );
}
