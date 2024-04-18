import { StyleSheet } from 'react-native'

//TODO create pallete with colors
const colors = {
  black: '#000'
}

export const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    height: 300,
    margin: 20,
    marginTop: 40,
    width: 300
  },
  image: {
    alignSelf: 'center',
    height: '100%',
    margin: 20,
    marginTop: 70,
    width: '100%'
  },
  textWrapper: {
    marginVertical: 60
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
  description: {
    color: colors.black,
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  }
})
