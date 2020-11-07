import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';

export default class UpcomingEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={{ marginTop: hp(2.46) }} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    [1, 2].map((item, index) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.subView}>
                                    <Image style={styles.eventImage} />
                                    <View>
                                        <Text style={styles.eventNametext}>Independence Day</Text>
                                        <Text style={styles.eventDatetext}>Friday, 15 Aug, 2020</Text>
                                    </View>
                                </View>
                                <Text style={styles.descText}>We are going to celebrate our Independance day on Next tuesday. Please don’t forget…</Text>
                                <View style={styles.v1}>
                                    <View style={styles.v2}>
                                        {
                                            [1, 2, 3, 4].map((item, index) => {
                                                return (
                                                    <Image style={styles.participentsImage} />
                                                )
                                            })
                                        }
                                    </View>
                                    <Text style={styles.eventDatetext}>126 Participants</Text>

                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: wp(62.13),
        height: hp(21.30),
        backgroundColor: '#632FF5',
        borderRadius: 20,
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.43),
        marginRight: wp(4.27)
    },
    subView:{ flexDirection: 'row', alignItems: 'center' },
    v1:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: hp(2.22) },
    v2:{ flexDirection: 'row', marginLeft: wp(1.6) },
    eventImage: {
        height: hp(4.93),
        width: hp(4.93),
        borderRadius: hp(4.93 / 2),
        backgroundColor: '#FFFFFF'
    },
    eventNametext: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        color: 'white',
        marginLeft: 5,
        letterSpacing: 0.48

    },
    eventDatetext: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.23),
        color: 'white',
        marginLeft: 5,
        letterSpacing: 0.3
    },
    descText: {
        height: hp(6.65),
        fontSize: hp(1.48),
        fontFamily: Fonts.Regular,
        color: '#FFFFFF',
        lineHeight: hp(2.22),
        marginTop: hp(0.99),
        letterSpacing: 0.6
    },
    participentsImage: {
        height: hp(2.22),
        width: hp(2.22),
        borderRadius: hp(1.11),
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: wp(-1.6)
    }

})
