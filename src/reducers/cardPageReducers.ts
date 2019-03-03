import actionTypes from "../actions/types/actionTypes";

const initialState = {
    cardsByRace: {},
}

export const cards = (state = initialState, action: {type: string, cardsByRace: object}) => {
    switch(action.type) {
        case actionTypes.ADD_CARDS:
            return {
                ...state,
                cardsByRace: action.cardsByRace,
            }
        default: 
            return state;
    }
}

