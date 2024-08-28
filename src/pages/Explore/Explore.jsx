import ExploreCard from "../../components/ExploreCard/ExploreCard"

import './Explore.css'

export default function Explore() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    return (
        <section className="explore container">
            <h2 className="subtitle explore__subtitle">Explore Curated Trails Near You</h2>
            <div className="explore__content">
                <div className="explore__list">
                    <ExploreCard
                        title="Tryon Creek State Area"
                        difficulty="Moderate"
                        rate="4.5"
                        numberOfRates="428"
                        description="670-acre forested area along a ravine with well-maintained trails for hikers, horses & leashed dogs."
                        thumbSrc="/src/assets/explore-1.png"
                    />
                    <ExploreCard
                        title="Marquam Nature Park"
                        difficulty="Easy"
                        rate="4.3"
                        numberOfRates="432"
                        description="193 acres of undeveloped land & over 5 miles of hiking trails with forested scenic views."
                        thumbSrc="/src/assets/explore-2.png"
                    />
                    <ExploreCard
                        title="Wildwood Trail Area"
                        difficulty="Easy"
                        rate="4.0"
                        numberOfRates="207"
                        description="The Wildwood Trail starts at the Vietnam Memorial adjacent to the Oregon Zoo and World Forestry Center and circles uphill."
                        thumbSrc="/src/assets/explore-3.png"
                    />
                </div>
                <div className="explore__map">
                    {apiKey ? (
                        <iframe
                            width="600"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Space+Needle,Seattle+WA`}>
                        </iframe>
                    ) : (
                        <p>Google Maps API key not found. Please add your API key to the .env file.</p>
                    )}
                </div>
            </div>
        </section>
    )
}