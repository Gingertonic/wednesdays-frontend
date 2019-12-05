export const goToSection = direction => { return { type: 'GO_TO_SECTION', direction }}

export const getSongChart = songId => { 
    return (dispatch) => {
        dispatch({type: "FETCHING_SONG_CHART"})
        fetch(`http://localhost:3001/songs/${songId}`)
            .then(r => r.json())
            .then(songChart => dispatch({ type: "ADD_SONG_CHART", songChart}))
    }
}

export const getAllSongs = () => {
    return (dispatch) => {
        dispatch({ type: "FETCHING_SONGS"})
        fetch(`http://localhost:3001/songs`)
            .then(r => r.json())
            .then(allSongs => dispatch({ type: "ADD_ALL_SONGS", allSongs}))
    }
}
