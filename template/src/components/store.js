import createStore from 'unistore'
import persistStore from 'unissist'
import localStoreAdapter from 'unissist/integrations/localStorageAdapter'

const storeModel = {}

const adapter = localStoreAdapter('app')
export const store = createStore(storeModel)

persistStore(store, adapter)

export const actions = () => ({

  set: (state, key, value) => {
    return {
      ...state,
      [key]: value
    }
  }

})
