import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
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

          <Toaster/>
              <Router isLoading={loading} />
    
    </div>
  );
}

export default App;
