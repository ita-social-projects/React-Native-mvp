import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'

import { PaperText } from '~/containers'

import { styles } from './Signup.styles'

const SignUp = () => {
  return (
    <View>
      <PaperText>SignUp Screen</PaperText>
      <Button mode='contained' onPress={() => router.replace('/')}>
        <PaperText
          onPress={() => router.replace('/')}
          style={styles.signupText}
        >
          Go to onboarding
        </PaperText>
      </Button>
    </View>
  )
}

export default SignUp
