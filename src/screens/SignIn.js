import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/style';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  GoToHome = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Text style={styles.textColor}>Sign In Page</Text>
        <TouchableOpacity onPress={this.GoToHome}>
          <Text style={styles.signupButton}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignIn;
