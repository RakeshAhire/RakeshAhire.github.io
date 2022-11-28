
import { Navbar } from './Components/Navbar';
import {AutoPlay} from './Components/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
// import './App.css';
import { useContext, useRef } from 'react';
import { AppContext } from './Context/theme.jsx';

import {  Box } from '@chakra-ui/react';
import Project from './Pages/Project'; 
import Github from './Pages/Github';
function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null)
  const {Theme} = useContext(AppContext);

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  const dark = {
    backgroundColor : 'black',
    color : 'white'
  }

  const HandleScrollToDefault = ( ) =>{
    window.scrollTo({
      top : document.documentElement.scrollHeight,
      behavior : 'smooth'
    })
  }

  const HandleScrollTo = (ref) =>{
    // console.log("Rakesh")
    window.scrollTo({
      top : ref.current.offsetTop,
      behavior : 'smooth'
    })
  };
  return (
    <div className="App" style={Theme ==='light'? light : dark} >
      <Navbar 
      ProfileRef={( ) =>HandleScrollTo(ProfileRef)} 
      AboutRef={( )=> HandleScrollTo(AboutRef)} 
      SkillsRef={( ) => HandleScrollTo(SkillsRef)}
      ProjectsRef={( ) => HandleScrollTo(ProjectRef)}
      ContactRef={( ) => HandleScrollTo(ContactRef)}
      />    

     <Box ref={ProfileRef}>
      <Home/>
     </Box>

     <Box mt={{base : '0%', md: '7%'}} ref={AboutRef}>
      <About/>
     </Box>

     <Box mt={{base : '10%', md : '7%', lg : '5%' }} ref={SkillsRef}>
      <AutoPlay/>
     </Box>

     <Box mt={{base : '10%', md : '7%', lg : '5%' }} ref={ProjectRef}>
      <Project/>
     </Box>
     <Box mt={{base : '10%', md : '7%', lg : '5%' }} >
      <Github />
     </Box>

     <Box mt={{base : '7%', md : '7%', lg : '5%' }} ref={ContactRef}>
      <Contact/>
     </Box>
    </div>
  );
}


// style={{
//   backgroundImage: `url("https://www.futurelegis.com.br/static/media/home_background.de61952f.png")`
//   , backgroundRepeat: "no-repeat",backgroundSize: "cover", height: '400px', width: '100%'
// }}
export default App;
