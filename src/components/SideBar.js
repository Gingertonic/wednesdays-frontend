import React from 'react'

const SideBar = ({buttons, inputs}) => {
    const renderButtons = buttons.map(rules => <div><button onClick={rules.eventHandler}>{rules.text}</button></div> )
    const renderInputs = inputs.map(rules => <form onSubmit={e => rules.eventHandler(e)}><input onChange={e => rules.changeHandler(e)} type="text" value={rules.formInput} placeholder={rules.placeholder}/></form> )

    return (
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

                { renderButtons }
                { renderInputs }

            </header>
        </div>
    )
}

export default SideBar