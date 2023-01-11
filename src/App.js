import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav';
import SideLine from './components/sideLine';
import About from './pages/about';
import Header from './pages/header';
import Skills from './pages/skills/skills';
import Experiences from './pages/experiances/experiances';
import Articls from './pages/articls';
import Footer from "./pages/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from "react-i18next"
import arabic from "./langs/arabic"
import english from "./langs/english"
import {useSelector,useDispatch} from "react-redux"



 i18n.use(initReactI18next).init({
 
   resources:{
     ar:{translation:arabic},
     en:{translation:english}

   },
   lng:"en",
   fallbackLng:"en",
   interpolation:{scapeValue:false}


 
})
function App() {


const {t}=  useTranslation()

const [navState,Activating] = useState(false);

const {lng} = useSelector( state => state.Setting ) 

const dispatch = useDispatch()

useEffect(()=> {Aos.init()} ,[])

const toggleNav = ()=> Activating(!navState) 


return (
  <div className="App"> 

    <Nav trans={t} toggleNav= {toggleNav} isActive={navState}/>
    
    <Header  trans={t}></Header>
    
    <About  trans={t}></About>
    
    <Skills trans={t}></Skills>
    
    <Experiences trans={t}></Experiences>

    <Articls trans={t}></Articls>

    <Footer   trans={t}></Footer>

    <div  style={{margin:"2rem"}} className='text--center'>designed by samir nabil</div>

    <SideLine direction="road--R email">
      <a href='#sss'> samir.harg@yahoo.com</a>
    </SideLine>
    
    <SideLine direction="road--L">
      <a className='icon' rel="noopener" target="_blank" href='https://www.facebook.com/samir.aboharg.1'> <FontAwesomeIcon icon={faFacebook} /></a>
      <a  className='icon' rel="noopener" target="_blank" href='https://github.com/samir-001'> <FontAwesomeIcon icon={faGithub} /></a>
      <a  className='icon' rel="noopener" target="_blank" href='https://twitter.com/?lang=ar'> <FontAwesomeIcon icon={faTwitter} /></a>
      <a  className='icon'  rel="noopener" target="_blank" href='https://www.youtube.com/channel/UCfckHmNPqXDFS1qYWTJkoyg'> <FontAwesomeIcon icon={faYoutube} /></a>
    </SideLine>

  </div>

);
}

export default App;
