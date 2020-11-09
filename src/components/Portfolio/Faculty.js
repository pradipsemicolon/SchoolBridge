import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';


export default class Faculty extends Component {
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
                                <Image style={styles.userImage} />
                                <Text style={styles.headingText}>Jeffery Moreno</Text>
                                <Text style={styles.SubHeadingText}>President</Text>
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
        height: hp(18.60),
        width: wp(35.2),
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
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:wp(5.33)
    },
    userImage: {
        height: hp(7.39),
        width: hp(7.39),
        borderRadius: hp(7.39 / 2),
        backgroundColor: Colors.lineColor
    },
    headingText: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        letterSpacing: 0.6,
        color: 'black',
        marginTop: hp(2.46)
    },
    SubHeadingText: {
        fontSize: hp(1.23),
        fontFamily: Fonts.Regular,
        fontWeight: '500',
        letterSpacing: 0.3,
        color: '#5B5B5B',

    },
    scroll: {
        marginTop: hp(2.46),
        // marginBottom: hp(2.46)
    },


})
