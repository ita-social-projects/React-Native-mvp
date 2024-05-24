import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  linearGradient: {
    width: 500,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    top: '15%',
    left: -70
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 120
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#263238',
    marginVertical: 15
  },
  loginContent: {
    flexDirection: 'row-reverse'
  },
  loginText: {
    color: 'white'
  },
  mainContent: {
    flex: 0.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    flex: 0.15,
    width: '100%',
    alignItems: 'center'
  },
  subtitle: {
    width: 300,
    color: '#465a64',
    textAlign: 'center'
  }
})
