import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import Image from '../Image'
import { Link } from 'react-router-dom'

import styles from './Object.styles'

const Object = ({ objectId }) => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    const [object, setObject] = useState({})

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
            .then((response) => {
                return response.json()
            }).then(data => {
                setObject(data)
            }).catch((err) => {
                console.log('reject', err)
            })
    }, [objectId])

    return (

        <div className={classes.gridContainer}>
            <div className={classes.objectTitle}>Title:<br />
                <div className={classes.title} >
                    <Link className={classes.link} to={{
                        pathname: `/detail/${objectId}`
                    }}>
                        {object.title}
                    </Link>
                </div>
            </div>
            <Link className={classes.link} to={{
                pathname: `/detail/${objectId}`
            }}>
                {object.primaryImage ? (<div className={classes.img}>
                    <Image image={object.primaryImage} />
                </div>) : <p>Image do not exist</p>}
            </Link>
        </div>
    )
}
Object.propTypes = {
    objectId: PropTypes.number.isRequired
}
export default Object
