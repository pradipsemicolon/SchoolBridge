import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginStyle } from '../Login/LoginStyle';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
export default class AddLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <SafeAreaView>
                    <View style={styles.mainView}>

                        <View style={[LoginStyle.headerView, { marginTop: hp(2.67), }]}>
                            <TouchableOpacity>
                                <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                            </TouchableOpacity>
                            <Text style={LoginStyle.headingText}>Add Link</Text>
                        </View>
                        <View style={styles.section2} >


                            <View>
                                <View>
                                    <View style={styles.v1}>
                                        <Text style={[styles.accountButtonText, { color: Colors.blackColor, }]}>{"item.name"}</Text>

                                    </View>
                                    <TextInput
                                        placeholder='tivabna@mircaka.net'
                                        style={styles.textInputStyle}
                                    />
                                    <View style={[styles.v1, { marginTop: hp(2.46) }]}>
                                        <Text style={[styles.accountButtonText, { color: Colors.blackColor, }]}>{"item.name"}</Text>
                                    </View>
                                    <TextInput
                                        placeholder='tivabna@mircaka.net'
                                        style={styles.textInputStyle}
                                    />

                                </View>


                            </View>

                        </View>
                        <TouchableOpacity style={[styles.btn2, { marginTop: hp(4.93) }]} >
                            <Text style={styles.continueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: wp(5.33),
        height: '100%'
    },
    v1: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(2.46), },
    accountButtonText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        marginLeft: 10,
        letterSpacing: 0.48,
    },
    accountButtonText2: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        marginLeft: 10,
        letterSpacing: 0.6,
    },
    continueText:{ color: '#3f288d', fontFamily: Fonts.Medium, fontSize: hp(1.72), letterSpacing: 0.35 },
    textInputStyle: {
        borderBottomWidth: 1,
        marginHorizontal: wp(2.46),
        borderBottomColor: Colors.lineColor,
        paddingLeft: 5,
        fontSize: hp(1.97),
        paddingLeft: 8,
        height: hp(6),
        width: wp(78.26),
        alignSelf: 'center'
    },
    section2: {
        backgroundColor: 'white',
        marginTop: hp(2.68),
        // height:hp(25.06),
        borderRadius: 20,
        elevation: 5,
        paddingVertical: hp(2),
        shadowOffset: { height: 2, width: 0 },
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 0.2
    },
    btn2: {
        borderColor: '#3f288d',
        borderWidth: 1,
        marginRight: wp(0.83),
        height: hp(6.89),
        borderRadius: 12,
        position: 'absolute',
        bottom: 0,
        // elevation:5,
        width: wp(80.92),
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center'
    },
})
