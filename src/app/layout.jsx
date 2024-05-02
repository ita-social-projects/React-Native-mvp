import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { styles } from '~/pages/onboarding/Onboarding.style'

const Layout = ({ children }) => {
  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaView style={styles.page}>
        <StatusBar style='light' />
        {children}
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Layout
