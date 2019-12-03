import React from 'react'
import { chords } from '../testItems/newWorld'

const ChordImg = ({ chordSymbol }) => {
    console.log(chords[chordSymbol])
    return (
        
        <img className="chord-img" src={chords[chordSymbol].imgUrl} alt={chordSymbol}/>
    )   
}

export default ChordImg