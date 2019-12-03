import React from 'react'
import Section from './Section'


const Chart = ( {currentSection} ) => {

    return (
        <div id="chart">
            {console.log(currentSection)}
            <Section content={currentSection} />
        </div>
    )
}

export default Chart