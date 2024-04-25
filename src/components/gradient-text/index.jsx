import MaskedView from '@react-native-masked-view/masked-view'
import { Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from '~/components/gradient-text/GradientText.styles'

const GradientText = ({
  variant,
  text,
  style,
  colors = ['#294083', '#54BB7D']
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.defaultText, style]} variant={variant}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
      >
        <Text variant={variant}></Text>
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText
