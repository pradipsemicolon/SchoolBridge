import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Colors } from '../../utils/Colors'
import { LoginStyle } from '../Login/LoginStyle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../utils/Fonts';

export default class AdmissionEnquiry extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <SafeAreaView >
                    <View style={[LoginStyle.headerView, { marginTop: hp(2.46) }]}>
                        <TouchableOpacity>
                            <Icon name="angle-left" size={25} color={Colors.themeColor} />
                        </TouchableOpacity>

                        <Text style={LoginStyle.headingText}>Meal Calender</Text>
                    </View>

                    <View style={styles.cornerView} >
                        <ScrollView>
                            <View style={styles.underView}>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Select Class* </Text>
                                    <TouchableOpacity>
                                        <View style={styles.classView}>
                                            <Text style={styles.titleHeadText}>Playground</Text>
                                            <Icon name="chevron-down" size={15} color={Colors.blackColor} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Select Enquiry Type* </Text>
                                    <TouchableOpacity>
                                        <View style={styles.classView}>
                                            <Text style={styles.titleHeadText}>Facebook</Text>
                                            <Icon name="chevron-down" size={15} color={Colors.blackColor} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Child's Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Child's Name"
                                        placeholderTextColor={Colors.blackColor}
                                    />
                                </View>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Father's Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Father's Name"
                                        placeholderTextColor={Colors.blackColor}
                                    />
                                </View>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Mobile Number</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Child's Name"
                                        placeholderTextColor={Colors.blackColor}
                                    />
                                </View>

                                <View style={{ marginBottom: hp(4.93) }}>
                                    <Text style={styles.headText}>Date of Birth</Text>
                                    <TouchableOpacity>
                                        <View style={styles.classView}>
                                            <Text style={styles.titleHeadText}>DD/MM/YY</Text>
                                            <Icon name="chevron-down" size={15} color={Colors.blackColor} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
    },
    cornerView: {
        height: hp(80.79),
        width: wp(89.33),
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 4,
        alignSelf: 'center',
        marginTop: hp(4.93)
    },
    underView: {
        paddingHorizontal: wp(5.33),
        paddingTop: hp(2.46)
    },
    headText: {
        fontFamily: Fonts.Regular,
        fontWeight: '400',
        fontSize: hp(1.48),
        color: '#5B5B5B',
        letterSpacing: 0.6,

    },
    classView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(6),
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1

    },
    titleHeadText: {
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        fontSize: hp(1.97),
        color: Colors.blackColor,
        letterSpacing: 0.48,
        marginLeft: 8
    },
    input: {
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        fontSize: hp(1.97),
        color: Colors.blackColor,
        letterSpacing: 0.48,
        marginLeft: 8,
        alignItems: 'center',
        height: hp(6),
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    }
})
