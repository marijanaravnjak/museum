import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import styles from './ImageLarge.styles'

const ImageLarge = ({ image }) => {
  const useStyles = createUseStyles(styles)
  const classes = useStyles()

  return (
    <div className={classes.imgLarge}>
      <img src={image}  alt='images'/>
    </div>
  )
}
ImageLarge.propTypes = {
  image: PropTypes.string
}
ImageLarge.defaultProps = {
  image: ''
}
export default ImageLarge
