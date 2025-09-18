import { Link } from 'react-router-dom'
import './HikeCard.css'

export default function HikeCard({name, distance, estimated, description, imgSrc, invert}) {
    return (
        <article className={`hike-card ${invert ? 'invert': ''}`}>
            <div className="hike-card__img-container">
                <img src={imgSrc} className="hike-card__image" />
            </div>
            <div className="hike-card__text">
                <h3 className="hike-card__title">{name}</h3>
                <p className="hike-card__info">{`Length: ${distance} - Est. ${estimated}`}</p>
                <p className="hike-card__description">{description}</p>
                <Link to="/" className="hike-card__learn-more">LEARN MORE</Link>
            </div>
        </article>
    )
}
