import { router } from 'expo-router'
import { useSelector } from 'react-redux'
import { Slot } from 'expo-router'

const AppLayout = () => {
  const { isFirstLogin, userRole } = useSelector((state) => state.appMain)

  if (!userRole) {
    router.replace('/')
  }

  if (isFirstLogin) {
    return router.replace('/stepper')
  }

  return <Slot />
}

export default AppLayout
