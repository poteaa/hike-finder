import { useRef } from 'react'
import './Search.css'

export default function Search({searchCb}) {
    const search = useRef('')

    // const debounce = (event, delay) => {
    //     let timer
    //     return function(...args) {
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             setSearch(args[0].target.value)
    //         }, delay);
    //     }
    // }

    const hadleInput = (event) =>  {
        search.current = event.target.value
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCb(search.current)
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onInput={hadleInput}
                    placeholder="Search by city"
                    className="search__criteria" />
                <div className="search__btn-container">
                    <button className="search__btn" >SEARCH</button>
                </div>
            </form>
        </div>
    )
}
