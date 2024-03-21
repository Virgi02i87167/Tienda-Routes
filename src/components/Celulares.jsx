import React from "react";
import { CenterInfo } from "../estilos-componentes/styles-comp";
import { ThemeProvider } from "styled-components";
import { Link, Outlet, useParams } from "react-router-dom";
import { Button, theme } from "../estilos-componentes/theme";


const Celulares = () =>{
    const { nameCelular } = useParams();
  
    return(
      <CenterInfo>
        <ThemeProvider theme={theme}>
          <div className="feactures ">
            <h2>Info de Calulares</h2>
            <h3>{nameCelular}</h3>
            <Link to='details'><Button>Ver detalles</Button></Link>
            <Outlet/>
          </div>
        </ThemeProvider>
      </CenterInfo>
    );
  };

export default Celulares;