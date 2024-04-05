import { View, Text, Button } from 'react-native'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Link asChild href='/'>
        <Button title='Go to onboarding' />
      </Link>
    </View>
  )
}

export default SignUp
