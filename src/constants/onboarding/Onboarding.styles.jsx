import { StyleSheet } from 'react-native'

const colors = {
  green: '#46995d',
  grey: '#465a64',
}

export const styles = StyleSheet.create({
  wrapper: {
    fontWeight: 'bold',
  },
  text: {
    color: colors.green,
  },
  descriptionText: {
    color: colors.grey,
  },
  headlineSmall: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headlineMedium: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  titleSmall: {
    fontSize: 16,
    color: '#444',
  },
})
