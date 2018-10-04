import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'

class InputUsers extends Component{
  static navigationOptions = {
    title: 'Input Users'
  }

  // constructor(props)
  // {
  //   super(props)
  //   this.state = {
  //     TextInputName='',
  //     TextInputEmail='',
  //     TextInputPhoneNumber='',
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }  
}

export default CodeTR = createStackNavigator ({
    First: {screen: InputUsers}
});


AppRegistry.registerComponent('navigation', () => CodeTR);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
