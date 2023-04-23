import { ThemeProvider } from "styled-components";
import { useState } from "react";
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
import Profile from '../src/pages/Profile.jsx';
import Podcasts from '../src/pages/Podcasts.jsx'
import Upload from '../src/components/Upload.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import styled from 'styled-components';
import AudioPlayer from "./components/AudioPlayer.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

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
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const { open, message, severity } = useSelector((state) => state.snackbar);
  const [SignUpOpen, setSignUpOpen] = useState(false);
  const [SignInOpen, setSignInOpen] = useState(false);
  const [uploadOpen,setUploadOpen] = useState(false);
  const [videoOpen,setVideoOpen] = useState(false);


  const { currentUser } = useSelector(state => state.user);

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <BrowserRouter>
        {SignInOpen && <Signin setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />}
        {SignUpOpen && <Signup setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />}
        {uploadOpen && <Upload setUploadOpen={setUploadOpen} />}
        {videoOpen && <VideoPlayer setVideoOpen={setVideoOpen} />}
        <Podstream>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} setUploadOpen={setUploadOpen} setSignInOpen={setSignInOpen}/>
          <Frame>
            <Navbar setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />
            <Routes>
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/search' exact element={<Search />} />
              <Route path='/favourites' exact element={<Favourites />} />
              <Route path='/profile' exact element={<Profile />} />
              <Route path='/podcasts/:id' exact element={<Podcasts />} />

            </Routes>
          </Frame>
          <AudioPlayer/>

          {open && <ToastMessage open={open} message={message} severity={severity} />}
        </Podstream>

      </BrowserRouter>

    </ThemeProvider>
    
  );
}

export default App;
