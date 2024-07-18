import { View, Dimensions } from 'react-native'
import { List } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './SortAndFilter.styles'

const SortAndFilter = ({ onPressSort, onPressCategories }) => {
  const windowWidth = Dimensions.get('window').width

  return (
    <View style={styles.constainer}>
      <List.Accordion
        left={(props) => (
          <Ionicons
            {...props}
            color='black'
            name='color-filter-outline'
            size={20}
          />
        )}
        onPress={onPressCategories}
        right={(props) =>
          props.isExpanded ? (
            <Ionicons color='black' name='caret-up' size={10} />
          ) : (
            <Ionicons color='black' name='caret-down' size={10} />
          )
        }
        style={styles.categoriesList(windowWidth)}
        title='Categories'
        titleStyle={styles.title}
      />
      <List.Accordion
        onPress={onPressSort}
        right={(props) =>
          props.isExpanded ? (
            <Ionicons color='black' name='arrow-up' size={20} />
          ) : (
            <Ionicons color='black' name='arrow-down' size={20} />
          )
        }
        style={styles.sortList}
        title='Last updated'
        titleStyle={styles.title}
      />
    </View>
  )
}

export default SortAndFilter
