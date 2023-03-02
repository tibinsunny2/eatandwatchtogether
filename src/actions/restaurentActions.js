import { RESTAURENT_LIST_SUCCESS, RESTAURENT_LIST_FAIL } from '../Components/RestaurentsConstans'
import axios from 'axios'
// {data}=destruactring
export const listRestaurants = () => async (dispatch) => {
    const { data } = await axios.get('/restaurants.json')
    try {
        dispatch({ type: RESTAURENT_LIST_SUCCESS, payload: data.restaurants })
    }
    catch (error) {
        dispatch({ type: RESTAURENT_LIST_FAIL, error: error })
    }
}