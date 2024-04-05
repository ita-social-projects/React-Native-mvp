import { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image
} from 'react-native'
import { Stack, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'

import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  Directions
} from 'react-native-gesture-handler'

import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight
} from 'react-native-reanimated'

import { onboardingSteps } from '~/constants/onboarding'

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0)
  const data = onboardingSteps[screenIndex]

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1
    isLastScreen
      ? setScreenIndex(0)
      : setScreenIndex((prevState) => prevState + 1)
  }

  const onBack = () => {
    const isFirstScreen = screenIndex === 0
    isFirstScreen
      ? setScreenIndex(0)
      : setScreenIndex((prevState) => prevState - 1)
  }

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  )

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaView style={styles.page}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar style='light' />
        <GestureDetector gesture={swipes}>
          <View key={screenIndex} style={styles.pageContent}>
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.imageContainer}
            >
              <Image
                resizeMode='contain'
                source={data.image}
                style={styles.image}
              />
            </Animated.View>
            <View style={styles.textWrapper}>
              <Animated.Text
                entering={SlideInRight}
                exiting={SlideOutLeft}
                style={styles.title}
              >
                {data.title}
              </Animated.Text>
              <Animated.Text
                entering={SlideInRight.delay(50)}
                exiting={SlideOutLeft}
                style={styles.description}
              >
                {data.description}
              </Animated.Text>
            </View>
            <View style={styles.footer}>
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
              <View style={styles.buttonsRow}>
                <Pressable
                  onPress={() => router.replace('/signup')}
                  style={styles.button}
                >
                  {/**TODO
                    eslint rule >=5 (eslint warnings) fix that 
                    now set value 7 but necessary set 5 
                    'react/jsx-max-depth': ['error', { max: 5 }],
                  */}
                  <Text style={styles.buttonText}>Get Started</Text>
                  <AntDesign color='#fff' name='arrowright' size={20} />
                </Pressable>
              </View>
              <Text
                onPress={() => router.replace('/login')}
                style={styles.loginText}
              >
                Login
              </Text>
            </View>
          </View>
        </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

//TODO create pallete with colors
const colors = {
  darkBlue: '#273239',
  lightGray: '#cfd8dc',
  mediumBlue: '#637c85',
  white: '#fff',
  black: '#000',
  offWhite: '#fefefe'
}

//TODO separate styles (all files)
const styles = StyleSheet.create({
  activeStepIndicator: {
    backgroundColor: colors.mediumBlue
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },
  buttonText: {
    color: colors.offWhite,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10
  },
  buttonsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  description: {
    color: colors.black,
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 'auto'
  },
  gestureHandler: {
    flex: 1
  },
  image: {
    alignSelf: 'center',
    height: '100%',
    margin: 20,
    marginTop: 70,
    width: '100%'
  },
  imageContainer: {
    alignSelf: 'center',
    height: 300,
    margin: 20,
    marginTop: 40,
    width: 300
  },
  loginText: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center'
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  },
  pageContent: {
    flex: 1,
    padding: 20
  },
  stepIndicator: {
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 4,
    width: 10
  },
  stepIndicatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textWrapper: {
    marginVertical: 60
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  }
})

export default OnboardingScreen
