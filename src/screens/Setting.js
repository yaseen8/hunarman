import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/style';

export default class Settings extends Component {
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
        <Text style={styles.textColor}>Settings</Text>
      </View>
    );
  }
}
