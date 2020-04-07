// import my action types
import { 
    ACTION_NAP, 
    ACTION_EAT, 
    ACTION_PLAY, 
    ACTION_BLEP,
    ACTION_GUSTER 
} from '../actionTypes';

const initialState = {
    activity: 'napping',
    name: 'cat'
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NAP: {
            return {
                ...state,
                activity: "napping"
            }
        }
        case ACTION_EAT: {
            return {
                ...state,
                activity: "eating"
            }
        }
        case ACTION_PLAY: {
            return {
                ...state,
                activity: "playing"
            }
        }
        case ACTION_BLEP: {
            return {
                ...state,
                activity: "blepping"
            }
        }
        case ACTION_GUSTER: {
            return {
                ...state,
                name: "Guster"
            }
        }
        default:
            return state;
    }
}

export default activityReducer;