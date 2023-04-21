import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {darkTheme, lightTheme} from './utils/Themes.js'

function App() {

  const [darkMode, setDarkMode] = useState(true);


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>Start</>
    </ThemeProvider>
  );
}

export default App;
