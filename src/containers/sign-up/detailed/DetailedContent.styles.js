import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: (screenHeight) => ({
    display: 'flex',
    height: screenHeight - 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  }),
  buttonText: {
    color: 'white'
  },
  termsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#263238'
  },
  logInBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40
  },
  logInText: {
    marginHorizontal: 10,
    color: '#465a64'
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold'
  },
  mainContaner: {
    flex: 1
  },
  input: {
    marginVertical: 10
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  buttonsContainer: {
    marginTop: 20,
    flex: 0.6,
    display: 'flex',
    justifyContent: 'space-between'
  },
  subtitle: {
    color: '#465a64'
  },
  titleDetailed: {
    color: 'rgb(2, 92, 92)',
    fontWeight: 'bold'
  },
  inputTheme: {
    colors: { primary: 'black', underlineColor: 'transparent' },
    mode: 'exact'
  }
})
