import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  categoriesList: (windowWidth) => ({
    width: windowWidth / 2.2,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  }),
  sortList: (windowWidth) => ({
    width: windowWidth / 2.2
  }),
  title: {
    color: 'black'
  }
})
