import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Detail from '../../components/Detail/Detail'
import PropTypes from 'prop-types'
import Loading from '../../components/Loading'

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import styles from './Router.styles'

const Home = React.lazy(() => import('./Home'))

const useStyles = createUseStyles(styles)
const Router = ({ isLoading }) => {
  const classes = useStyles()

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Suspense fallback='Loading...'>
          <Routes>
            <Route key='home' path='/' element={<Home />} />
            <Route key='detail' path={'/detail/:objectId'} element={<Detail />} />
            <Route key='moreinfo' path={'/detail/:objectId/moreinfo'} element={<MoreInfo/>}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

Router.propTypes = {
  isLoading: PropTypes.bool
}

Router.defaultProps = {
  isLoading: false
}

export default Router
