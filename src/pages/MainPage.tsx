import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Menu } from "../components/Menu/Menu";
import { MyTasks } from "../components/My Tasks/MyTasks";
import { Statistics } from "../components/Statistics/Statistics";
import { Task } from "../components/Task/Task";
import { Container, Main } from "./styles";

export function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <Main>
          <Routes>
            <Route path="/mytasks" element={<MyTasks />} />
            <Route path="/task" element={<Task />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </Main>
      </Container>
    </>
  );
}
