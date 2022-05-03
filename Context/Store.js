import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

const initialState = {
    darkMode: false,
    userInfo: Cookies.get('tunezUserInfo') ? JSON.parse(Cookies.get('tunezUserInfo')) : null,
    search_query: ''
}

export const Store = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true }
        case 'DARK_MODE_OFF':
            return { ...state, darkMode: false }
        case 'USER_LOGIN':
            return { ...state, tunezUserInfo: action.payload }
        case 'USER_LOGOUT':
            return { ...state, tunezUserInfo: null, cart: { cartItems: [] } }
        case 'SET_SEARCH_QUERY':
            return { ...state, search_query: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}