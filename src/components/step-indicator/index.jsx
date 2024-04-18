import { View } from 'react-native'
import { onboardingSteps } from '~/constants/onboarding'

import { styles } from '~/components/step-indicator/StepIndicator.styles'

const StepIndicator = ({ screenIndex }) => (
  <View style={styles.stepIndicatorContainer}>
    {onboardingSteps.map((step, index) => (
      <View
        key={index}
        style={[
          styles.stepIndicator,
          index === screenIndex ? styles.activeStepIndicator : {}
        ]}
      />
    ))}
  </View>
)

export default StepIndicator
