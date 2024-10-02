import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../components/layout/Layout'

import './Home.css'
import HikeCard from '../../components/HikeCard/HikeCard'
import { getHikes, getHikesByCity } from '../../services/api'

export default function Home() {
    const [hikes, setHikes] = useState([])
    const [city, setCity] = useState('')
    const {search} = useContext(AppContext)

    useEffect(() => {
        async function fetchData() {
            let data
            let city
            if (search) ([data, city] = await getHikesByCity(search))
            else data = await getHikes()
            city ? setCity(city) : setCity('')
            setHikes(data)
        }
        fetchData()
    }, [search])

    return (
        <section className="container">
            {hikes && hikes.length &&
                <>
                    <h2 className="subtitle">{search ? `Hikes near ${city}` : 'Hikes'}</h2>
                    <div className="hikes">{
                        hikes.map((hike, index) => 
                            <HikeCard
                                invert = {index%2}
                                {...hike}
                                key={hike.id}
                            />
                        )}
                </div></>
            }
            {!hikes && search &&
                <h2 className="subtitle text-center">No results found for <span className="error-text">{search}</span></h2>
            }
        </section>
    )
}