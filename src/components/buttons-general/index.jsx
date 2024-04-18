import { Text, View, Pressable } from 'react-native'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { styles } from '~/components/buttons-general/ButtonsGeneral.style'

const ButtonsGeneral = () => {
  return (
    <>
      <View style={styles.buttonsRow}>
        <Pressable
          onPress={() => router.replace('/signup')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <AntDesign color='#fff' name='arrowright' size={20} />
        </Pressable>
      </View>
      <Text onPress={() => router.replace('/login')} style={styles.loginText}>
        Login
      </Text>
    </>
  )
}

export default ButtonsGeneral

//TODO Create Get Started button via paper
