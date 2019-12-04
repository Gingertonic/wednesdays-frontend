import React, { Component } from 'react'
import Chart from './Chart'

import { song, songTwo, songThree, allSongs } from '../testItems/newWorld'

class Wednesdays extends Component {

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
        this.loadSong(0) 
    }

    loadSong = songId => {
        const currentSong = allSongs[parseInt(songId)]
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
        const random = Math.floor(Math.random() * Math.floor(allSongs.length));
        this.loadSong(random)
    }

    handleFormSubmit = e => {
         e.preventDefault();
         console.log(this.state.formInput)
         this.loadSong(this.state.formInput)
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
        this.setState( {currentSection: [[{type: "lyric", body: "NEXT SONG!"}]]} )
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <header className="App-header">
                        <a
                        className="App-link"
                        href="https://ukulelewednesdays.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img src="https://pbs.twimg.com/profile_images/1033135509206380544/xABx42As_400x400.jpg" className="App-logo" alt="logo" />
                        </a>

                        <div>
                            <button onClick={this.nextSection}>Next Section</button>
                        </div> 
                        <div>
                            <button onClick={this.backToTop}>Back to the Top</button>
                        </div>
                        <div>
                            <button onClick={this.previousSection}>Previous Section</button>
                        </div>
                        <div>
                            <button onClick={this.loadRandomSong}>Random Song!</button>
                        </div>

                        
                        <form onSubmit={e => this.handleFormSubmit(e)}>
                            <input onChange={e => this.handleFormInput(e)} type="text" value={this.state.formInput} placeholder="Song ID"/>
                        </form>
                        
                        
                        

                    </header>
    
                    
                </div>
                <div>
                    <div id="song-data">
                        <h1 id="song-title">{this.state.currentSong.data.title}</h1>
                        <h3 id="song-writers">{this.state.currentSong.data.writers}</h3>
                    </div>
                     
                   
                    <Chart currentSection={this.state.currentSectionContent}/>
                </div>
            
            </React.Fragment>
        )
    }
}

export default Wednesdays

