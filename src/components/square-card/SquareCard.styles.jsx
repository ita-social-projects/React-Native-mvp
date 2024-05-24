import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  roleBox: (pressed) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 5,
    height: '60%',
    width: 170,
    padding: 10,
    backgroundColor: pressed && '#ECEFF1'
  }),
  imageWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  pressed: {},
  image: {
    width: 80,
    height: 80
  },
  title: {
    fontWeight: 'bold'
  }
})
