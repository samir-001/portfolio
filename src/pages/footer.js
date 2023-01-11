import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';

const Footer = (props) => {
  const {lng} = useSelector((state)=> state.Setting )
  
    return (  
      <div className='section footer' id="contact" data-aos="fade-up">
      <div className={`section__lonely footer ${lng === "ar"? "ar-font": ""}`}>
        <h1 className={`header__degital footer ${lng === "ar"? "ar-font": ""}`}> {props.trans("whatIsNext")}</h1>
        <h1 className={`header__primary footer mb-1 ${lng === "ar"? "ar-font": ""}`}> {props.trans("contactWithUs")}</h1>
        <p>{props.trans("contactUsDesc")}</p>
        <a   className='btn' href='#2222'>{props.trans("contactNow")}</a>
      </div>
    </div>
    );
}
 
export default Footer;


