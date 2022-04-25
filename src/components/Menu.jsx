import React, { useContext } from 'react';
import ThemeContext from '../context';
const Menu=()=>{
    const {theme, cambiarTemas} = useContext(ThemeContext);
    return(
        <div>
            <p>Inicio</p>
            <button
            onClick={cambiarTemas}
            style={{background:theme.background, color:theme.font}}
            >Cambiar Tema</button>
        </div>
    )

}
export default Menu;