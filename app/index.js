import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { I18n } from 'i18n-js'
import * as Localization from 'expo-localization'
import { Button as ButtonPaper } from 'react-native-paper'
import { translations } from '../localization/localization.js'
import { Link } from 'expo-router'
// import { styles } from './my-resources/MyResources.styles.jsx'

const Home = () => {
  let [locale, setLocale] = useState(Localization.locale)
  const i18n = new I18n(translations)

  return (
    <View>
      <Text>{i18n.t('greeting')}</Text>
      <Text>{locale}</Text>
      <Button color='#841584' onPress={() => setLocale('en')} title='English' />
      <Button
        color='#841584'
        onPress={() => setLocale('uk')}
        title='Ukrainian'
      />
      <Link href="/my-resources">
        <View style={styles.container}>
          <ButtonPaper
            style={styles.button}
            mode="contained"
            buttonColor='lightgreen'
            textColor='#111'
          >
            My resources
          </ButtonPaper>
        </View>
      </Link>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    color: '#111',
  },
})

export default Home
