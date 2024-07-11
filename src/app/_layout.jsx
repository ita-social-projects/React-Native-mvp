import { Provider } from 'react-redux'
import { store } from '~/redux/store'
import { Slot } from 'expo-router'
import '~/plugins/i18n'

const Layout = () => {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  )
}

export default Layout
