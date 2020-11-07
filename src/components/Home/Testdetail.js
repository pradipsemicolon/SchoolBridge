import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Slick from 'react-native-slick';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

export default class Testdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Slick activeDotStyle={{marginBottom:hp(-5), backgroundColor:Colors.themeColor}} dotStyle={{marginBottom:hp(-5)}} style={styles.wrapper} showsButtons={false}>
                    <View>
                        <Text style={styles.headingText}>Fees</Text>
                        <Text style={styles.subText}>Chapter 2 test</Text>
                        <Text style={styles.subText2}>
                            Hello students, Hope you are doing well at home. Maths Test is going to be held on this monday. Please be prepared
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.headingText}>Fees</Text>
                        <Text style={styles.subText}>Chapter 2 test</Text>
                        <Text style={styles.subText2}>
                            Hello students, Hope you are doing well at home. Maths Test is going to be held on this monday. Please be prepared
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.headingText}>Fees</Text>
                        <Text style={styles.subText}>Chapter 2 test</Text>
                        <Text style={styles.subText2}>
                            Hello students, Hope you are doing well at home. Maths Test is going to be held on this monday. Please be prepared
                        </Text>
                    </View>

                </Slick>

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
    headingText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        // fontWeight: 'bold'
    },
    subText: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Medium,
        // fontWeight: '500',
        // marginTop:5

    },
    subText2: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Regular,
        // fontWeight: '400',
        color: '#5B5B5B',
        lineHeight: hp(2.22),
        marginTop: 8
    }

})