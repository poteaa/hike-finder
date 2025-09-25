import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getHikeById } from '../../services/api'
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner'
import './HikeDetails.css'

export default function HikeDetails() {
    const { hikeId } = useParams()
    const [hike, setHike] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchHike() {
            try {
                const hikeIdNumber = parseInt(hikeId)
                const foundHike = await getHikeById(hikeIdNumber)
                setHike(foundHike)
            } catch (error) {
                console.error('Error fetching hike:', error)
            } finally {
                setLoading(false)
            }
        }

        if (hikeId) {
            fetchHike()
        }
    }, [hikeId])

    if (loading) {
        return <LoadingSpinner />
    }

    if (!hike) {
        return (
            <section className="container hike-details">
                <div className="hike-details__not-found">
                    <h2>Hike not found</h2>
                    <p>The hike you&apos;re looking for doesn&apos;t exist.</p>
                    <Link to="/" className="hike-details__back-link">
                        ← Back to Home
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="container hike-details">
            <div className="hike-details__header">
                <Link to="/" className="hike-details__back-link">
                    ← Back to Home
                </Link>
                <h1 className="hike-details__title">{hike.name}</h1>
                <p className="hike-details__location">{hike.city}, {hike.country}</p>
            </div>

            <div className="hike-details__content">
                <div className="hike-details__image-container">
                    <img 
                        src={hike.imgSrc} 
                        alt={hike.name}
                        className="hike-details__image"
                    />
                </div>

                <div className="hike-details__info">
                    <div className="hike-details__meta">
                        <div className="hike-details__meta-item">
                            <span className="hike-details__meta-label">Location:</span>
                            <span className="hike-details__meta-value">{hike.city}, {hike.country}</span>
                        </div>
                        <div className="hike-details__meta-item">
                            <span className="hike-details__meta-label">Distance:</span>
                            <span className="hike-details__meta-value">{hike.distance}</span>
                        </div>
                        <div className="hike-details__meta-item">
                            <span className="hike-details__meta-label">Estimated Time:</span>
                            <span className="hike-details__meta-value">{hike.estimated}</span>
                        </div>
                        {hike.difficulty && (
                            <div className="hike-details__meta-item">
                                <span className="hike-details__meta-label">Difficulty:</span>
                                <span className="hike-details__meta-value">{hike.difficulty}</span>
                            </div>
                        )}
                    </div>

                    <div className="hike-details__description">
                        <h3>Description</h3>
                        <p>{hike.description}</p>
                    </div>

                    {hike.detailedDescription && (
                        <div className="hike-details__detailed-description">
                            <h3>More Information</h3>
                            <p>{hike.detailedDescription}</p>
                        </div>
                    )}

                    <div className="hike-details__actions">
                        <button className="hike-details__action-btn hike-details__action-btn--primary">
                            Save Hike
                        </button>
                        <button className="hike-details__action-btn hike-details__action-btn--secondary">
                            Share Hike
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
