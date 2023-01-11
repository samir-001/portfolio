import i18n from "i18next"
import { changeToArabic, changeToEnglish } from "../reducers/setting";
import { useDispatch,useSelector } from "react-redux/es/exports";
const Nav = (props)=>{
    const dispatch = useDispatch();
    const {lng} = useSelector((state)=>state.Setting)
    return(
        <>
        <div className="nav">
           <div className="nav__content">
                <div className="nav__logo">
                    SimpleWeb
                </div>
                <ul className={`nav__links  ${props.isActive ? "active":''}`}>

                    <li className={`nav__link ${ lng === "ar"? "ar":""}`}><a href="#home"  onClick={props.toggleNav}><span>1.</span> {props.trans("home")}</a></li>
                    <li className={`nav__link ${ lng === "ar"? "ar":""}`}><a href="#about"  onClick={props.toggleNav}><span>2.</span> {props.trans("about")}</a></li>
                    <li className={`nav__link ${ lng === "ar"? "ar":""}`}><a  href="#skills"  onClick={props.toggleNav}><span>3.</span> {props.trans("skills")}</a></li>
                    <li className={`nav__link ${ lng === "ar"? "ar":""}`}><a  href="#experiances"  onClick={props.toggleNav}><span>4.</span> {props.trans("experiances")}</a></li>
                    <li className={`nav__link ${ lng === "ar"? "ar":""}`}><a href="#contact"  onClick={props.toggleNav}><span>5.</span> {props.trans("contact")}</a></li>
                        <button className="btn btn-lng" style={{margin:"0",float:"right"}} onClick={()=>{
                                if(lng !== "ar"){
                                    i18n.changeLanguage("ar")
                                    dispatch(changeToArabic())
                                }
                                else{
                                    i18n.changeLanguage("en")
                                    dispatch(changeToEnglish())
                                }
                                }}>{lng !== "ar"?"اللغة: العربية":"language: English"}
                        </button>


                </ul>

           </div>
        </div>
        <div className={`nav-Btn-toggler  ${props.isActive ? "active":''}`} onClick={props.toggleNav}>
        <button  className={`navBtn`}  onClick={props.toggleNav}></button>    
        </div>
</>
    )
}
export default Nav