import { StyleSheet } from 'react-native'

//TODO create pallete with colors
const colors = {
  lightGray: '#cfd8dc',
  mediumBlue: '#637c85'
}

export const styles = StyleSheet.create({
  activeStepIndicator: {
    backgroundColor: colors.mediumBlue
  },
  stepIndicator: {
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 4,
    width: 10
  },
  stepIndicatorContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
})
