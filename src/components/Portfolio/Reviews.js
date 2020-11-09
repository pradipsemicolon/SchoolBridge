import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

const review = `"Changed his perspective towards technology. He is more of a creator than a consumer of technology now"`
export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    [1, 2, 3].map((item) => {
                        return (
                            <View style={styles.mainView}>
                                {/* <Image style={styles.userImage} /> */}
                                <Text style={styles.headingText}>“</Text>
                                <Text style={styles.SubHeadingText}>{review}</Text>
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
        height: hp(31.89),
        width: wp(62.13),
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
        // marginTop: hp(2.46),
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.46),
        marginRight: wp(5.33)
    },
    userImage: {
        height: hp(7.39),
        width: hp(7.39),
        borderRadius: hp(7.39 / 2),
        backgroundColor: Colors.lineColor
    },
    headingText: {
        fontSize: hp(7.64),
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        letterSpacing: 0.6,
        color: 'black',
        // marginTop: hp(2.46)
    },
    SubHeadingText: {
        fontSize: hp(1.97),
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        letterSpacing: 0.6,
        lineHeight:hp(3.45),
        color: '#6D7278',
        marginTop:hp(-2.46)

    },
    scroll: {
        marginTop: hp(2.46),
        // marginBottom: hp(2.46)
    },


})

