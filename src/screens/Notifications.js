import React, {Component} from 'react';
import {Header, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import styles from '../styles/style';

export default class Notifications extends Component {
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
        <Text style={styles.textColor}>Notifications</Text>
      </View>
    );
  }
}
