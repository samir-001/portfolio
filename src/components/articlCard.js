import { faFolder, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Articlcard = (props)=>(
    <div className="article-card" >
        < div className="article-card__icon ">
            <a className="article-card__icon--folder"><FontAwesomeIcon icon={faFolder} /> </a>
            <a className="article-card__icon--link"><FontAwesomeIcon icon={faLink} /> </a>
        </div>
        <h1 className="header__primary mb-2">{props.title}</h1>
        <p className="mb-2">
            soooon...
        </p>
        <ul className="article-card__tags">
            <li  className="article-card__tag">react</li>
            <li  className="article-card__tag">html</li>
            <li  className="article-card__tag">css</li>
            <li  className="article-card__tag">sass</li>

        </ul>
    </div>
)
export default Articlcard