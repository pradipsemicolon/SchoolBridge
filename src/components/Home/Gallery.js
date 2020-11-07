import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Gallery extends Component {
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
                            <Image source={require('../../../assets/images/1.png')} style={styles.mainView} />
                        )
                    })
                }

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: hp(25.86),
        width: wp(40.53),
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 5,
        alignItems: 'center',
        marginRight: wp(4.27)
    },
    scroll: { marginTop: hp(2.46), marginBottom: hp(2.46) },

})