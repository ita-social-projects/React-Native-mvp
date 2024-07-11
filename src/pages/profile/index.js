import { Button } from 'react-native-paper'
import { router } from 'expo-router'
import { View } from 'react-native'

import { PaperText } from '~/containers'

const Profile = () => {
  return (
    <View>
      <PaperText>Profile</PaperText>
      <Button
        buttonColor='lightblue'
        mode='contained-tonal'
        onPress={() => router.replace('/drawer/tabs/tutor-home')}
        textColor='#111'
      >
        Back
      </Button>
    </View>
  )
}

export default Profile
