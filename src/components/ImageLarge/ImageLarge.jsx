import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import styles from './ImageLarge.styles'

const ImageLarge = ({ image }) => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <div className={classNames(classes.imgLarge, classes.noImg)}>
            <img src={image} alt='' />
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
