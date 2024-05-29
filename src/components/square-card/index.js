import { View, Image, Pressable } from 'react-native'
import { Text } from 'react-native-paper'

import { styles } from './SquareCard.styles'

const SquareCard = ({ data, chooseRole, choosenRole }) => {
  const { title, image, role } = data.item

  const onPress = () => {
    chooseRole(role)
  }
  return (
    <Pressable onPress={onPress} style={styles.roleBox(choosenRole === role)}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default SquareCard
