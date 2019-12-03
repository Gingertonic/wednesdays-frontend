import React, { Component } from 'react'
import Line from '../components/Line'

class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: props.content
        }
    }

    renderContent = () => this.state.content.map(line => <Line line={line} />)

    render(){
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
    
}

export default Section