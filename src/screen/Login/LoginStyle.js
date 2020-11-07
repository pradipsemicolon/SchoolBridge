import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../utils/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';



export const LoginStyle = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backColor,
        paddingHorizontal: wp(5.33),
    },
    headerView: {
        flexDirection: 'row',
        marginTop: hp(3.54),
        marginLeft: wp(5.33)
    },
    headingText: {
        fontSize: hp(2.96),
        color: Colors.themeColor,
        fontFamily: Fonts.Medium,
        marginLeft: wp(3.2)
    },
    hiText: {
        fontSize: hp(3.94),
        fontFamily: Fonts.Bold,
        color: Colors.blackColor,
        // fontWeight: 'bold',
        marginLeft: wp(5.34),
        marginTop: hp(3.94)
    },
    chooseText: {
        fontSize: hp(2.46),
        color: Colors.blackColor,
        fontFamily: Fonts.Bold,
        marginLeft: wp(5.34),
        marginTop: hp(3.94)
    },
    tabView: {
        marginTop: hp(2.46),
        flexDirection: 'row',
        width: wp(89.33),
        height: 50,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 5,
    },
    tabButton: {
        width: wp(29.78),
        height: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'

    },
    tabText: {
        fontSize: 14,
        fontWeight: '500'
    },
    loginView: {
        marginTop: hp(4.93),
        width: wp(89.33),
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 4,
    },
    textInputStyle: {
        borderBottomWidth: 1,
        marginHorizontal: wp(5.34),
        borderBottomColor: Colors.lineColor,
        paddingLeft: 5,
        fontSize: hp(1.97)
    },
    forgotPassButton: {
        marginTop: hp(2.52),
        alignItems: 'flex-end',
        marginRight: wp(5.33)

    },
    forgotText: {
        color: Colors.themeColor,
        fontFamily: Fonts.Bold,
        fontSize: 12
    },
    loginButton: {
        height: 56,
        width: wp(78.67),
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.themeColor,
        borderRadius: 12,
        marginVertical: hp(2.52)
    },
    loginButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    }
}) 