const Experience = (props)=>{
    return(
       <>
            <div className={`section__side  ${props.topDirection}`}>{props.children}</div>
            <div className={`section__side  ${props.bottomDirection}`}><a href={props.source} rel="noopener noreferrer"  className="card__image" target="_blank"> <img alt="fajal" className="card__image--ac"  src={props.image}/></a></div>

       </>
    )

}
export default Experience