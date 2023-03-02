//reducer is a function 

import { RESTAURENT_LIST_SUCCESS, RESTAURENT_LIST_FAIL } from '../Components/RestaurentsConstans'
export const restaurantListReducers = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case RESTAURENT_LIST_SUCCESS:
            return {
                restaurants: action.payload
            }
        case RESTAURENT_LIST_FAIL:
            return {
                restaurants: action.error
            }
        default:
            return state
    }

}