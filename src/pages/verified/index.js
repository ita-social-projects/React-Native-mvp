import { View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

import { iconInfo } from '~/assets'
import { PaperText } from '~/containers'

import { styles } from '~/pages/verified/Verified.styles'

const Verified = () => {
  const onPress = () => {
    router.replace('/login')
  }

  return (
    <View style={styles.root}>
      <View style={styles.mainContent}>
        <LinearGradient
          colors={[
            'rgba(179, 251, 255, 0)',
            'rgba(179, 251, 255, 0.3)',
            'rgba(179, 251, 255, 0)'
          ]}
          style={styles.linearGradient}
        />
        <View style={styles.imageWrapper}>
          <Image source={iconInfo} style={styles.image} />
        </View>
        <PaperText style={styles.title} variant='headlineMedium'>
          {`Your email address \n needs to be verified`}
        </PaperText>
        <PaperText style={styles.subtitle} variant='titleSmall'>
          {`We sent a confirmation email to:\n email\n Confirm your email to continue and Log in.`}
        </PaperText>
      </View>
      <Button
        contentStyle={styles.loginContent}
        icon={() => (
          <AntDesign
            color='#fff'
            name='arrowright'
            size={20}
            style={styles.icon}
          />
        )}
        mode='contained'
        onPress={onPress}
        style={styles.loginButton}
      >
        <PaperText style={styles.loginText}>Log in</PaperText>
      </Button>
    </View>
  )
}

export default Verified
