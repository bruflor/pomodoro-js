import {
  SectionName,
  Section,
  ContainerDoubleColumn,
} from "../My Tasks/styles";

export const MyTasks = () => {
  return (
    <div>
      <ContainerDoubleColumn>
        <Section>
          <SectionName>Recent tasks</SectionName>
          //component
        </Section>
        <Section>
          <SectionName>Daily stats</SectionName>
          //component
        </Section>
      </ContainerDoubleColumn>

      <div>
        <Section>
          <SectionName>My tasks</SectionName>
          //filter //add
        </Section>
      </div>
      <Section>map de tasks divs</Section>
    </div>
  );
};
