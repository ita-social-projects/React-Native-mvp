import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Link asChild href='/'>
        <Button mode='contained'>
          <Text>Go to onboarding</Text>
        </Button>
      </Link>
    </View>
  )
}

export default SignUp
