import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';


export default class RegisterNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.headingText}>Explore the world of science</Text>

                <Text style={styles.subText2}>
                    Join science classes and become an expert in everyday science.
                </Text>

                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerText}>Register Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: hp(21.67),
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
        marginTop: hp(4.19),
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.46),
    },
    headingText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        width: wp(48.53),
        // fontWeight: 'bold'
    },
    subText2: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Medium,
        width: wp(38.13),
        // fontWeight: '400',
        color: '#5B5B5B',
        lineHeight: hp(1.97),
    },
    registerButton: {
        backgroundColor: Colors.themeColor,
        width: wp(28.8),
        height: hp(4.06),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:hp(1.97)

    },
    registerText: {
        color:'white',
        fontFamily:Fonts.Medium,
        fontSize:hp(1.72),
    }

})
