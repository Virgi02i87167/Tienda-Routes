import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, inverTheme, theme } from "../estilos-componentes/theme";
import { CenterInfo } from "../estilos-componentes/styles-comp";


const Home = () => {
    return(
      <CenterInfo>
          <ThemeProvider theme={theme}>
            <div className="feactures">
              <h2>Bienvenido</h2>
              <p>Somos una tienda online de celulares.</p>
              <ThemeProvider theme={inverTheme}>
                <Link to='/search-page'><Button>Ver Mas</Button></Link>
              </ThemeProvider>
            </div>
        </ThemeProvider>
      </CenterInfo>
    );
};

export default Home;