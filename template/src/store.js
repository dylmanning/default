import createStore from 'unistore'
import persistStore from 'unissist'
import localStoreAdapter from 'unissist/integrations/localStorageAdapter'

export { connect } from 'unistore/preact'

export const store = createStore({})

export const actions = store => ({

  set: (state, key, value) => {
    return {
      ...state,
      [key]: value
    }
  }

})

persistStore(store, localStoreAdapter('app'))

