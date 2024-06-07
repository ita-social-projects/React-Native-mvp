import { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button, Checkbox, Divider } from 'react-native-paper'
import { router } from 'expo-router'

import { HeaderWithBackArrow } from '~/components'
import { PaperText } from '~/containers'
import { PrivacyURL } from '~/utils/privacy-url'
import {
  Terms,
  PrivacyPolicy
} from '~/containers/sign-up/detailed/DetailedContent.constants'

import palette from '~/styles/app-theme/app.pallete'
import { styles } from './DetailedContent.styles'

const DetailedContent = ({ visible, toggle, role, backStep }) => {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  const signUp = () => {
    router.replace('/verified')
  }

  const handlePress = () => {
    backStep((prev) => !prev)
  }

  return (
    <>
      <HeaderWithBackArrow onPress={handlePress} route='/' text='Sign up' />
      <View style={styles.mainContaner}>
        <View style={styles.textContainer}>
          <PaperText bold style={styles.title} variant='headlineMedium'>
            <PaperText bold style={styles.titleDetailed}>
              {role === 'student' ? 'Learn ' : 'Share '}
            </PaperText>
            your experience
          </PaperText>
          <PaperText style={styles.subtitle} variant='titleSmall'>
            Sign up as tutor and start your teaching journey
          </PaperText>
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            keyboardType='email-address'
            label='Email'
            mode='outlined'
            theme={styles.inputTheme}
          />
          <TextInput
            label='Password'
            mode='outlined'
            right={
              <TextInput.Icon
                icon={visible.password ? 'eye-off' : 'eye'}
                onPress={() => toggle('password')}
              />
            }
            secureTextEntry={!visible.password}
            style={styles.input}
            theme={styles.inputTheme}
          />
          <TextInput
            label='Confirm password'
            mode='outlined'
            right={
              <TextInput.Icon
                icon={visible.confirmPassword ? 'eye-off' : 'eye'}
                onPress={() => toggle('confirmPassword')}
              />
            }
            secureTextEntry={!visible.confirmPassword}
            theme={styles.inputTheme}
          />
        </View>
        <View style={styles.termsContainer}>
          <Checkbox
            color={palette.surfaceVariant}
            onPress={toggleCheckbox}
            status={checked ? 'checked' : 'unchecked'}
          />
          <PaperText>
            I agree to the <PrivacyURL url={Terms}>Terms</PrivacyURL> and{' '}
            <PrivacyURL url={PrivacyPolicy}>Privacy Policy</PrivacyURL>.
          </PaperText>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            disabled={!checked}
            mode='contained'
            onPress={signUp}
            style={[styles.button, styles.buttonCheck(checked)]}
          >
            <PaperText style={styles.buttonText}>Sign up</PaperText>
          </Button>
          <Divider bold />
          <Button mode='contained' style={styles.button}>
            <PaperText style={styles.buttonText}>Sign up with Google</PaperText>
          </Button>
        </View>
      </View>
      <View style={styles.logInBox}>
        <PaperText style={styles.logInText}>Already have an account?</PaperText>
        <PaperText
          bold
          onPress={() => router.replace('/login')}
          style={styles.loginText}
          variant='titleSmall'
        >
          Log in
        </PaperText>
      </View>
    </>
  )
}

export default DetailedContent
