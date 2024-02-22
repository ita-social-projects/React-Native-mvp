import { View, Text, Button} from 'react-native';

import React, { useState } from "react"

import { Link } from 'expo-router';

import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { translations } from '../localization/localization.js';


export default function Home() {
  let [locale, setLocale] = useState(Localization.locale)
  const i18n = new I18n(translations)

  return (
    <View>
      <Text>{i18n.t('greeting')}</Text>
      <Button onPress={() => setLocale("en")} title="English" color="#841584" />
      <Button onPress={() => setLocale("uk")} title="Ukrainian" color="#841584" />
    </View>
  );
}
