import { useRef, useCallback } from 'react'
import { debounce } from '../../../utils'
import './Search.css'

// eslint-disable-next-line react/prop-types
export default function Search({searchCb}) {
    const search = useRef('')

    // Debounced search function
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSearch = useCallback(
        debounce((value) => {
            searchCb(value)
        }, 500), // 500ms delay
        [searchCb]
    )

    const handleInput = (event) => {
        const value = event.target.value
        search.current = value
        debouncedSearch(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCb(search.current)
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <div className="search__input-container">
                    <span className="search__icon">🔍</span>
                    <input
                        type="text"
                        onInput={handleInput}
                        placeholder="Search by city"
                        className="search__criteria" />
                </div>
            </form>
        </div>
    )
}
