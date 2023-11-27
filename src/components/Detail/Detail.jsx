import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Deparments from '../Deparments/Deparments'
import ImageLarge from '../ImageLarge/ImageLarge'

import styles from './Detail.styles'

const Detail = () => {
    
  const useStyles = createUseStyles(styles)
  const classes = useStyles()

  const { objectId } = useParams()
  const [object, setObject] = useState([])
  const title = object.title
  const image = object.primaryImage
  const departments = object.department
  const galleryNumber = object.GalleryNumber

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
      .then((response) => {
        console.log('resolved', response)
        return response.json()
      }).then(data => {
        console.log(data)
        setObject(data)
      }).catch((err) => {
        console.log('reject', err)
      })

  }, [objectId])

  return (
    <div className={classes.container}>
      <Link className={classes.link} to={{ pathname: '/' }}>
        Previous page
      </Link>

      <Link className={classes.linkInf} to={{ pathname: `/detail/${objectId}/moreinfo` }}> More Info</Link>

      <div className={classes.title}>Title:<br/>
        {title}<br /></div>

      {(!objectId || object.artistDisplayName) && (<div className={classes.obj}>
        Name:<br />
        {object.artistDisplayName}
      </div>)}

      {(!objectId || departments) && (<div className={classes.departmentContainer}>Department:<br />
        <Deparments departments={departments} galleryNumber= {galleryNumber} />
      </div>)}

      {objectId ?
        <div className={classes.image}>
          <ImageLarge title={title} image={image} /> </div> : (<div className={classes.noImg}></div>)}
    </div>

  )
}

export default Detail
