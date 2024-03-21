import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";


// export const Buttonn = styled.button`
//     background: ${colors.ligh};
//     border-radius: 3px;
//     border: 2px solid ${colors.rosado};
//     color: ${colors.rosado};
//     font-size: 0.9em;
//     margin: 0 ;
//     padding: 0.25em 1em;
//     margin-bottom: 0.9em;
//     cursor: pointer;
// `;

export const Header = styled.header`
  display: flex;
  background-color: ${colors.gris};
  color: ${colors.ligh};
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const BtnLink = styled.button`
    background-color: ${colors.aq};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0.5em;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    margin-right: 0.7em;
    margin-top: 0.7em;
`;

export const DetailsCont = styled.div`
    background-color: ${colors.aqu};
    padding: 0.5em;
    border-radius: 10px;
    margin-top: 1em;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    h3,h4{
        color:  #333;
    }
`;

export const CenteredCont = styled.div`
    height:  90%;
    width: 79%;
    margin: 0 auto;
`;

export const CenterInfo = styled.div`
    justify-content: center;
    text-align: center;

    ul li {
        display: inline-block;
    }
`;