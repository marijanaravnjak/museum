import React, { memo } from 'react'
import { createUseStyles } from 'react-jss'
import Search from '../../../components/Search'

import styles from './Home.styles'

const Home = () => {

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (

        <div>
            <div className={classes.welcome}>Welcome to Museum</div>
            <div className={classes.search}>
                <Search />
            </div>
        </div>
    )
}
export default memo(Home)
