import { StyleSheet } from 'react-native'

const colors = {
  darkBlue: '#273239',
  offWhite: '#fefefe'
}

//TODO Colors paper try to use theming - https://callstack.github.io/react-native-paper/docs/guides/theming/

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },
  buttonText: {
    color: colors.offWhite,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10
  },
  buttonsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  loginText: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center'
  }
})
