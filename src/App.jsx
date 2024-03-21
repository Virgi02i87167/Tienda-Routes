import React from "react";
import './App.css';
import { Routes, Route,  NavLink as NL} from 'react-router-dom';
import { Header, CenteredCont } from "./estilos-componentes/styles-comp";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";
import NavLink from "./components/NavLink";

function App() {
  return(
    <div>
      <Header>
      <img src="./img/logo.png" width="70px"  alt="" />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de Busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <CenteredCont>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/search-page" element={ <SearchPage />}/>
        <Route path="/celulares/:nameCelular" element={<Celulares />}>
          <Route path="details" element={<CelularDetails />}/>
        </Route>
        <Route path="*" element= {<h1>Page Not Found</h1>}/>
      </Routes>
      </CenteredCont>
    </div>
  );
};
export default App;