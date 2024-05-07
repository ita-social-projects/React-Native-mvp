import { Text } from 'react-native-paper'
import { screen1, screen2, screen3 } from '~/assets/screens'

import { styles } from './Onboarding.styles'

export const onboardingSteps = [
  {
    image: screen1,
    title: (
      <>
        <Text style={styles.wrapper} variant='headlineSmall'>
          The secret of getting{' '}
        </Text>
        <Text style={[styles.text, styles.wrapper]} variant='headlineSmall'>
          ahead{' '}
        </Text>
        <Text style={styles.wrapper} variant='headlineSmall'>
          is getting{' '}
        </Text>
        <Text style={[styles.text, styles.wrapper]} variant='headlineSmall'>
          started
        </Text>
      </>
    ),
    description: (
      <>
        <Text style={styles.descriptionText}>Welcome to the </Text>
        <Text style={[styles.descriptionText, styles.text]}>Space2Study </Text>
        <Text style={styles.descriptionText}>learning app!</Text>
      </>
    )
  },
  {
    image: screen2,
    title: (
      <>
        <Text style={[styles.text, styles.wrapper]} variant='headlineSmall'>
          Learn{' '}
        </Text>
        <Text style={styles.wrapper} variant='headlineSmall'>
          from experts
        </Text>
      </>
    ),
    description: (
      <Text style={styles.descriptionText}>
        Enjoy personalized lessons and easy communication with the right tutor
        for you.
      </Text>
    )
  },
  {
    image: screen3,
    title: (
      <>
        <Text style={[styles.text, styles.wrapper]} variant='headlineSmall'>
          Share{' '}
        </Text>
        <Text style={styles.wrapper} variant='headlineSmall'>
          your experience
        </Text>
      </>
    ),
    description: (
      <Text style={styles.descriptionText}>
        Create your expert content, engage students, and track progress easily.
      </Text>
    )
  }
]
