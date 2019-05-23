import React from 'react'

const withClass = (Component , parentClass) => {
    return (props) => {
        return <div className={parentClass}>
        <Component/>
        </div>
    }
}

export default withClass