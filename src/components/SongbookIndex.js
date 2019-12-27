import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongChart } from '../actions/songActions'
import { NavLink } from 'react-router-dom'
import SideBar from './SideBar'

class SongbookIndex extends Component {
    constructor(props){
        super(props)
        this.state = { 
            songs: this.props.allSongs,
            // songLikeCounts: {}
        }
    }

    showSongs = filt => {
        switch(filt){
            case "faves":
                this.setState({ songs: this.props.faveSongs })
                break;
            default:
                this.setState({ songs: this.props.allSongs })
        }
    }

    // increaseLike = songId => {
    //     let likes = 1         
    //     if (this.state.songLikeCounts[songId]){
    //         likes = this.state.songLikeCounts[songId] + 1
    //     } 
    //     this.setState({ songLikeCounts: {...this.state.songLikeCounts, [songId]: likes} })
    // }

    render(){
    const renderSongs = this.state.songs.map(s => <li className="index-li" key={s.id}><NavLink to={`/songs/${s.id}`} >{s.id}. {s.title} - {s.writers}</NavLink></li>)
    // const renderSongs = this.state.songs.map(s => <li className="index-li" key={s.id}><button onClick={() => this.increaseLike(s.id)}>Like Me! {this.state.songLikeCounts[s.id] ? this.state.songLikeCounts[s.id] : 0}</button><NavLink to={`/songs/${s.id}`} >{s.id}. {s.title} - {s.writers}</NavLink></li>)
        const buttons = []

        return (
            <React.Fragment>
                <SideBar buttons={buttons} />
                <div id="main">
                    <div> 
                        <h1>Songbook</h1> 
                    </div>
                    <div>{ renderSongs }</div>
                    <div>
                        <button onClick={() => this.showSongs("faves")}>Favourites</button>
                        <button onClick={() => this.showSongs("all")}>Show All</button>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }
}

const mSTP = state => {
    return { allSongs: state.allSongs, faveSongs: state.allSongs.filter(s => s.favourite) }
}

export default connect(mSTP, { getSongChart })(SongbookIndex)