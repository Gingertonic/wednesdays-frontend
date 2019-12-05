import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSongChart } from '../actions/songActions'

class SideBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            formInput: "",
            buttons: this.props.buttons
        }
    }

    handleFormInput = e => {
        e.preventDefault();
        this.setState({ formInput: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.getSongChart(this.state.formInput);
        this.setState({ formInput: ""});
        console.log("setting song")
        this.props.history.push(`/songs/${this.state.formInput}`)
    }

    render() {
        const renderButtons = this.state.buttons.map((rules, i) => <div key={i}><button onClick={rules.eventHandler}>{rules.text}</button></div> )
        const linkStyle = {
            width: '100px',
            textDecoration: 'none',
            color: 'white',
        }

        return (
            <div id="sidebar">
                <header className="App-header">
                    <NavLink to="/" exact style={linkStyle}>
                        <img src="https://pbs.twimg.com/profile_images/1033135509206380544/xABx42As_400x400.jpg" className="App-logo" alt="logo" />
                    </NavLink>


                    <form onSubmit={this.handleFormSubmit}>
                        <input onChange={this.handleFormInput} type="text" value={this.state.formInput} placeholder={"Song ID"}/>
                    </form>

                    <div>
                        <NavLink to="/songbook" exact style={linkStyle}>Songbook Index</NavLink>
                    </div>

                    { renderButtons }

                </header>
            </div>
        )
    }

}


export default withRouter(connect(null, { getSongChart })(SideBar))