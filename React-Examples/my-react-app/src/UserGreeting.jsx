import React from 'react'
import PropTypes from 'prop-types'
export default function UserGreeting(props) {    
    const welcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>

    const loginPrompt = <h2 className='login-prompt'>Please login to continue</h2>
    // if(props.isLoggedIn){    
    //     return (
    //         <h1>Welcome {props.username}</h1>
    //     )
    // }
    //     return(<h2>Please login to continue</h2>)
    return(props.isLoggedIn ? welcomeMessage : loginPrompt); 
}


UserGreeting.prototypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

UserGreeting.defaultProps ={
    isLoggedIn : false,
    username : "Guest"
}