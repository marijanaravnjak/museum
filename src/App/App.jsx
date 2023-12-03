import React, { useEffect, useState } from 'react'
import Router from './Router'

function App() {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        Promise.all([

        ]).then(() => {
            setLoading(false)
        })
    }, [])


    return (
        <div>
            <Router loading={loading} />
        </div>
    )
}

export default App
