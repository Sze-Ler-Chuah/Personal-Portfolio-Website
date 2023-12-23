import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Project from './components/Project';


const Body = styled.div`;
  width : 100%;
  height : 100%;
  overflow-x : hidden;
  `;

const Wrapper = styled.div`
  width: 100%;
  
`


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme = {darkTheme}>
      <Router>
        <NavBar />
        <Body>
          <HeroSection/>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
