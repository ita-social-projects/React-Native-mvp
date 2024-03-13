import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { I18n } from 'i18n-js'
import * as Localization from 'expo-localization'

import { translations } from '~/localization/localization'

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
    </View>
  )
}

export default Home
