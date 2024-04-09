import { createStore } from 'redux'
import myReducer from "./reducers/Index";

const Store = createStore(
    myReducer,

)

export default Store;