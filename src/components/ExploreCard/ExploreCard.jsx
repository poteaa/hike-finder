import './ExploreCard.css'

export default function ExploreCard({title, rate, description, thumbSrc}) {
    return (
        <div className="explore-card">
            <div className="explore-card__header">
                <div className="explore-card__thumbnail-container">
                    <img src={thumbSrc} className="explore-card__thumbnail"/>
                </div>
                <div>
                    <p className="explore-card__title">{title}</p>
                    <p className="explore-card__rate">{rate}</p>
                </div>
            </div>
            <p className="explore-card__description">{description}</p>
        </div>
    )
}