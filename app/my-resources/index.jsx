import { View, Text } from 'react-native'
import { Button as ButtonPaper } from 'react-native-paper'
import { Link } from 'expo-router'
import { styles } from './MyResources.styles'

// should to create aliases for '~/' '/src'

export default function MyResources() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Resources Page</Text>
      <Link href="/">
        <ButtonPaper
          mode="contained-tonal"
          buttonColor="lightblue"
          textColor="#111"
          style={styles.button}>
          Back
        </ButtonPaper>
      </Link>
    </View>
  )
}
