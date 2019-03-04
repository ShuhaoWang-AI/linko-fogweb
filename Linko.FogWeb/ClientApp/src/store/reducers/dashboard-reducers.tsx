import * as actionTypes from '../actions/action-types/dashboard-action-types';

const initialState: any = { 
};

export const reducer = (state:any, action:any) => {
    state = state || initialState; 
    if (action.type === actionTypes.activeCardsReceivedType) { 
       return {
            ...state,
            activeCards: action.activeCards
        };
         
    } 

    return state;
};
