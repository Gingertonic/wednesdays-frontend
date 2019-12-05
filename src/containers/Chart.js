import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import Section from './Section'

import { connect } from 'react-redux'
import { goToSection, getSongChart, updateSong } from '../actions/songActions'


class Chart extends Component {

    componentDidMount(){
        const path = window.location.pathname.split("/")
        const songId = parseInt(path[path.length-1])
        this.props.getSongChart(songId)
    }

    // loadRandomSong = () => {
    //     const totalSongs = 2
    //     const random = Math.floor(Math.random() * Math.floor(totalSongs) + 1);
    //     this.props.getSongChart(random)
    // }

    toggleFavourite = () => {
        const newStatus = !this.props.currentSong.favourite
        const updates = { favourite: newStatus }
        this.props.updateSong(this.props.currentSong.data.id, updates)
    }

    buttons = () => [
            { text: "Top", eventHandler: () => this.props.goToSection("top") },
            { text: "Previous", eventHandler: () => this.props.goToSection("prev") },
            { text: "Next", eventHandler: () => this.props.goToSection("next") }
            // { text: "Random Song!", eventHandler: this.loadRandomSong },
        ]


    render(){
        const renderButtons = this.buttons().map((rules, i) => <div key={i}><button onClick={rules.eventHandler}>{rules.text}</button></div> )

        return (
            <React.Fragment>

                <SideBar buttons={this.buttons()} />

                <div id="main">
                    <div id="song-data">
                        <h1 id="song-title">{this.props.currentSong.data.title}   <span id="song-fave" onClick={this.toggleFavourite}>{this.props.currentSong.favourite ? "❤️" : "♡" }</span></h1> 
                        <h3 id="song-writers">{this.props.currentSong.data.writers}</h3>
                    </div>
                      
                    <Section content={this.props.currentSectionContent} />

                    <div id="song-nav">
                        { renderButtons }
                    </div>
                   
                </div>
            
            </React.Fragment>
    )
    }

}

const mapStateToProps = state => {
    return {
        allSongs: state.allSongs,
        currentSong: state.currentSong,
        currentSectionId: state.currentSectionId,
        currentSectionContent: state.currentSectionContent,
        formInput: ""
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         nextSection: () => dispatch({type: 'NEXT_SECTION'}),
//         backToTop: () => dispatch({type: 'BACK_TO_TOP'}),
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
    {
        goToSection,
        getSongChart,
        updateSong
    }
)(Chart)
