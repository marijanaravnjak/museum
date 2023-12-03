import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import styles from './Image.styles'

const Image = ({ image }) => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (

        <div className={classNames(classes.imgLook, classes.noImg)}>
            <img src={image} alt='' />
        </div>
    )
}
Image.propTypes = {
    image: PropTypes.string.isRequired
}
export default Image
