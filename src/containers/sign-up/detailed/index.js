import { View } from 'react-native'
import { TextInput, Text, Button, Checkbox, Divider } from 'react-native-paper'
import { Link, router } from 'expo-router'

import { styles } from './DetailedContent.styles'
import { HeaderWithBackArrow } from '~/components'

const DetailedContent = ({ visible, toggle, role, backStep }) => {
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
        <View>
          <Text style={styles.title} variant='headlineMedium'>
            <Text style={styles.titleDetailed}>
              {role === 'student' ? 'Learn ' : 'Share '}
            </Text>
            your experience
          </Text>
          <Text style={styles.subtitle} variant='titleSmall'>
            Sign up as tutor and start your teaching journey
          </Text>
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
          <Checkbox status='unchecked' />
          <Text>I agree to the Terms and Privacy Policy.</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button mode='contained' onPress={signUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Button>
          <Divider bold />
          <Button mode='contained' style={styles.button}>
            <Text style={styles.buttonText}>Sign up with Google</Text>
          </Button>
        </View>
      </View>
      <View style={styles.logInBox}>
        <Text style={styles.logInText}>Already have an account?</Text>
        <Link href='/login'>
          <Text variant='titleSmall'>Log in</Text>
        </Link>
      </View>
    </>
  )
}

export default DetailedContent
