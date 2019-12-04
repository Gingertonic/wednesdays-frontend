import React from 'react'
import { chords } from '../testItems/newWorld'

const ChordImg = ({ chordSymbol }) => {
    console.log(chords[chordSymbol])
    return (
        <aside className="chord-layout">
            <h3 className="chord-layout-name">{chordSymbol}</h3>
            <img className="chord-img" src={chords[chordSymbol].imgUrl} alt={chordSymbol}/>
        </aside>
        
    )   
}

export default ChordImg