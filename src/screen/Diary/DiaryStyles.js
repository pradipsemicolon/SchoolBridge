import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../utils/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';

export const DiaryStyles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backColor,
        paddingHorizontal: wp(5.33),
    },
    heading: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    headingtext: {
        fontSize: 24,
        color: '#3f288d',
        fontWeight: 'bold',
        marginBottom: hp(1)
    },
    diaryActivityView: {
        flexDirection: 'row',
        paddingHorizontal: wp(5.33),
        paddingTop: hp(4.93),
        justifyContent: 'space-between',
    },
    filterView: {
        backgroundColor: 'white',
        width: wp(22.67),
        height: hp(3.94),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    diaryActvityText: {
        fontSize: hp(2.96),
        fontFamily: Fonts.Medium,
    },
    filterText: {
        fontSize: hp(1.48),
        alignSelf: 'center',
        marginLeft: wp(3.2)
    },
    iconView: {
        backgroundColor: '#3f288d',
        height: hp(3.94),
        width: hp(3.94),
        borderRadius: 10,
    },
    borderRadiousView: {
        flex: 1.6,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,
        // height: hp(53.57)
    },

    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        paddingTop: hp(4.93),
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        marginLeft: wp(5.33),
        marginBottom: hp(2.96)
    },
    title: {
        fontSize: 24
    },
    clipView: {
        backgroundColor: '#F1F3F6',
        height: hp(5.17),
        width: wp(11.2),
        borderRadius: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    messageView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messageText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
        color: Colors.blackColor
    },
    timeText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.23),
        letterSpacing: 0.3,
        color: 'black'
    },
    descText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        letterSpacing: 0.6,
        lineHeight: hp(2.22),
        color: '#5B5B5B',
        marginTop: hp(1.48),
        marginBottom: hp(2.46)
    },
    docNameText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.23),
        letterSpacing: 0.3,
        color: Colors.themeColor,
        marginLeft: 3
    },
    docView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1.48),
        marginBottom: hp(3.20)
    },



    // Attachment view styles.
    attachmentView: {
        flexDirection: 'row',
        borderWidth: 1,
        // width:wp(31.73),
        // height: 35,
        marginLeft: wp(5.33),
        borderRadius: 13,
        borderColor: Colors.themeColor,
        backgroundColor: '#ede7f6',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(31.73),
        marginTop: hp(1.85)
    },

    // Filterview Styles.
    filterViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    filterTitle: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.46),
        letterSpacing: 0.6
    },
    filterButton: {
        width: wp(89.33),
        height: 56,
        borderRadius: 12,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: hp(2.46),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5.33)
    },
    filterButtonText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(2.46),
        marginLeft: 10
    },
    AttachmentText: {
        color: '#3f288d',
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        paddingVertical: hp(0.73)
    },
    nameText: { fontSize: 16, fontWeight: 'bold' },
    adminText: { color: 'grey', fontSize: 12, marginBottom: hp(2.70) },
    timeView: { flexDirection: 'row', alignSelf: 'center' },
    lineView: { borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)' },


})