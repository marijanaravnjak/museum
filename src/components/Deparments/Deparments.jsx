import React from 'react'
import PropTypes from 'prop-types'

const Departments = ({ departments, galleryNumber }) => {

  return (
    <div>
      <p>{departments}</p>
      <div>{galleryNumber && (<div> Br:
        {galleryNumber}</div>)}</div>
    </div>
  )
}
Departments.propTypes = {
  departments: PropTypes.string.isRequired,
  galleryNumber: PropTypes.string.isRequired
}
export default Departments
