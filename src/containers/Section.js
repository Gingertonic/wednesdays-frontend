import React from 'react'
import Line from '../components/Line'
import { chords } from '../testItems/newWorld'

const Section = ({ content }) => {

    const renderContent = () => content.map((line, i) => <Line key={i} line={line} />)

    return (
        <div className="section">
            { renderContent() }
        </div>
    )        

}

export default Section