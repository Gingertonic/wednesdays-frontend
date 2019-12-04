import React from 'react'
import { chords } from '../testItems/newWorld'

const ChordImg = ({ chordSymbol }) => {
    console.log(chords[chordSymbol])
    return (
        <aside id="chord-layouts">
            <h3 className="chord-layout-name">{chordSymbol}</h3>
            <img className="chord-img" src={chords[chordSymbol].imgUrl} alt={chordSymbol}/>
        </aside>
        
    )   
}

export default ChordImg