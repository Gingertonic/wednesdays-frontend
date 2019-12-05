import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllSongs } from '../actions/songActions'
import Welcome from '../components/Welcome'
import SongbookIndex from '../components/SongbookIndex'
import Chart from './Chart'



class Wednesdays extends Component {

    componentDidMount = () => {
        this.props.getAllSongs()
    }
    
    render(){
        return(
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/songbook" component={SongbookIndex} />
                    {/* <Route exact path="/song" component={Chart} /> */}
                    <Route exact path="/songs/:songId" component={Chart} />
                    {/* <Route path='/song' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
                </React.Fragment>
            </Router>
        )
    }
}

export default connect(null, { getAllSongs })(Wednesdays)
