import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  arrowBack: {
    height: 30,
    marginRight: 20,
    marginTop: 10,
    width: 30
  },
  bottomContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  forgotPassword: {
    alignSelf: 'flex-end'
  },
  headerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerStyles: {
    fontWeight: 'bold'
  },
  inputTheme: {
    colors: { primary: 'black', underlineColor: 'transparent' }
  },
  loginButton: {
    backgroundColor: '#263238'
  },
  loginText: {
    color: 'white'
  },
  mainContent: {
    display: 'flex',
    height: '60%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  root: (deviceHeight) => ({
    flex: 1,
    minHeight: deviceHeight
  }),
  signUpBox: {
    flexDirection: 'row',
    marginBottom: 40
  },
  signUpText: {
    marginHorizontal: 10
  }
})
