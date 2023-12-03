import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import Deparments from '../Deparments/Deparments'
import ImageLarge from '../ImageLarge/ImageLarge'

import styles from './Detail.styles'

const Detail = () => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    const { objectId } = useParams()
    const [object, setObject] = useState([])
    const [loading, setLoading] = useState(true)
    const title = object.title
    const image = object.primaryImage
    const departments = object.department
    const galleryNumber = object.GalleryNumber

    const getApiData = async () => {
        let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
        response = await response.json()
        console.log(response)
        setObject(response)
    }
    useEffect(() => {
        getApiData()
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [objectId])

    return (
        <>
            <div className={classes.container}>
                <Link
                    className={classes.link}
                    to={{ pathname: '/' }}>
                    Previous page
                </Link>
                <Link
                    className={classes.linkInf}
                    to={{ pathname: `/detail/${objectId}/moreinfo` }}>
                    More Info
                </Link>
                {loading ?
                    (<div><Loading /> </div>) :
                    (<><div className={classes.title}>Title:<br />
                        {title}<br /></div><div> {(!objectId || object.artistDisplayName) && (<div className={classes.obj}>
                            Name:<br />
                            {object.artistDisplayName}
                        </div>)}
                        </div><div> {(!objectId || departments) && (<div className={classes.departmentContainer}>Department:<br />
                            <Deparments departments={departments} galleryNumber={galleryNumber} />
                        </div>)}
                        </div><div>  {objectId ?
                            <div className={classes.image}>
                                <ImageLarge title={title} image={image} /> </div> : (<div className={classes.noImg}></div>)}
                        </div></>)}
            </div ></>

    )
}

export default Detail