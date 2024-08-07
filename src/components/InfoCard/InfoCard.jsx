import './InfoCard.css'

export default function InfoCard({children, iconSrc, title}) {
    return (
        <div className="info-card">
            <div className="info-card__icon-container">
                <img src={iconSrc} className="info-card__icon" />
                </div>
            <p className="info-card__title">{title}</p>
            <p className="info-card__text">
                {children}
            </p>
        </div>
    )
}