import React from 'react'
import PropTypes from 'prop-types'
import profilePic from './assets/phani.gif'
export default function Card(props) {
  return (
    <div className='card'>
        {/* <img className='card-image' src={profilePic} alt="profile" />
        <h2 className='card-title'>Phaniraj</h2>
        <p className='card-text'>I conduct trainings for CDAC</p> */}

            <p>Second example on card using props</p>
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Card.propTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Card.defaultProps = {
    name :"Guest",
    age : 47,
    isStudent : true
}
