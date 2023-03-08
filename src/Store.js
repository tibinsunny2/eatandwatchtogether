import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducers }from './Food/reducers/RestaurentReducers'
const reducers = combineReducers({
    restuarantReducer : restaurantListReducers

})
const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))
export default store
