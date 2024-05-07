import { StyleSheet } from 'react-native'

const colors = {
  green: '#46995d',
  grey: '#465a64'
}

export const styles = StyleSheet.create({
  wrapper: {
    fontWeight: 'bold'
  },
  text: {
    color: colors.green
  },
  descriptionText: {
    color: colors.grey
  }
})
