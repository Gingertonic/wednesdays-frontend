import React, { Component } from 'react'
import Section from './Section'

import { song } from '../testItems/newWorld'

export default class Chart extends Component {

    render(){
        const renderSong = () => Object.keys(song).map((section) => <div><h1>{section}</h1>{ renderSection(song[section]) }</div>)
        const renderSection = sectionContent => <Section content={sectionContent}/>

        return (
            <div>
                <h1>The Chart</h1>
                { renderSong() }
            </div>
        )
    }
}