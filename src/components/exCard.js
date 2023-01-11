import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useTranslation} from "react-i18next"
import { useSelector } from "react-redux/es/hooks/useSelector"
const ExCard = (props)=>{
    const{t}=useTranslation()
    const{lng} = useSelector((state)=>state.Setting)
    return(
    <div className="card">
        <p className={`header__degital ${lng === "ar" ? "ar-font" :""}`}>{t("feacheredProject")}</p>
        <h1 className={`header__primary mb-3 ${lng === "ar" ? "ar-font" :""}`}  >{t(props.title)}</h1>
        <div className={`card__content  mb-3 ${lng === "ar" ? "ar" :""}`}>{t(props.content)}  <a href={`${props.source}`}   rel=" noreferrer"  target="_blank" > {t("visit")} </a></div>
        <ul className="card__tags mb-3">

            <li className="card__tag">html5</li>
            <li className="card__tag">css3</li>
         
        </ul>
        <div className="icon">
            <a href={`${props.source}`}  rel=" noreferrer" className="excard--icon" ><FontAwesomeIcon icon={faFaceAngry}></FontAwesomeIcon></a>
            <a href={`${props.source}`}   rel=" gridnoreferrer"  className="excard--icon"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
    </div>
)}
export default ExCard