import Articlcard from "../components/articlCard";
const Articls = (props)=>(
    <div className='section articls ' id="articls"  data-aos="fade-up" >
    <h1 className='header__primary text--center mb-2'> 3. {props.trans("articls")}</h1>
    <div className='col-1-of-3'><Articlcard title="The Two Pillars of JavaScript" /></div>
    <div className='col-1-of-3'><Articlcard title="use Inheritance in JavaScript"/></div>
    <div className='col-1-of-3'><Articlcard title="how to use closure in JavaScript"/></div>
  </div>

)

export default Articls;