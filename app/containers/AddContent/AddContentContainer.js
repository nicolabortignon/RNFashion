import React, { PropTypes, Component } from 'react'
import { View, TouchableOpacity ,StyleSheet, Dimensions, Text} from 'react-native'

const { height,width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c00fcc',
    width: width,
    height: height,
  },


});


export default class AddContentContainer extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  };

  constructor (props) {
    super(props)
  };

  onPress() {
    if(this.props.onPress) {
      this.props.onPress()
    }
  }

 render(){
    return (
    <View style={styles.container} >
       <Text> This option should be available only to a limited amount of people </Text>
   </View>
    )
  }

}

