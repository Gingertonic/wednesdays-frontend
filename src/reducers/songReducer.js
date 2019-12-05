// import { allSongs } from '../testItems/newWorld'

export default function songReducer( state = { 
        allSongs: [],
        currentSong: {id: 0, data: {title: "Loading...", writers: ""}},
        currentSectionId: 0,
        currentSectionContent: [],
        formInput: ""
    }, 
    action ) {
    switch(action.type){

        case "GO_TO_SECTION":
            let newSectionId
            switch(action.direction){
                case "next": 
                    newSectionId = state.currentSectionId + 1
                    break
                case "prev": 
                    newSectionId = state.currentSectionId - 1
                    break
                default: newSectionId = 0
            }
            if ((newSectionId >= 0) && (newSectionId < state.currentSong.structure.length)){
                const newSectionContent = state.currentSong.sections[state.currentSong.structure[newSectionId]]
                return { ...state, currentSectionId: newSectionId, currentSectionContent: newSectionContent }
            } else {
                return state
            }       
            
        case "ADD_SONG_CHART":
            const nextSong = action.songChart
            // const nextSong = state.allSongs.find(s => s.id === parseInt(action.songId))
            // const chart = action.songChart
            return {
                ...state,
                currentSong: nextSong,
                currentSectionId: 0,
                currentSectionContent: nextSong.sections[nextSong.structure[0]],
            }

        case "ADD_ALL_SONGS":
            return { ...state, allSongs: action.allSongs }

        case "UPDATE_SONG":
            return { ...state, currentSong: action.updatedSong}

        default:
            return state
    }
}

// function dispatch(action){
//     state = someReducer(state, action)
//     return state
// }

// dispatch({type: '@@INIT'})