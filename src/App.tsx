import { Route, Routes } from "react-router-dom";
import { MyTasks } from "./components/My Tasks/MyTasks";
import { Statistics } from "./components/Statistics/Statistics";
import { Task } from "./components/Task/Task";
import { MainPage } from "./pages/MainPage";
import { WelcomePage } from "./pages/WelcomePage";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/login" element={<WelcomePage />} />
          <Route path="/" element={<MainPage />}>
            <Route path="/mytasks" element={<MyTasks />} />

            <Route path="/task" element={<Task />} />
            <Route path="/statistics" element={<Statistics />} />
          </Route>

          {/* <Route path="/:taskname" element={<Task />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
