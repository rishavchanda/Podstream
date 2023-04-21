import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Signup from '../src/components/Signup.jsx';
import Signin from '../src/components/Signin.jsx';
import OTP from '../src/components/OTP.jsx'

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [SignUpOpen, setSignUpOpen] = useState(false);
  const [SignInOpen, setSignInOpen] = useState(true);


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
    </ThemeProvider>
  );
}

export default App;
