//TODO leave only index.jsx for routing (render only one component)

import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Link } from 'expo-router'

import { styles } from '~/app/my-resources/MyResources.styles'

export default function MyResources() {
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
