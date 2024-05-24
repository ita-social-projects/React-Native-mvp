import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: (screenHeight) => ({
    display: 'flex',
    height: screenHeight - 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  }),
  InputContainer: {
    paddingVertical: 10
  },
  inputTheme: {
    colors: { primary: 'black', underlineColor: 'transparent' },
    mode: 'exact'
  },
  bottomInput: {
    marginVertical: 10
  },
  rolesContainer: {
    padding: 10,
    paddingLeft: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContent: {
    flexDirection: 'row-reverse'
  },
  buttonText: {
    color: 'white'
  },
  button: {
    backgroundColor: '#263238'
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold'
  },
  mainContaner: {
    flex: 1
  },
  subtitle: {
    color: '#465a64'
  },
  titleMain: {
    color: 'rgb(56, 147, 75)',
    fontWeight: 'bold'
  },
  separator: {
    width: 20
  }
})
