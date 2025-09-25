import './ExploreCard.css'

// eslint-disable-next-line react/prop-types
export default function ExploreCard({title, difficulty, rate, numberOfRates, description, thumbSrc}) {
    return (
        <div className="explore-card">
            <div className="explore-card__header">
                <div className="explore-card__thumbnail-container">
                    <img src={thumbSrc} className="explore-card__thumbnail"/>
                </div>
                <div>
                    <p className="explore-card__title">{title}</p>
                    <p className="explore-card__rate">
                        <span>{difficulty}</span>
                        <img src="/src/assets/star-solid.png" className="explore-card__rate-icon"/>
                        <span>{rate}</span>
                        <span>({numberOfRates})</span>
                    </p>
                </div>
            </div>
            <p className="explore-card__description">{description}</p>
        </div>
    )
}
