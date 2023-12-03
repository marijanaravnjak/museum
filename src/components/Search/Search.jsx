import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Object from '../Object/Object'

import styles from './Search.styles'

const Search = () => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    const [search, setSearch] = useState('')
    const [results, setResults] = useState({ total: 0, objectIDs: [] })

    const getApiData = async () => {
        let response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=${search}`
        )
        response = await response.json()
        console.log(response)
        setResults({
            total: response.total,
            objectIDs: response.objectIDs?.slice(0, 5)
        })
    }

    useEffect(() => {
        getApiData()
    }, [search])

    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.value.length >= 5) {
            setSearch(event.target.value)
        }
    }

    return (
        <div className={classes.searchContainer} >
            <input className={classes.searchInput} type='text' placeholder='Search Sunflower'
                onChange={handleChange}
            />
            <div className={classes.searchObj}>
                {results.objectIDs && results.objectIDs.map((objectId) => (
                    <Object key={objectId} objectId={objectId} />
                ))}</div>
        </div>

    )
}
export default Search
