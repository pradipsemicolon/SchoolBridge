import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DropDown extends Component {

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {
        return (
            <Menu
                ref={this.setMenuRef}
                style={styles.menuView}
                button={
                    <TouchableOpacity onPress={this.showMenu}>
                        <Icon name="chevron-down" size={15} color={Colors.blackColor} />
                    </TouchableOpacity>}
            >
                <View style={{ alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item) => {
                            return (

                                < MenuItem style={{ height: hp(7.02) }} onPress={this.hideMenu} >
                                    <View style={styles.menuStyles}>
                                        <Text style={styles.menuText}>Menu item 1</Text>
                                        <View style={styles.lineView} />
                                    </View>
                                </MenuItem>
                            )
                        })
                    }
                </View>


            </Menu>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: hp(50),
        width: wp(63.2),
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 4,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    menuStyles: { width: '100%', height: '100%', width: wp(65), paddingHorizontal: wp(5.33) },
    lineView: { height: 1, backgroundColor: 'rgba(0,0,0,0.1)' },
    menuText: { paddingVertical: hp(2.46), textAlign: 'left', paddingLeft: wp(2.67), fontFamily: Fonts.Regular, fontSize: hp(1.72) },
    menuView: {
        width: wp(63.2),
        alignSelf: 'flex-end'
    }
})
