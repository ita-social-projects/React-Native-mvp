import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Link } from 'expo-router'

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

const styles = StyleSheet.create({
  button: {
    width: '100%'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 16
  }
})
