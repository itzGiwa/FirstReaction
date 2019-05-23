import React from 'react'

const withClass = (Component , parentClass) => {
    return (props) => {
        return <div className={parentClass}>
        <Component {...props}/>
        </div>
    }
}

export default withClass