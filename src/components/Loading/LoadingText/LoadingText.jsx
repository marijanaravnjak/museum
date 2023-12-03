import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import styles from './LoadingText.styles'

const useStyles = createUseStyles(styles)

const LoadingText = () => {

    const classes = useStyles()

    return (
        <div className={classes.containerWrapper}>
            <div className={classes.animatedBackground}>
                <div className={classNames(classes.background, classes.btn)}></div>
            </div>
        </div>
    )
}

export default LoadingText
