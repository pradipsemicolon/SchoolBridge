import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

export default class Fees extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <Text style={styles.headingText}> Fees </Text>
                </View>
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
                        <Text style={styles.headingText}>{'30%'}</Text>
                    </ProgressCircle>
                </View>
                <Text style={styles.nextText}>Next Due</Text>
                <Text style={styles.dateText}>13 Sept, 2020</Text>

            </View>
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
        marginTop: hp(2.46),
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.46),
    },
    subView: { flexDirection: 'row', justifyContent: 'space-between' },
    progressView: { marginTop: hp(2.46), alignSelf: 'center', },
    headingText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        // fontWeight: 'bold'
    },
    nextText: { color: '#5B5B5B', alignSelf: 'center', fontSize: hp(1.48), marginTop: hp(2.46) },
    dateText: { color: Colors.blackColor, alignSelf: 'center', fontWeight: 'bold', fontSize: hp(1.72) },
})