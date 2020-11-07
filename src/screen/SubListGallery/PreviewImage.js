import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LoginStyle } from '../Login/LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../utils/Fonts';

export default class PreviewImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/a.png')} />
                <View style={styles.headerBlackView}>
                    <SafeAreaView />
                    <View style={{ flexDirection: 'row', margin: wp(5.33) }}>
                        <TouchableOpacity>
                            <FontAwesome name="angle-left" size={25} color={'white'} />
                        </TouchableOpacity>
                        <Text style={[LoginStyle.headingText, { color: 'white' }]}>11 Oct 2020</Text>
                    </View>
                </View>

                <View style={styles.footerBlackView}>
                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.footerText}>Like</Text>
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <Ionicons name="ios-download-outline" size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.footerText}>Download</Text>
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <Ionicons name="share-social-outline" size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.footerText}>Share</Text>
                    </View>


                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%'
    },
    headerBlackView: {
        height: hp(13.30),
        width: '100%',
        backgroundColor: 'rgba(41,41,41,0.3)',
        position: 'absolute'
    },
    footerBlackView: {
        height: hp(10.22),
        width: '100%',
        backgroundColor: 'rgba(41,41,41,0.3)',
        position: 'absolute',
        paddingHorizontal: wp(6.67),
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: hp(1.48),
        color: 'white',
        fontFamily: Fonts.Regular,
        letterSpacing: 0.6
    },
})
