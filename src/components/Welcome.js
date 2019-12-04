import React from 'react'
import SideBar from './SideBar'

const Welcome = () => {
    const buttons = []
    const inputs = []
    return (
        <React.Fragment>
            <SideBar buttons={buttons} inputs={inputs} />
            <div id="main">
                Welcome to Ukulele Wednesdays!
                Tweet your requests to @ukulelewednesdays    
            </div>
        
        </React.Fragment>
    )
}

export default Welcome