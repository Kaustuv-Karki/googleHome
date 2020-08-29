import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)
    
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                {/* KEy : AIzaSyCraSvGw46w0ycWJLucZa9hBUhFFG2VKfM */}
            </div>
            <div className="serchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
