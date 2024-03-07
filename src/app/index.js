import { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Localization from "expo-localization";
import { Link } from "expo-router";
import { I18n } from "i18n-js";

import { translations } from "~/localization/localization";

const Home = () => {
  let [locale, setLocale] = useState(Localization.locale);
  const i18n = new I18n(translations);

  return (
    <View>
      <Text>{i18n.t("greeting")}</Text>
      <Button onPress={() => setLocale("en")} title='English' color='#841584' />
      <Button
        onPress={() => setLocale("uk")}
        title='Ukrainian'
        color='#841584'
      />
    </View>
  );
};

export default Home;
