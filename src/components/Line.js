import React from 'react'
import Chord from './Chord'
import Lyric from './Lyric'

const Line = ({ line }) => {
    const renderLine = line.map((syll, i) => syll.type === "lyric" ? <Lyric key={i} lyricChunk={syll.body}/>: <Chord key={i} chordName={syll.body}/>)

    return (
        <li>
            {renderLine}
        </li>
    )
}

export default Line