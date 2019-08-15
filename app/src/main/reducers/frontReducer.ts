// ./src/store/heroes/reducer.ts

import { Reducer } from 'redux'
import { FronState, FrontStateActionTypes } from '../types'

// Type-safe initialState!
const initialState: FronState = {
  socket: {}
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<FronState> = (state = initialState, action) => {
  switch (action.type) {
    case FrontStateActionTypes.SET_SOCKET: {
      return { ...state, socket: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as frontStateReducer };