import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './ButtonsGeneral.style'

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
          mode='contained'
          onPress={() => router.replace('/signup')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Button>
      </View>
      <Text onPress={() => router.replace('/login')} style={styles.loginText}>
        Log in
      </Text>
    </>
  )
}

export default ButtonsGeneral
