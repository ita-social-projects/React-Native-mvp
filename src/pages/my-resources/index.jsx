import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { Link } from 'expo-router'

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
          style={styles.button}
          textColor='#111'
        >
          <PaperText>Back</PaperText>
        </Button>
      </Link>
    </View>
  )
}

export default MyResources
