import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

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
  console.log(openModal)
  return (
      <Router>
        <NavBar />
        <Body>
          <HeroSection/>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
  );
}

export default App;
