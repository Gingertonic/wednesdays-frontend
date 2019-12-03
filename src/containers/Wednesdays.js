import React, { Component } from 'react'
import Chart from './Chart'

import { song, songTwo, allSongs } from '../testItems/newWorld'

class Wednesdays extends Component {

    constructor(){
        super()
        this.state = {
            currentSong: song,
            currentSectionId: 0,
            currentSection: []
        }
    }

    componentDidMount(){
        const currentSong = songTwo
        const firstSectionName = currentSong.structure[0]
        this.setState({
            currentSong: currentSong,
            currentSectionId: 0,
            currentSection: currentSong.sections[firstSectionName]
        })
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
        this.setState({  
            currentSectionId: nextSectionId,
            currentSection: this.state.currentSong.sections[newSectionName]
        })
        console.log("After update: " + this.state)
    }

    showEnd = () => {
        this.setState( {currentSection: [[{type: "chord", body: "NEXT SONG!"}]]} )
        console.log("After end update: " + this.state)
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
                        

                    </header>
    
                    
                </div>
                <div>
                    <h1>{this.state.currentSong.data.title}</h1>
                    <h3>{this.state.currentSong.data.writers}</h3> 
                    <Chart currentSection={this.state.currentSection}/>
                </div>
            
            </React.Fragment>
        )
    }
}

export default Wednesdays

