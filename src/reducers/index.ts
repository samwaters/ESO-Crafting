import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { bootstrapReducer, BootstrapState } from './bootstrap.reducer'

export interface AppState {
  bootstrap: BootstrapState
  router: any
}

export const createRootReducer = (history) => combineReducers({
  bootstrap: bootstrapReducer,
  router: connectRouter(history)
})
