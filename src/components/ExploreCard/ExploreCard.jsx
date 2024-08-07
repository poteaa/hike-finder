import './ExploreCard.css'

export default function ExploreCard({title, rate, description, thumbSrc}) {
    return (
        <div className="explore-card">
            <img src={thumbSrc} className="explore-card__thumbnail"/>
            <p className="explore-card__title">{title}</p>
            <p className="explore-card__rate">{rate}</p>
            <p className="explore-card__description">{description}</p>
        </div>
    )
}