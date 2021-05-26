import 'style'
import { Provider } from 'unistore/preact'

import { store } from 'components/store'
import App from 'components/app'

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Entry
