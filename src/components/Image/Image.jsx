import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import styles from './Image.styles'

const Image = ({ image }) => {
  const useStyles = createUseStyles(styles)
  const classes = useStyles()

  return (
    <div className={classes.imgLook}>
      <img src={image} alt='images'/>
    </div>
  )
}
Image.propTypes = {
  image: PropTypes.string.isRequired
}
export default Image
