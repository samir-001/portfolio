import { useSelector } from "react-redux/es/hooks/useSelector"
const About = (props)=>{
  const {lng} = useSelector((state)=>state.Setting);
  return(
    <>
    <div className='section about'   id ="about">
    <h1 className={`header__primary mb-2  ${lng === 'ar'? 'ar':""}` }>1. {props.trans("aboutTitle")} </h1>
      <div className={`section__large   ${lng === "ar"? "ar":""}`}>


        {props.trans("aboutInfo")}
        </div>
      <div className='section__small'>

          <div className='image__Style'>
            <img alt="trtr" className="image" src="personal2.jpg"/>
          </div>
        </div>
    </div>
    </>
)}
export default About