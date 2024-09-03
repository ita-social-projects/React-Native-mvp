import { View } from 'react-native'
import SortAndFilter from '~/components/sort-and-filter'
import { PaperText } from '~/containers'

const Questions = () => {
  return (
    <View>
      <SortAndFilter />
      <PaperText>Questions</PaperText>
    </View>
  )
}

export default Questions
