import { useSelector } from "react-redux"
import { useRef } from "react"
const Header = (props)=>{
  const dec = useRef()
  const {lng}= useSelector((state)=>state.Setting)
return(
    <div className={`section header ${lng === "ar" ? "ar":"" }` }id="home">
    <div className='section__lonely header'>
      <p className={`header__degital mb-1 ${lng === "ar" ? "ar":"" }`}>{props.trans("welcome")}</p>
      <h1  className={`header__main headerColor--main ${lng === "ar" ? "ar":"" }`}>{props.trans("name")}</h1>
      <h2 className={`header__main headerColor--primary ${lng === "ar" ? "ar":"" }`}>{props.trans("title")}</h2>
      <p ref={dec} className={`header__text ${lng === "ar" ? "ar":"" }`}>
          {props.trans("describe")}

      </p>
      <a href="#ss" className={`btn ${lng === "ar" ? "ar":"" }`}> {props.trans("viewArticles")}</a>
    </div>
  </div>
)
}
export default Header