import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { LoginStyle } from '../Login/LoginStyle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

var datas = [
    {
        ios: "mail-outline",
        name: 'uwalek@af.edu'
    },
    {
        ios: "call-sharp",
        name: '+91 97319-79710'
    },
]



export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ paddingHorizontal: wp(5.33) }}>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Header view */}
                        <View style={[LoginStyle.headerView, { marginLeft: wp(0) }]}>
                            <TouchableOpacity>
                                <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                            </TouchableOpacity>
                            <Text style={LoginStyle.headingText}>Contact Us</Text>
                        </View>

                        <Text style={styles.headingText}> Contact Details </Text>
                        <View style={styles.section2}  >
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={datas}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ paddingHorizontal: wp(5.33) }}>
                                            <TouchableOpacity>
                                                <View style={styles.v1}>
                                                    <View style={styles.icon}>
                                                        <Icon name={item.ios} size={20} color='#3f288d'></Icon>
                                                    </View>
                                                    <View style={styles.v2}>
                                                        <View>
                                                            <Text style={styles.section2Text}>{item.name}</Text>
                                                        </View>
                                                    </View>

                                                </View>
                                            </TouchableOpacity>
                                            <View style={styles.lineView}></View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <Text style={styles.headingText}>Social Links</Text>
                        <View style={[styles.section2, { flexDirection: 'row', paddingHorizontal: wp(5.33), justifyContent: 'space-between', }]}>
                            <TouchableOpacity style={styles.socialButton}>
                                <Icon name="earth-outline" size={30} color='#3f288d'></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <Feather name="youtube" size={30} color='#3f288d' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <FontAwesome5 name="facebook" size={30} color='#3f288d' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <Feather name="instagram" size={30} color='#3f288d' />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headingText}>Address</Text>

                        <View style={[styles.section2, { paddingHorizontal: wp(3.2), paddingVertical: hp(1.60), }]}>
                            <View style={styles.mapView}>
                                {/* Map integration */}
                            </View>
                            <TouchableOpacity style={styles.directionButton}>
                                <Text style={styles.buttonText}>Get Direction</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.v1, { height: null, marginTop: hp(2.46) }]}>
                                    <View style={styles.icon}>
                                        <Entypo name="location" size={20} color='#3f288d'></Entypo>
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.section2Text}>{"1814 Tobu Terrace, USA"}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        letterSpacing: 0.6,
        color: Colors.blackColor,
        fontWeight: '700',
        marginLeft: wp(4.27),
        marginTop: hp(4.93)
    },
    contactView: {
        borderRadius: 20
    },
    section2: {
        backgroundColor: 'white',
        marginTop: hp(2.68),
        borderRadius: 20,
        elevation: 5,
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.2
    },
    icon: {
        backgroundColor: '#F1F3F6',
        height: hp(5.17),
        width: hp(5.17),
        borderRadius: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    v1: {
        flexDirection: 'row',
        height: hp(11),
        alignItems: 'center',
    },
    v2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section2Text: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        color: Colors.blackColor,
        letterSpacing: 0.48,
        fontWeight: '400'
    },
    lineView: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: '100%',
        alignSelf: 'center'
    },
    socialButton: {
        paddingVertical: hp(2.46),
        paddingHorizontal: wp(5.33)
    },
    mapView: {
        width: wp(82.93),
        height: hp(25),
        backgroundColor: Colors.lineColor,
        borderRadius: 20
    },
    directionButton: {
        width: wp(82.93),
        height: hp(6),
        backgroundColor: Colors.themeColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(2.46)
    },
    buttonText: {
        color: 'white',
        fontFamily: Fonts.Medium,
        fontSize: hp(1.72),
        // letterSpacing: 0.48,
        fontWeight: '400'
    },
    pinView: {

    }

})
