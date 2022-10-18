import './App.css';
import { Banner } from "./header/banner/banner";
import { Menu } from "./body/menu/menu"
import { Main} from "./body/main/main"
function App() {
  
  return (
    <div className="App">
      <Banner />
      <Menu />
    <Main />
    </div>
  );
}

export default App;
