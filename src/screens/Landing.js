import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/style';

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  SignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <View>
        <Text style={styles.textColor}>Landing Page</Text>
        <TouchableOpacity onPress={this.SignIn}>
          <Text style={styles.signupButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Landing;
