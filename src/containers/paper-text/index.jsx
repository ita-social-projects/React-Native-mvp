import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

import { styles } from '~/constants/onboarding/Onboarding.styles'

const PaperText = ({
  children,
  style = {},
  variant = '',
  onPress = () => {}
}) => {
  let styleVariant

  switch (variant) {
    case 'title':
      styleVariant = StyleSheet.flatten([styles.wrapper, styles.text, style])
      break
    case 'descriptionText':
      styleVariant = StyleSheet.flatten([styles.descriptionText, style])
      break
    case 'combineText':
      styleVariant = StyleSheet.flatten([
        styles.descriptionText,
        styles.wrapper,
        styles.text,
        style
      ])
      break
    case 'headlineSmall':
      styleVariant = StyleSheet.flatten([
        styles.wrapper,
        styles.headlineSmall,
        style
      ])
      break
    case 'headlineMedium':
      styleVariant = StyleSheet.flatten([
        styles.wrapper,
        styles.headlineMedium,
        style
      ])
      break
    case 'titleSmall':
      styleVariant = StyleSheet.flatten([
        styles.wrapper,
        styles.titleSmall,
        style
      ])
      break
    default:
      styleVariant = StyleSheet.flatten([styles.wrapper, style])
      break
  }

  return (
    <Text onPress={onPress} style={styleVariant}>
      {children}
    </Text>
  )
}

export default PaperText
