import ExploreCard from "../../components/ExploreCard/ExploreCard"

import './Explore.css'

export default function Explore() {
    return (
        <section className="explore container">
            <h2 className="subtitle">Explore Curated Trails Near You</h2>
            <div className="explore_content">
                <div className="explore__list">
                    <ExploreCard
                        title="Tryon Creek State Area"
                        rate="Moderate 4.5 (428)"
                        description="670-acre forested area along a ravine with well-maintained trails for hikers, horses & leashed dogs."
                        thumbSrc="/src/assets/explore-1.png"
                    />
                    <ExploreCard
                        title="Marquam Nature Park"
                        rate="Easy 4.3 (432)"
                        description="193 acres of undeveloped land & over 5 miles of hiking trails with forested scenic views."
                        thumbSrc="/src/assets/explore-2.png"
                    />
                    <ExploreCard
                        title="Wildwood Trail Area"
                        rate="Easy 4.0 (207)"
                        description="The Wildwood Trail starts at the Vietnam Memorial adjacent to the Oregon Zoo and World Forestry Center and circles uphill."
                        thumbSrc="/src/assets/explore-3.png"
                    />
                </div>
                <div className="explore__map">
                    <iframe
                        width="600"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAguDMogQCf1IDH5-t2i4wmaUWdN0tur-A
                            &q=Space+Needle,Seattle+WA">
                        </iframe>
                </div>
            </div>
        </section>
    )
}