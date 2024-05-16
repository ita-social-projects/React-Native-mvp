import { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Dimensions } from 'react-native'
import { TextInput, Button, Divider } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

import GradientText from '~/components/gradient-text'
import { PaperText } from '~/containers'

import { styles } from './Login.styles'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const screenHeight = Dimensions.get('window').height

  const toggle = () => {
    setPasswordVisible(prev => !prev)
  }

  return (
    <View style={styles.root(screenHeight)}>
      <View style={styles.mainContent}>
        <View style={styles.headerContainer}>
          <View style={styles.arrowWrapper}>
            <Link href="/">
              <AntDesign name="arrowleft" size={25} />
            </Link>
          </View>
          <PaperText variant="headlineSmall">Log in</PaperText>
        </View>
        <View>
          <GradientText style={styles.headerStyles} text="Welcome back!" variant="headlineMedium" />
          <PaperText style={styles.subtitle} variant="titleSmall">
            Ready to continue your journey? Please enter your details.
          </PaperText>
        </View>
        <View>
          <TextInput
            keyboardType="email-address"
            label="Email"
            mode="outlined"
            style={styles.input}
            theme={styles.inputTheme}
          />
          <TextInput
            label="Password"
            mode="outlined"
            right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={toggle} />}
            secureTextEntry={!passwordVisible}
            theme={styles.inputTheme}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Link href="/signup">
            <PaperText variant="titleSmall">Forgot your password?</PaperText>
          </Link>
        </View>
        <Button mode="contained" style={styles.loginButton}>
          <PaperText style={styles.loginText}>Log in</PaperText>
        </Button>
        <Divider bold />
      </View>
      <View style={styles.bottomContainer}>
        <Button mode="contained" style={styles.loginButton}>
          <PaperText style={styles.loginText}>Login Google</PaperText>
        </Button>
        <View style={styles.signUpBox}>
          <PaperText style={styles.signUpText}>Don&apos;t have an account?</PaperText>
          <PaperText onPress={() => router.replace('/signup')} variant="titleSmall">
            Join us for free!
          </PaperText>
        </View>
      </View>
    </View>
  )
}

export default Login
