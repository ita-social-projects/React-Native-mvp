import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { styles } from '~/components/buttons-general/ButtonsGeneral.style'
const ButtonsGeneral = () => {
  return (
    <>
      <View style={styles.buttonsRow}>
        <Button
          contentStyle={styles.buttonContent}
          icon={() => (
            <AntDesign
              color='#fff'
              name='arrowright'
              size={20}
              style={styles.icon}
            />
          )}
          labelStyle={styles.buttonText}
          mode='contained'
          onPress={() => router.replace('/signup')}
          style={styles.button}
        >
          <Text>Get Started</Text>
        </Button>
      </View>
      <Text onPress={() => router.replace('/login')} style={styles.loginText}>
        Login
      </Text>
    </>
  )
}

export default ButtonsGeneral
