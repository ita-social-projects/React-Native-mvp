import { useCallback } from 'react'
import { Linking } from 'react-native'
import { PaperText } from '~/containers'

import { styles } from '~/containers/sign-up/detailed/DetailedContent.styles'

export const PrivacyURL = ({ url, children }) => {
  const handlePress = useCallback(() => {
    Linking.openURL(url)
  }, [url])

  return (
    <PaperText onPress={handlePress} style={styles.policyTerms}>
      {children}
    </PaperText>
  )
}
