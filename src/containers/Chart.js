import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import Section from './Section'

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
        this.fetchSong(1)
    }

    handleKeyNav = e => {
        const key = e.keyCode
        console.log(key)
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
        const random = Math.floor(Math.random() * Math.floor(2) + 1);
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

    previousSection = () => {
        const prevSectionId = this.state.currentSectionId - 1
        prevSectionId < 0 ? this.backToTop() : this.jumpToSection(prevSectionId)  
    }

    nextSection = () => {
        const nextSectionId = this.state.currentSectionId + 1
        nextSectionId === this.state.currentSong.structure.length ? this.showEnd() : this.jumpToSection(nextSectionId)   
    }

    backToTop = () => {
        this.jumpToSection(0)
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

    jumpToSection = nextSectionId => {
        const newSectionName = this.state.currentSong.structure[nextSectionId]
        const newSectionContent = this.state.currentSong.sections[newSectionName]
        this.setState({  
            currentSectionId: nextSectionId,
            currentSectionName: newSectionName,
            currentSectionContent: newSectionContent
        })
    }

    showEnd = () => {
        this.setState( {currentSectionContent: [[{type: "lyric", body: "NEXT SONG!"}]]} )
    }


    render(){
        const buttons  = [
            { text: "Next Section", eventHandler: this.nextSection },
            { text: "Back to Top", eventHandler: this.backToTop },
            { text: "Previous Section", eventHandler: this.previousSection },
            { text: "Random Song!", eventHandler: this.loadSong },
        ]

        const inputs = [
            { placeholder: "Next Section", eventHandler: this.handleFormSubmit, changeHandler: this.handleFormInput, value: this.state.formInput }
        ]
        
        return (
            <React.Fragment>
                <SideBar buttons={buttons} inputs={inputs} />
                <div>
                    <div id="song-data">
                        <h1 id="song-title">{this.state.currentSong.data.title}   <span id="song-fave" onClick={this.toggleFavourite}>{this.state.currentSong.favourite ? "❤️" : "♡" }</span></h1> 
                        <h3 id="song-writers">{this.state.currentSong.data.writers}</h3>
                    </div>
                     
                   
                    <div id="chart">
                        <Section content={this.state.currentSectionContent} />
                    </div>
                </div>
            
            </React.Fragment>
    )
    }

}

export default Chart