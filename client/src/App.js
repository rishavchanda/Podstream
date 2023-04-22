import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {darkTheme, lightTheme} from './utils/Themes.js'
import ArtistCard from "./components/ArtistCard.jsx";
import {Search}  from "./components/Search.jsx";

function App() {

  const [darkMode, setDarkMode] = useState(true);


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div>
      <Search/>
    </div>

    </ThemeProvider>
  );
}

export default App;
