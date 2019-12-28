import { apiBaseUrl } from './helpers'

export const goToSection = direction => { return { type: 'GO_TO_SECTION', direction }}

export const getSongChart = songId => { 
    return (dispatch) => {
        dispatch({type: "FETCHING_SONG_CHART"})
        fetch(`${apiBaseUrl}/songs/${songId}`)
            .then(r => r.json())
            .then(songChart => dispatch({ type: "ADD_SONG_CHART", songChart}))
    }
}

export const getAllSongs = () => {
    return (dispatch) => {
        dispatch({ type: "FETCHING_SONGS"})
        fetch(`${apiBaseUrl}/songs`)
            .then(r => r.json())
            .then(allSongs => dispatch({ type: "ADD_ALL_SONGS", allSongs }))
    }
}

export const updateSong = (songId, updates) => { 
    return (dispatch) => {
        dispatch({ type: "UPDATING_SONG"})
        fetch(`${apiBaseUrl}/songs/${songId}`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(r => r.json())
            .then(updatedSong => dispatch({ type: "UPDATE_SONG", updatedSong}))
    }
 }