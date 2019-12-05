import { allSongs } from '../testItems/newWorld'

export default function songReducer( state = { 
        allSongs: allSongs,
        currentSong: allSongs[2],
        currentSectionId: 0,
        currentSectionContent: allSongs[2].sections[allSongs[0].structure[0]],
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
            const newSectionContent = state.currentSong.sections[state.currentSong.structure[newSectionId]]
            return { ...state, currentSectionId: newSectionId, currentSectionContent: newSectionContent }

        default:
            return state
    }
}

// function dispatch(action){
//     state = someReducer(state, action)
//     return state
// }

// dispatch({type: '@@INIT'})