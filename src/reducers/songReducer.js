import { allSongs } from '../testItems/newWorld'

export default function songReducer( state = { 
        allSongs: allSongs,
        currentSong: allSongs[0],
        currentSectionId: 0,
        currentSectionContent: allSongs[0].sections[allSongs[0].structure[0]],
        formInput: ""
    }, 
    action ) {
    switch(action.type){
        case "NEXT_SECTION":
            console.log("moving to next")
            const newSectionId = state.currentSectionId + 1
            const newSectionContent = state.currentSong.sections[state.currentSong.structure[newSectionId]]
            return { ...state, currentSectionId: newSectionId, currentSectionContent: newSectionContent }
        case "BACK_TO_TOP":
            return { ...state, currentSectionId: 0}
        default:
            return state
    }
}

// function dispatch(action){
//     state = someReducer(state, action)
//     return state
// }

// dispatch({type: '@@INIT'})