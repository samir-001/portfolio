import Experience from "./experiance.js"
import ExCard from "../../components/exCard.js"

const Experiences = (props)=>{
    return(
        <>
        <div className = "section experiance"  id = "experiances"data-aos="fade-up">


        <Experience  topDirection= "section__side--topR " bottomDirection="section__side--bottomL"  image={"edgeledger.jpg"} source="https://samir-001.github.io/EdgeLedger/">
           <ExCard  source='https://samir-001.github.io/EdgeLedger/' title="Edgeledger" content="EdgeledgerDesc" tran={props.trans}></ExCard>
        </Experience>
        </div>
            <div className = "section experiance" data-aos="fade-up">
        <Experience topDirection= "section__side--topL" bottomDirection="section__side--bottomR" image={"hotel.jpg"} source='https://samir-001.github.io/EdgeLedger/' >
        <ExCard  title="Hotel" source='https://samir-001.github.io/EdgeLedger/' content="hotelDesc" ></ExCard>
        </Experience>
        </div>
        </>
    )

}
export default Experiences