export const goToSection = direction => { return { type: 'GO_TO_SECTION', direction }}

export const goToSong = songId => { return { type: 'GO_TO_SONG', songId } }

export const getAllSongs = async () => {
    const resp = await fetch(`http://localhost:3001/songs`)
    const allSongs = await resp.json()
    return { type: 'ADD_ALL_SONGS', allSongs }
}