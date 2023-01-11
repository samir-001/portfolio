import {  useMemo, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Skills = (props)=>{

const {lng} = useSelector((state)=>state.Setting);
const [activelink,setActiveLink] = useState("react")
const [indecator,setIndecator] = useState();
const SKILL_OBG =  {
    
    react:props.trans("reactDesc"),
    redux:props.trans("reduxDesc"),
    axios:props.trans("axiosDesc"),
    sass:props.trans('sassDesc'),
    
}
const [skills] = useState(SKILL_OBG)


const removeActiveLink =()=>{
    var links = document.getElementsByClassName("sidebar__link")
   return Array.from(links).forEach((el) => el.classList.remove("active"))
}

const nav = useMemo(()=>{
    const links = Object.keys(skills)
    .map((element,i) => <li key={i} id={element} className={`sidebar__link ${element === "react"? "active":""}`} onClick={(e)=>{

        removeActiveLink() 
        e.target.classList.add("active")
        switch(e.target.id){
            case "react":
                setIndecator("0%");
                break;
            case "redux":
                setIndecator("25%");
                break;
            case "axios":
                setIndecator("50%");
                break;
            case"sass":
                
                setIndecator("75%");
                console.log(indecator)
                break;
            default:
                setIndecator("0%")
        }
        
         setActiveLink(element)}} >{element}</li>)
    return links
},[skills])
    
return(
    <>
    <div className="sidebar section" id="skills" data-aos="fade-up">
    <div className="sidebar__container">
    <h1 className={`header__primary  mb-2 ${lng ==="ar" ?"ar":''}`}>2. {props.trans("skills")} </h1>
        <ul className={`sidebar__nav ${lng ==="ar" ?"ar":''}`}>
        <div className={`sidebar__indecator ${lng ==="ar" ?"ar":''}` }> <div style={{top:indecator}} className = "sidebar__indecator--d"></div></div>
            {nav}

        </ul>
        <div className={`sidebar__content  ${lng ==="ar" ?"ar":''}` }> {SKILL_OBG[activelink]}</div>
        </div>
    
    </div>
    </>

)
}

export default Skills