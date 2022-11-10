import React from 'react'

const Alert = (props) => {
  return (
     props.Alert && <div className='alert alert-warning alrt-dismissible fade show' role = 'alert'>
        <strong> {props.Alert.type} </strong> :{props.Alert.msg}
    </div>
  )
}

export default Alert 
