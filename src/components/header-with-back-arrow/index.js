import { Text } from 'react-native-paper'
import { View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { styles } from './HeaderWithBackArrow.styles'

const HeaderWithBackArrow = ({ route, text, onPress }) => {
  const interactiveArrow = onPress ? (
    <Pressable onPress={onPress} style={styles.arrowWrapper} testID='Pressable'>
      <AntDesign name='arrowleft' size={25} />
    </Pressable>
  ) : (
    <Link href={route} style={styles.arrowWrapper}>
      <AntDesign name='arrowleft' size={25} />
    </Link>
  )
  return (
    <View style={styles.headerContainer}>
      {interactiveArrow}
      <Text variant='headlineSmall'>{text}</Text>
    </View>
  )
}

export default HeaderWithBackArrow
