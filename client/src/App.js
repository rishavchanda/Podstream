import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {darkTheme, lightTheme} from './utils/Themes.js';
import { SearchCard } from "./components/SearchCard.jsx";

function App() {

  const [darkMode, setDarkMode] = useState(true);


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <SearchCard/>
    </ThemeProvider>
    
  );
}

export default App;
