import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class E_learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={{ marginTop: hp(2.46), }} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    [1, 2, 3].map((item) => {
                        return (
                            <View style={styles.mainView}>
                                <View style={styles.subView}>
                                    <Text style={styles.headingText}>Psychology</Text>
                                </View>
                                <Text style={styles.subText}>Introduction</Text>

                                <View style={styles.progressView}>
                                    <ProgressCircle
                                        percent={30}
                                        radius={hp(6.28)}
                                        borderWidth={8}
                                        color={Colors.themeColor}
                                        shadowColor="#F1F3F8"
                                        bgColor="#fff"
                                        width={hp(12.56)}
                                        height={hp(12.56)}
                                    >
                                        <Text style={[styles.percentageText]}>{'30%'}</Text>
                                    </ProgressCircle>
                                </View>
                                <TouchableOpacity style={styles.playButtonStyle}>
                                    <Ionicons name="ios-play-outline" color={'#FFFFFF'} size={18} style={{ alignSelf: 'center', }} />
                                    <Text style={styles.playText}>Play</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: hp(29.56),
        width: wp(41.87),
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 5,
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.46),
        alignItems: 'center',
        marginRight: wp(4.27)
    },
    subView: { flexDirection: 'row', justifyContent: 'space-between' },
    headingText: {
        fontSize: hp(1.97),
        fontFamily: Fonts.Medium,
    },
    progressView: { marginTop: hp(2.46), alignSelf: 'center', },
    percentageText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
    },
    subText: {
        color: '#5B5B5B',
        alignSelf: 'center',
        fontSize: hp(1.48),
    },
    playButtonStyle: {
        width: wp(32),
        height: hp(4.93),
        backgroundColor: Colors.themeColor,
        borderRadius: 10,
        marginTop: hp(1.23),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playText: {
        fontSize: hp(1.97),
        fontFamily: Fonts.Medium,
        marginLeft: wp(1),
        color: '#fff'
    },


})