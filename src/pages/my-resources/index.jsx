import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { Link, router } from 'expo-router'

import { PaperText } from '~/containers'

import { styles } from './MyResources.style'

const MyResources = () => {
  return (
    <View style={styles.container}>
      <PaperText style={styles.text}>My Resources Page</PaperText>
      <Link href='/'>
        <Button
          buttonColor='lightblue'
          mode='contained-tonal'
          onPress={() => router.replace('/(auth)')}
          style={styles.button}
          textColor='#111'
        >
          Back
        </Button>
      </Link>
    </View>
  )
}

export default MyResources
