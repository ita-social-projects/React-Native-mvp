import { useRef } from 'react'
import { View } from 'react-native'
import { PaperText } from '~/containers'
import { SortAndFilter, CustomBottomSheet } from '~/components'

const Categories = () => {
  const categoriesSheetRef = useRef('')
  const sortSheetRef = useRef('')

  const snapPoints = ['30%']

  const onPressCategories = () => {
    categoriesSheetRef.current.expand()
  }

  const onPressSort = () => {
    sortSheetRef.current.expand()
  }

  const contentCategories = <PaperText>Categories</PaperText>
  const contentSort = <PaperText>Sort </PaperText>

  return (
    <View>
      <SortAndFilter
        onPressCategories={onPressCategories}
        onPressSort={onPressSort}
      />
      <PaperText>Categories</PaperText>
      <CustomBottomSheet
        content={contentCategories}
        ref={categoriesSheetRef}
        snapPoints={snapPoints}
      />
      <CustomBottomSheet
        content={contentSort}
        ref={sortSheetRef}
        snapPoints={snapPoints}
      />
    </View>
  )
}

export default Categories
