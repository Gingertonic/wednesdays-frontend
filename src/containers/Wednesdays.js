import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from '../components/Welcome'
import SongbookIndex from '../components/SongbookIndex'
import Chart from './Chart'
import { allSongs } from '../testItems/newWorld'


class Wednesdays extends Component {

    constructor(){
        super()
        this.state = {
            allSongs: allSongs
        }
    }

    // componentDidMount(){
    //     this.fetchSongs
    // }

    // handleKeyNav = e => {
    //     const key = e.keyCode
    //     console.log(key)
    // }

    fetchSongs = songId => {
        // fetch(`http://localhost:3001/songs/`)
        //     .then(resp => resp.json())
        //     .then(this.setState({ allSongs }))

    }

    // loadSong = song => {
    //     const currentSong = song
    //     const firstSectionName = currentSong.structure[0]
    //     this.setState({
    //         currentSong: currentSong,
    //         currentSectionId: 0,
    //         currentSectionContent: currentSong.sections[firstSectionName],
    //         currentSectionName: firstSectionName,
    //         formInput: ""
    //     })
    // }

    // loadRandomSong = () => {
    //     const totalSongs = 2
    //     const random = Math.floor(Math.random() * Math.floor(2) + 1);
    //     this.fetchSong(random)
    // }

    // handleFormSubmit = e => {
    //      e.preventDefault();
    //      console.log(this.state.formInput)
    //      this.fetchSong(this.state.formInput)
    // }

    // handleFormInput = e => {
    //     e.preventDefault();
    //     this.setState({ formInput: e.target.value })
    // }

    // previousSection = () => {
    //     const prevSectionId = this.state.currentSectionId - 1
    //     prevSectionId < 0 ? this.backToTop() : this.jumpToSection(prevSectionId)  
    // }

    // nextSection = () => {
    //     const nextSectionId = this.state.currentSectionId + 1
    //     nextSectionId === this.state.currentSong.structure.length ? this.showEnd() : this.jumpToSection(nextSectionId)   
    // }

    // backToTop = () => {
    //     this.jumpToSection(0)
    // }

    // toggleFavourite = () => {
    //     const newStatus = !this.state.currentSong.favourite
    //     const updatedSong = { ...this.state.currentSong, favourite: newStatus }
    //     this.setState({ currentSong: updatedSong })
    //     this.updateSongInApi(newStatus)
    // }

    // updateSongInApi = newStatus => {
    //     fetch(`http://localhost:3001/songs/${this.state.currentSong.data.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({favourite: newStatus}),
    //         headers: {
    //             "Content-Type": 'application/json',
    //             "Accept": 'application/json'
    //         }
    //     })
    // }

    // jumpToSection = nextSectionId => {
    //     const newSectionName = this.state.currentSong.structure[nextSectionId]
    //     const newSectionContent = this.state.currentSong.sections[newSectionName]
    //     this.setState({  
    //         currentSectionId: nextSectionId,
    //         currentSectionName: newSectionName,
    //         currentSectionContent: newSectionContent
    //     })
    // }

    // showEnd = () => {
    //     this.setState( {currentSectionContent: [[{type: "lyric", body: "NEXT SONG!"}]]} )
    // }

    render(){
        return(
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/songbook" component={SongbookIndex} />
                    <Route exact path="/song" component={Chart} />
                </React.Fragment>
            </Router>
        )
    }
}

export default Wednesdays

