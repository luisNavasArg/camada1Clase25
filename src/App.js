import './App.css';
import React,{useState} from 'react'
import ThemeContext, { themes } from './context';
import Layout from './components/Layout'
import Menu from './components/Menu'
import Contenido from './components/Contenido'

function App() {
  const [theme,setTheme]=useState(themes.dark);
  const cambiarTemas=()=>{
    
    if(theme === themes.dark)setTheme(themes.light);
    if(theme === themes.light)setTheme(themes.dark);
  }
  return (
    <ThemeContext.Provider value={{theme,cambiarTemas}}>
      <Layout>
      <Menu/>
      <Contenido/>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
