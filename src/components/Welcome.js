import React from 'react'
import SideBar from './SideBar'

const Welcome = () => {
    const buttons = []
    return (
        <React.Fragment>
            <SideBar buttons={buttons} />
            <div id="main">
                <h1>Welcome to Ukulele Wednesdays!</h1>
                
                <h2>Tweet your requests to <strong>@ukulelewednesdays</strong></h2>  
            </div>
        
        </React.Fragment>
    )
}

export default Welcome