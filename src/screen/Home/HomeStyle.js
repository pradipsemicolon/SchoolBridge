import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../utils/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';

export const HomeStyle = StyleSheet.create({
    homeView: { backgroundColor: Colors.backColor, paddingBottom: hp(2) },
    scroll: { width: '100%', height: '100%' },
    headerView: { flexDirection: 'row', marginTop: hp(3.69), alignItems: 'center' },
    userImage: { width: hp(4.93), height: hp(4.93), borderRadius: 20, backgroundColor: Colors.lineColor },
    textView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 8, width: '89%' },
    hiText: { fontSize: hp(1.97), fontFamily: Fonts.Regular, color: '#292929' },
    welcomeText: { fontSize: hp(2.96), fontFamily: Fonts.Bold },
    alertButton: { width: hp(4.93), height: hp(4.93), borderRadius: 20, borderWidth: 2, borderColor: '#A7A7A7', alignItems: 'center', justifyContent: 'center' },
    dotImage: { position: 'absolute', width: hp(1.48), height: hp(1.48), borderRadius: hp(74), backgroundColor: Colors.themeColor, right: 0, top: 0 },
    head: { flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(4.93), paddingHorizontal: wp(4.27) },
    title: { fontFamily: Fonts.Bold, fontSize: hp(2.46), color: Colors.blackColor, letterSpacing:0.6 },
    seeallText: { color: '#5B5B5B', fontFamily: Fonts.Regular, fontSize: hp(1.97) },

})