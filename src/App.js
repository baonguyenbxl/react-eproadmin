import './App.css';
import { Banner } from "./header/banner/banner";
import { Menu } from "./body/menu/menu"
import { Main} from "./body/main/main"
import { useState, createContext } from "react";
export const MainComposant = createContext();
export const SetMainComposant = createContext();

function App ()
{
  const [jsx,setJsx]=useState(<></>)
  return (
    <MainComposant.Provider value={jsx}>
    <SetMainComposant.Provider value={ setJsx }>
      <div className="App">
        <Banner />
        <Menu />
        <Main />
      </div>
      </SetMainComposant.Provider>
    </MainComposant.Provider>
  );
}

export default App;
