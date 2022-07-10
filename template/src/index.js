import 'style'

import { render } from 'preact'
import { Provider } from 'unistore/preact'

import { store } from 'store'
import App from 'app'

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider >
)

export default Entry