import { Header } from "./components/header/Header";
import { Menu } from "./components/Menu/Menu";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
