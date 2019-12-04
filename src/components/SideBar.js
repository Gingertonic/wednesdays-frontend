import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({buttons, inputs}) => {
    const renderButtons = buttons.map((rules, i) => <div key={i}><button onClick={rules.eventHandler}>{rules.text}</button></div> )
    const renderInputs = inputs.map((rules, i) => <form key={i}onSubmit={e => rules.eventHandler(e)}><input onChange={e => rules.changeHandler(e)} type="text" value={rules.formInput} placeholder={rules.placeholder}/></form> )
    const linkStyle = {
        width: '100px',
        // padding: '12px',
        // margin: '0 6px 6px',
        // background: 'blue',
        textDecoration: 'none',
        color: 'white',
    }
    return (
        <div id="sidebar">
            <header className="App-header">
                {/* <a
                    className="App-link"
                    href="https://ukulelewednesdays.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://pbs.twimg.com/profile_images/1033135509206380544/xABx42As_400x400.jpg" className="App-logo" alt="logo" />
                </a> */}
                <NavLink to="/" exact style={linkStyle}>
                    <img src="https://pbs.twimg.com/profile_images/1033135509206380544/xABx42As_400x400.jpg" className="App-logo" alt="logo" />
                </NavLink>

                { renderButtons }
                { renderInputs }

                <div>
                    <NavLink to="/songbook" exact style={linkStyle}>Songbook Index</NavLink>

                </div>

            </header>
        </div>
    )
}

export default SideBar