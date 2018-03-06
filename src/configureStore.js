import { createStore, combineReducers } from 'redux'
import teste from './reducers/teste'

const reducers = combineReducers({
    teste
})

export default function configureStore() {
    return createStore(reducers)
}  