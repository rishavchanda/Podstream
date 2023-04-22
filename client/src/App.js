import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Signup from '../src/components/Signup.jsx';
import Signin from '../src/components/Signin.jsx';
import OTP from '../src/components/OTP.jsx'
import { darkTheme, lightTheme } from './utils/Themes.js'
import Signup from '../src/components/Signup.jsx';
import Signin from '../src/components/Signin.jsx';
import OTP from '../src/components/OTP.jsx'
import Navbar from '../src/components/Navbar.jsx';
import Menu from '../src/components/Menu.jsx';
import Dashboard from '../src/pages/Dashboard.jsx'
import ToastMessage from './components/ToastMessage.jsx';
import Search from '../src/pages/Search.jsx';
import Favourites from '../src/pages/Favourites.jsx';
import Upload from '../src/pages/Upload.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const Podstream = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background: ${({ theme }) => theme.bgLight}
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [SignUpOpen, setSignUpOpen] = useState(false);
  const [SignInOpen, setSignInOpen] = useState(true);
  const { open, message, severity } = useSelector((state) => state.snackbar);
  const [SignUpOpen, setSignUpOpen] = useState(false);
  const [SignInOpen, setSignInOpen] = useState(false);


  const { currentUser } = useSelector(state => state.user);

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
    </ThemeProvider>
    
  );
}

export default App;
