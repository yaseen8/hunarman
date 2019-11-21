import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header, Left} from 'native-base';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  openDrawer = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon.Button name="menu" size={30} onPress={this.openDrawer} />
          </Left>
        </Header>
        <Text style={styles.textColor}>Home Page</Text>
        {/*<TouchableOpacity onPress={this.SignIn}>*/}
        {/*  <Text style={styles.signupButton}>Sign In</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    );
  }
}
