import React from 'react'

const ErrorMsg = ({msg,clearError}) => {
  return (
    <div onClick={clearError} className="ErrorMsg">
        <i className="fa fa-exclamation" aria-hidden="true"></i> {msg}
    </div>
  )
}

export default ErrorMsg