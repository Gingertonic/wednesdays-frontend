import React from 'react'
import SideBar from './SideBar'

const SongbookIndex = () => {
    const buttons  = [
        // { text: "Random Song!", eventHandler: this.loadSong },
    ]

    const inputs = [
        // { placeholder: "Next Section", eventHandler: this.handleFormSubmit, changeHandler: this.handleFormInput, value: this.state.formInput }
    ]

    return (
        <React.Fragment>
            <SideBar buttons={buttons} inputs={inputs} />
            <div id="main">
                All the Songs!   
            </div>
        
        </React.Fragment>
    )
}

export default SongbookIndex