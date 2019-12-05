import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllSongs, getSongChart } from '../actions/songActions'
import { NavLink } from 'react-router-dom'
import SideBar from './SideBar'

class SongbookIndex extends Component {

    componentDidMount = () => {
        this.props.getAllSongs()
    }

    render(){
        const renderSongs = this.props.allSongs.map(s => <li key={s.id}><NavLink to={`/song/${s.id}`} >{s.id}. {s.title} - {s.writers}</NavLink></li>)
        const buttons = []

        return (
            <React.Fragment>
                <SideBar buttons={buttons} />
                <div id="main">
                    <h1>All the Songs!</h1> 
                    { renderSongs }
                </div>
            
            </React.Fragment>
        )
    }
}

const mSTP = state => {
    return { allSongs: state.allSongs }
}

export default connect(mSTP, { getAllSongs, getSongChart })(SongbookIndex)