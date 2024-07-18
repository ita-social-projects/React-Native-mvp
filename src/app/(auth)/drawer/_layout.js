import { Drawer } from 'expo-router/drawer'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

import { DrawerContent } from '~/components'

import palette from '~/styles/app-theme/app.pallete'

export default function Layout() {
  const onPress = () => {
    router.push('/profile')
  }

  const style = { marginRight: 10 }

  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerRight: () => (
          <MaterialIcons
            color={palette.surfaceVariant}
            name='account-circle'
            onPress={onPress}
            size={25}
            style={style}
          />
        )
      }}
    />
  )
}
