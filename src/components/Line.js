import React from 'react'
import Chord from './Chord'
import Lyric from './Lyric'

const Line = ({ line }) => {
    const renderLine = line.map(syll => syll.type === "lyric" ? <Lyric lyricChunk={syll.body}/>: <Chord chordName={syll.body}/>)

    return (
        <li>
            {renderLine}
        </li>
    )
}

export default Line