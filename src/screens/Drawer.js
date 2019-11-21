import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 32}}>Drawer</Text>
        <DrawerNavigatorItems {...this.props} />
      </View>
    );
  }
}

export default SideMenu;
