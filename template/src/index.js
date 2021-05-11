import 'style'
import { Provider } from 'unistore/preact'

import { store } from 'components/store.js'
import App from 'components/app'

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Entry
