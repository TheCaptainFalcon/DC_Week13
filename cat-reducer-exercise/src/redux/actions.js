import { 
    ACTION_NAP, 
    ACTION_EAT, 
    ACTION_PLAY, 
    ACTION_BLEP, 
    ACTION_GUSTER 
} from './actionTypes';

export const nap = () => {
    return {
        type: ACTION_NAP
    }
}

export const eat = () => {
    return {
        type: ACTION_EAT
    }
}

export const play = () => {
    return {
        type: ACTION_PLAY
    }
}

export const blep = () => {
    return {
        type: ACTION_BLEP
    }
}

export const guster = () => {
    return {
        type: ACTION_GUSTER
    }
}