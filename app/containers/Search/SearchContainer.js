import React, { PropTypes, Component } from 'react'
import { View, TouchableOpacity ,StyleSheet, Dimensions, Text} from 'react-native'

const { height,width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcc00',
    width: width,
    height: height,
  },


});


export default class SearchContainer extends Component {
  static propTypes = {

  };

  constructor (props) {
    super(props)
  };

 render(){
    return (
    <View style={styles.container} >
       <Text> TEST </Text>
   </View>
    )
  }

}

