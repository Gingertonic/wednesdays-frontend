import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import Section from './Section'

import { connect } from 'react-redux'
import { goToSection } from '../actions/songActions'

import { allSongs } from '../testItems/newWorld'


class Chart extends Component {

    constructor(){
        super()
        this.state = {
            currentSong: allSongs[0],
            currentSectionId: 0,
            currentSectionContent: [],
            formInput: ""
        }
    }

    componentDidMount(){
        // this.fetchSong(1)
    }

    fetchSong = songId => {
        fetch(`http://localhost:3001/songs/${songId}`)
            .then(resp => resp.json())
            .then(this.loadSong)
    }

    loadSong = song => {
        const currentSong = song
        const firstSectionName = currentSong.structure[0]
        this.setState({
            currentSong: currentSong,
            currentSectionId: 0,
            currentSectionContent: currentSong.sections[firstSectionName],
            currentSectionName: firstSectionName,
            formInput: ""
        })
    }

    loadRandomSong = () => {
        const totalSongs = 2
        const random = Math.floor(Math.random() * Math.floor(totalSongs) + 1);
        this.fetchSong(random)
    }

    handleFormSubmit = e => {
         e.preventDefault();
         console.log(this.state.formInput)
         this.fetchSong(this.state.formInput)
    }

    handleFormInput = e => {
        e.preventDefault();
        this.setState({ formInput: e.target.value })
    }

    toggleFavourite = () => {
        const newStatus = !this.state.currentSong.favourite
        const updatedSong = { ...this.state.currentSong, favourite: newStatus }
        this.setState({ currentSong: updatedSong })
        this.updateSongInApi(newStatus)
    }

    updateSongInApi = newStatus => {
        fetch(`http://localhost:3001/songs/${this.state.currentSong.data.id}`, {
            method: 'PATCH',
            body: JSON.stringify({favourite: newStatus}),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
    }

    showEnd = () => {
        this.setState( {currentSectionContent: [[{type: "lyric", body: "NEXT SONG!"}]]} )
    }

    buttons = () => [
            { text: "Next Section", eventHandler: () => this.props.goToSection("next") },
            { text: "Back to Top", eventHandler: () => this.props.goToSection("top") },
            { text: "Previous Section", eventHandler: () => this.props.goToSection("prev") },
            { text: "Random Song!", eventHandler: this.loadSong },
        ]

    inputs = () => [
            { placeholder: "Song ID", eventHandler: this.handleFormSubmit, changeHandler: this.handleFormInput, value: this.state.formInput }
        ]


    render(){

        return (
            <React.Fragment>

                <SideBar buttons={this.buttons()} inputs={this.inputs()} />
                <div id="main">
                    <div id="song-data">
                        <h1 id="song-title">{this.props.currentSong.data.title}   <span id="song-fave" onClick={this.toggleFavourite}>{this.state.currentSong.favourite ? "❤️" : "♡" }</span></h1> 
                        <h3 id="song-writers">{this.props.currentSong.data.writers}</h3>
                    </div>
                     
                   
                    
                    <Section content={this.props.currentSectionContent} />
                   
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
        goToSection
    }
)(Chart)
