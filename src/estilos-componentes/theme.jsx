import styled from "styled-components";


export const colors = {
    primary: 'blue',
    secondary: 'darkgray',
    danger: 'red',
    warning: 'yellow',
    rosado: '#c61d56a',
    gris: '#333',
    ligh: '#dff5ff',
    aq: '#c39898',
    aqu: '#22a2de'
};

export const theme = {
    fg: '#BF4F74',
    bg: '#dff5ff'
};

export const inverTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg
});

export const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin: 0;
    padding: 9.25em, 1em;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 1em;
`;