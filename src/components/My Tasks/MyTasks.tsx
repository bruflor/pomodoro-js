import { Section, ContainerDoubleColumn } from "../My Tasks/styles";
import { Title } from "../Title/Title";

export const MyTasks = () => {
  return (
    <div>
      <ContainerDoubleColumn>
        <Section>
          <Title name="Recent tasks" />
          //component
        </Section>
        <Section>
          <Title name="Daily stats" />
          //component
        </Section>
      </ContainerDoubleColumn>

      <div>
        <Section>
          <Title name="My tasks" />
          //filter //add
        </Section>
      </div>
      <Section>map de tasks divs</Section>
    </div>
  );
};
