import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import styles from './MoreInfo.styles'

export default function MoreInfo() {

  const useStyles = createUseStyles(styles)
  const classes = useStyles()

  const { objectId } = useParams()
  const [object, setObject] = useState({})

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
    console.log('moreInfo')
  }, [objectId])

  return (
    <><div >
      <Link className={classes.link} to={{ pathname: '/'}}>
        Back To Home Page
      </Link>
    </div>
    <div className={classes.info}>

      <div className={classes.titleInfo}>More Info</div>

      <p><span className={classes.span}>GalleryNumber:</span><br/>
        <span className={classes.objSpan}>{object.GalleryNumber}</span></p>
      <p><span className={classes.span}>accessionNumber:</span><br />
        <span className={classes.objSpan}>{object.accessionNumber}</span></p>
      <p><span className={classes.span}>accessionYear:</span><br />
        <span className={classes.objSpan}>{object.accessionYear}</span></p>
      <p><span className={classes.span}>additionalImages:</span><br />
        <span className={classes.objSpan}>{object.additionalImages}</span></p>
      <p><span className={classes.span}>artistAlphaSort:</span><br />
        <span className={classes.objSpan}>{object.artistAlphaSort}</span></p>
      <p><span className={classes.span}>artistBeginDate:</span><br />
        <span className={classes.objSpan}>{object.artistBeginDate}</span></p>
      <p><span className={classes.span}>artistDisplayBio:</span><br />
        <span className={classes.objSpan}>{object.artistDisplayBio}</span></p>
      <p><span className={classes.span}>artistDisplayName:</span><br />
        <span className={classes.objSpan}>{object.artistDisplayName}</span></p>
      <p><span className={classes.span}>artistEndDate:</span><br />
        <span className={classes.objSpan}>{object.artistEndDate}</span></p>
      <p><span className={classes.span}>artistGender:</span><br />
        <span className={classes.objSpan}>{object.artistGender}</span></p>
      <p><span className={classes.span}>artistNationality:</span>
        <br /><span className={classes.objSpan}>{object.artistNationality}</span></p>
      <p><span className={classes.span}>artistPrefix:</span><br />
        <span className={classes.objSpan}>{object.artistPrefix}</span></p>
      <p><span className={classes.span}>artistRole:</span><br />
        <span className={classes.objSpan}>{object.artistRole}</span></p>
      <p><span className={classes.span}>artistSuffix:</span><br />
        <span className={classes.objSpan}>{object.artistSuffix}</span></p>
      <p><span className={classes.span}>artistULAN_URL:</span><br />
        <span className={classes.objSpan}>{object.artistULAN_URL}</span></p>
      <p><span className={classes.span}>artistWikidata_URL:</span><br />
        <span className={classes.objSpan}>{object.artistWikidata_URL}</span></p>
      <p><span className={classes.span}>city:</span><br />
        <span className={classes.objSpan}>{object.city}</span></p>
      <p><span className={classes.span}>classification:</span><br />
        <span className={classes.objSpan}>{object.classification}</span></p>
      <p><span className={classes.span}>county:</span><br />
        <span className={classes.objSpan}> {object.county}</span></p>
      <p><span className={classes.span}>creditLine:</span><br />
        <span className={classes.objSpan}> {object.creditLine}</span></p>
      <p><span className={classes.span}>culture:</span> <br />
        <span className={classes.objSpan}>{object.culture}</span></p>
      <p><span className={classes.span}>department:</span><br />
        <span className={classes.objSpan}> {object.department}</span></p>
      <p><span className={classes.span}>dimensions:</span><br />
        <span className={classes.objSpan}> {object.dimensions}</span></p>
      <p><span className={classes.span}>dynasty:</span><br />
        <span className={classes.objSpan}> {object.dynasty}</span></p>
      <p><span className={classes.span}>excavation:</span><br />
        <span className={classes.objSpan}> {object.excavation}</span></p>
      <p><span className={classes.span}>geographyType:</span><br />
        <span className={classes.objSpan}> {object.geographyType}</span></p>
      <p><span className={classes.span}>isHighlight:</span> <br />
        <span className={classes.objSpan}>{object.isHighlight}</span></p>
      <p><span className={classes.span}>isPublicDomain:</span><br />
        <span className={classes.objSpan}>{object.isPublicDomain}</span></p>
      <p><span className={classes.span}>isTimelineWork:</span> <br />
        <span className={classes.objSpan}>{object.isTimelineWork}</span></p>
      <p><span className={classes.span}>linkResource: </span><br />
        <span className={classes.objSpan}>{object.linkResource}</span></p>
      <p><span className={classes.span}>locale:</span><br />
        <span className={classes.objSpan}> {object.locale}</span></p>
      <p><span className={classes.span}>locus:</span><br />
        <span className={classes.objSpan}> {object.locus}</span></p>
      <p><span className={classes.span}>medium:</span><br />
        <span className={classes.objSpan}>{object.medium}</span></p>
      <p><span className={classes.span}>metadataDate:</span> <br />
        <span className={classes.objSpan}>{object.metadataDate}</span></p>
      <p><span className={classes.span}>objectBeginDate:</span><br />
        <span className={classes.objSpan}> {object.objectBeginDate}</span></p>
      <p><span className={classes.span}>objectDate:</span> <br />
        <span className={classes.objSpan}>{object.objectDate}</span></p>
      <p><span className={classes.span}>objectEndDate:</span><br />
        <span className={classes.objSpan}> {object.objectEndDate}</span></p>
      <p><span className={classes.span}>objectID:</span><br />
        <span className={classes.objSpan}>{object.objectID}</span></p>
      <p><span className={classes.span}>objectName:</span><br />
        <span className={classes.objSpan}>{object.objectName}</span></p>
      <p><span className={classes.span}>objectURL:</span><br />
        <span className={classes.objSpan}> {object.objectURL}</span></p>
      <p><span className={classes.span}>objectWikidata_URL:</span><br />
        <span className={classes.objSpan}> {object.objectWikidata_URL}</span></p>
      <p><span className={classes.span}>period: </span><br />
        <span className={classes.objSpan}>{object.period}</span></p>
      <p><span className={classes.span}>portfolio:</span><br />
        <span className={classes.objSpan}> {object.portfolio}</span></p>
      <p><span className={classes.span}>primaryImage: </span><br />
        <span className={classes.objSpan}>{object.primaryImage}</span></p>
      <p><span className={classes.span}>primaryImageSmall:</span><br />
        <span className={classes.objSpan}> {object.primaryImageSmall}</span></p>
      <p><span className={classes.span}>region:</span><br />
        <span className={classes.objSpan}> {object.region}</span></p>
      <p><span className={classes.span}>reign: </span><br />
        <span className={classes.objSpan}>{object.reign}</span></p>
      <p><span className={classes.span}>repository:</span> <br />
        <span className={classes.objSpan}>{object.repository}</span></p>
      <p><span className={classes.span}>rightsAndReproduction:</span><br />
        <span className={classes.objSpan}> {object.rightsAndReproduction}</span></p>
      <p><span className={classes.span}>river:</span><br />
        <span className={classes.objSpan}>{object.river}</span></p>
      <p><span className={classes.span}>state:</span><br />
        <span className={classes.objSpan}> {object.state}</span></p>
      <p><span className={classes.span}>subregion:</span><br />
        <span className={classes.objSpan}> {object.subregion}</span></p>
      <p><span className={classes.span}>title:</span><br />
        <span className={classes.objSpan}> {object.title}</span></p>
    </div></>

  )
}
