import { dataServices } from "../../../rest-client/data-services"
import * as dashBoardActionTypes from "../action-types/dashboard-action-types"

export const actionCreators = {
    loadActiveCards: ()  => async (dispatch:any) => {

        const activeCards = await dataServices.getActiveCards(); 
        dispatch({ type: dashBoardActionTypes.activeCardsReceivedType, activeCards});
    }
}; 