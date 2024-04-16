import { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Dimensions } from 'react-native'
import { TextInput, Text, Button, Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

import GradientText from '~/components/gradient-text/GradientText'

import { styles } from '~/app/login/index.styles'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const screenHeight = Dimensions.get('window').height

  const toggle = () => {
    setPasswordVisible((prev) => !prev)
  }

  return (
    <View style={styles.root(screenHeight)}>
      <View style={styles.mainContent}>
        <View style={styles.headerContainer}>
          <Icon
            name='arrow-left'
            size={25}
            style={styles.arrowBack}
            onPress={() => router.replace('/')}
          />
          <Text variant='headlineSmall'>Log in</Text>
        </View>
        <View>
          <GradientText
            style={styles.headerStyles}
            text='Welcome back!'
            variant='headlineMedium'
          />
          <Text variant='titleSmall'>
            Ready to continue your journey? Please enter your details.
          </Text>
        </View>
        <View>
          <TextInput
            keyboardType='email-address'
            label='Email'
            mode='outlined'
            style={styles.input}
            theme={styles.inputTheme}
          />
          <TextInput
            label='Password'
            mode='outlined'
            right={
              <TextInput.Icon
                icon={passwordVisible ? 'eye-off' : 'eye'}
                onPress={toggle}
              />
            }
            secureTextEntry={!passwordVisible}
            theme={styles.inputTheme}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Link href='/'>
            <Text variant='titleSmall'>Forgot your password?</Text>
          </Link>
        </View>
        <Button mode='contained' style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </Button>
        <Divider bold />
      </View>
      <View style={styles.bottomContainer}>
        <Button mode='contained' style={styles.loginButton}>
          <Text style={styles.loginText}>Login Google</Text>
        </Button>
        <View style={styles.signUpBox}>
          <Text style={styles.signUpText}>Don&apos;t have an account?</Text>
          <Link href='/'>
            <Text variant='titleSmall'>Join us for free!</Text>
          </Link>
        </View>
      </View>
    </View>
  )
}

export default Login
