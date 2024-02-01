import {Add , Remove} from '../constant'

const initialState = {
    cartData : []
}

export default function cardItems(state = [],action) {
switch (action.type) {
    case Add:
        // console.warn('reducers', action)
        return[
            ...state,
            {cardData:action.data}
]
case Remove:
    // console.warn('reducers', action)
    state.pop()
    return[
        ...state,
]
    default:
        return state
}
}