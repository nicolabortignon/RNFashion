import React, { PropTypes, Component } from 'react'
import { View, TouchableOpacity ,StyleSheet, Dimensions, Text} from 'react-native'

const { height,width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ccff',
    width: width,
    height: height,
  },


});


export default class UserContainer extends Component {


  constructor (props) {
    super(props)
  };

 render(){
    return (
    <View style={styles.container} >
       <Text> All user Info here </Text>
   </View>
    )
  }

}

