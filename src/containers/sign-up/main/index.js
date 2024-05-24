import { View, FlatList } from 'react-native'
import { TextInput, Text, Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

import { roles } from '~/constants/sign-up'
import { SquareCard, HeaderWithBackArrow } from '~/components'

import { styles } from './MainConetent.styles'

const MainContent = ({ nextStep, chooseRole }) => {
  const [pressed, setPressed] = useState({
    student: false,
    tutor: false
  })

  const onHandlePress = () => {
    nextStep(true)
  }

  const Separator = () => {
    return <View style={styles.separator} />
  }

  const renderer = (item) => (
    <SquareCard
      chooseRole={chooseRole}
      data={item}
      pressed={pressed}
      setPressed={setPressed}
    />
  )

  return (
    <>
      <HeaderWithBackArrow route='/' text='Sign up' />
      <View style={styles.mainContaner}>
        <View>
          <Text style={styles.title} variant='headlineMedium'>
            Introduce{' '}
            <Text style={styles.titleMain} variant='headlineMedium'>
              yourself
            </Text>
          </Text>
          <Text style={styles.subtitle} variant='titleSmall'>
            Please, indroduce yourself be adding your name and aim role on a
            platform
          </Text>
        </View>
        <View style={styles.InputContainer}>
          <Text variant='titleSmall'>Enter your name:</Text>
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
          <Text variant='titleSmall'>Choose your aim role:</Text>
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
        <Text style={styles.buttonText}>Next</Text>
      </Button>
    </>
  )
}

export default MainContent
