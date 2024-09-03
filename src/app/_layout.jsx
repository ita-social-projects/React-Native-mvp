import { Provider } from 'react-redux'
import { store } from '~/redux/store'
import { Slot } from 'expo-router'
import '~/plugins/i18n'
import { LogBox } from 'react-native'
import { PortalProvider } from '@gorhom/portal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MenuProvider } from 'react-native-popup-menu'

const Layout = () => {
  LogBox.ignoreLogs(['Warning: TextInput.Icon:'])

  return (
    <MenuProvider>
      <GestureHandlerRootView>
        <PortalProvider>
          <Provider store={store}>
            <Slot />
          </Provider>
        </PortalProvider>
      </GestureHandlerRootView>
    </MenuProvider>
  )
}

export default Layout
