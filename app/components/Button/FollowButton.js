import React, { PropTypes, Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  default:{
    flex: 1,
    padding: 5,
  },
  active: {
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 3,
    borderColor: '#111',
    borderWidth: 1,
    backgroundColor: '#222',
  },
  disable:{
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 3,
    borderColor: '#555555',
    borderWidth: 1,
    backgroundColor: '#444444',
  },
  activeText: {
    fontSize: 13,
    color: '#fff',
  },
  disableText: {
    fontSize: 13,
    color: '#dfdfdf'
  }
});



class FollowButton extends Component {
  static propTypes = {
    cta: PropTypes.string,
   active: PropTypes.bool
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
    <TouchableOpacity onPress={this.onPress.bind(this)} style={this.props.active ? styles.active : styles.disable}  >
        <Text style={this.props.active ? styles.activeText : styles.disableText}> {this.props.active ? 'Following' : 'Follow'} </Text>
    </TouchableOpacity>
    )
  }
}

export default FollowButton
