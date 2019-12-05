import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllSongs } from '../actions/songActions'
// import { NavLink } from 'react-router-dom'
import SideBar from './SideBar'

class SongbookIndex extends Component {

    componentDidMount = () => {
        this.props.getAllSongs()
    }

    render(){
        const renderSongs = this.props.allSongs.map(s => <li key={s.id}><a>{s.id}. {s.title} - {s.writers}</a></li>)
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

export default connect(mSTP, { getAllSongs })(SongbookIndex)