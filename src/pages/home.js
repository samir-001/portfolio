import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = (props) => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (  
        <div>
          
  
        </div>
    );
}
 
export default Home;

<div className='section'>
        <div className='section__lonely'>
          <h1 className='header__degital '> what is next</h1>
          <h1 className='header__primary mb-1'> get in touch</h1>
          <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!

</p>
          <a   className='btn' href='#2222'>Send Email</a>
        </div>
      </div>