import React, {Component} from 'react';
import { 
          AppRegistry, 
          StyleSheet, 
          Text, 
          View, 
          TextInput,
          TouchableOpacity 
} from 'react-native';
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

  // InsertUsers = () => {
  //   const {TextInputName} = this.state;
  //   const {TextInputEmail} = this.state;
  //   const {TextInputPhoneNumber} = this.state;
  // }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = "Enter Name"
          onChangeText = {TextInputValue => this.setState({TextInputName: TextInputValue})}
          underlineColorAndroid = 'transparent'
          style = {styles.TextInputStyle2}
        />
        <TextInput
          placeholder = "Enter Email"
          onChangeText = {TextInputValue => this.setState({TextInputEmail: TextInputValue})}
          underlineColorAndroid = 'transparent'
          style = {styles.TextInputStyle}
        />
        <TextInput
          placeholder = "Enter PhoneNumber"
          onChangeText = {TextInputValue => this.setState({TextInputPhoneNumber: TextInputValue})}
          underlineColorAndroid = 'transparent'
          style = {styles.TextInputStyle}
        />
        <TouchableOpacity activeOpacity = {.4} style = {styles.TouchableOpacityStyle} onPress={this.InputUsers}>
            <Text>Save</Text>
        </TouchableOpacity>
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
  },
  TextInputStyle: {
    textAlign:'center',
    marginBottom: 7,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF5722',
  },
  TextInputStyle2: {
    textAlign:'center',
    marginBottom: 7,
    width: '90%',
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF5722',
  },
  TouchableOpacityStyle: {

  }
});
