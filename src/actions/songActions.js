export const goToSection = direction => { return { type: 'GO_TO_SECTION', direction }}

export const goToSong = songId => { return { type: 'GO_TO_SONG', songId } }