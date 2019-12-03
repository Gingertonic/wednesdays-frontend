import React from 'react'
import Line from '../components/Line'
import { chords } from '../testItems/newWorld'

const Section = ({ content }) => {

    const renderContent = content.map((line, i) => <Line key={i} line={line} />)
    const renderLineChords = () => content.map(line => renderChords(line))
    const renderChords = line => line.map(syll => syll.type === "chord" ? console.log(syll.body) : null)


    return (
        <div className="section">
            <div id="section-content">
                { renderContent }
            </div>
            <div id="section-chords">
                { renderLineChords() }
            </div>      
        </div>
    )        

}

export default Section