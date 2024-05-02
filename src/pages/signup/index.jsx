import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { Link } from 'expo-router'

import { styles } from './Signup.styles'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Link asChild href='/'>
        <Button mode='contained'>
          <Text style={styles.signupText}>Go to onboarding</Text>
        </Button>
      </Link>
    </View>
  )
}

export default SignUp
