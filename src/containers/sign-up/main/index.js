import { View, FlatList } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

import { roles } from '~/constants/sign-up'
import { SquareCard, HeaderWithBackArrow } from '~/components'

import { PaperText } from '~/containers'

import { styles } from './MainConetent.styles'

const MainContent = ({ nextStep, chooseRole, role }) => {
  const onHandlePress = () => {
    nextStep(true)
  }

  const Separator = () => {
    return <View style={styles.separator} />
  }

  const renderer = (item) => (
    <SquareCard chooseRole={chooseRole} choosenRole={role} data={item} />
  )

  return (
    <>
      <HeaderWithBackArrow route='/' text='Sign up' />
      <View style={styles.mainContaner}>
        <View>
          <PaperText bold style={styles.title} variant='headlineMedium'>
            Introduce{' '}
            <PaperText bold style={styles.titleMain} variant='headlineMedium'>
              yourself
            </PaperText>
          </PaperText>
          <PaperText style={styles.subtitle} variant='titleSmall'>
            Please, indroduce yourself be adding your name and aim role on a
            platform
          </PaperText>
        </View>
        <View style={styles.InputContainer}>
          <PaperText variant='titleSmall'>Enter your name:</PaperText>
          <TextInput
            label='First name'
            mode='outlined'
            theme={styles.inputTheme}
          />
          <TextInput
            label='Last name'
            mode='outlined'
            style={styles.bottomInput}
            theme={styles.inputTheme}
          />
        </View>
        <View>
          <PaperText variant='titleSmall'>Choose your aim role:</PaperText>
          <FlatList
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.rolesContainer}
            data={roles}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={renderer}
          />
        </View>
      </View>
      <Button
        contentStyle={styles.buttonContent}
        icon={() => (
          <AntDesign
            color='#fff'
            name='arrowright'
            size={20}
            style={styles.buttonIcon}
          />
        )}
        mode='contained'
        onPress={onHandlePress}
        style={styles.button}
      >
        <PaperText style={styles.buttonText}>Next</PaperText>
      </Button>
    </>
  )
}

export default MainContent
