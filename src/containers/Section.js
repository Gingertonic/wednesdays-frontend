import React from 'react'
import Line from '../components/Line'
import ChordImg from '../components/ChordImg'

const Section = ({ content }) => {

    const renderContent = content.map((line, i) => <Line key={i} line={line} />)
    const renderLineChords = () => content.map(line => findChords(line))
    const findChords = line => line.map(syll => syll.type === "chord" ? syll.body : null)

    const renderChords = () => uniqChords.map((ch, i) => <ChordImg key={i} chordSymbol={ch} />)
    // const renderChords = () => uniqChords.map((ch, i) => console.log(ch) )

    // line => line.map(syll => syll.type === "chord" ? <ChordImg chordSymbol={syll.body} /> : null)

    const uniqChords = [...new Set(renderLineChords().flat())].filter(ch => ch)

    return (
        <div id="chart">
            <div id="section-content">
                { renderContent }
            </div>
            <div id="section-chords">
                { renderChords() }
            </div>      
        </div>
    )        

}

export default Section