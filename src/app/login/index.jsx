import { View, Text, Button } from 'react-native'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Link asChild href='/'>
        <Button title='Go to onboarding' />
      </Link>
    </View>
  )
}

export default Login
