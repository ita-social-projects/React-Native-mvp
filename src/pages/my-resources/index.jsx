import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { Link } from 'expo-router'

import { styles } from './MyResources.style'

const MyResources = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Resources Page</Text>
      <Link href='/'>
        <Button
          buttonColor='lightblue'
          mode='contained-tonal'
          style={styles.button}
          textColor='#111'
        >
          <Text>Back</Text>
        </Button>
      </Link>
    </View>
  )
}

export default MyResources
