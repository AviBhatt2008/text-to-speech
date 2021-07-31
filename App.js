import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from "expo-speech";

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  render() {
    return(
      <View>
        <TextInput
        style = {styles.textInputStyle}
        placeholder="Search"
        onChangeText = {text => {
          this.setState({ text: text })
        }}/>

        <TouchableOpacity
        style = {styles.goButton}
        onPress = {() => {
          this.state.text != "" ?
          (Speech.speak(this.state.text))
          : (alert("no"))
          }}>

          <Text style = {{color: "white", paddingBottom: 2, paddingLeft: 2, fontSize: 17}}>Go</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'red',
    color: 'black',
    fontSize: 22,
    outline: 'none',
    borderRadius: 20,
    width: 250,
    marginTop: 320
  },
  goButton: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    marginTop: -38,
    marginLeft: 210,
    borderRadius: 18,
    backgroundColor: '#29b6f6',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
