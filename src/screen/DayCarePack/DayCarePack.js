import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { LoginStyle } from '../Login/LoginStyle'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../utils/Fonts';

var dataSource = [
    { plan: "Basic", amount: "INR 4,000", isSelected: true },
    { plan: "Premium", amount: "INR 4,000", isSelected: false },
    { plan: "Premium", amount: "INR 4,000", isSelected: false },
    { plan: "Premium", amount: "INR 4,000", isSelected: false }]

export default class DayCarePack extends Component {
    onSelectCell(index) {
        dataSource.forEach(element => {
            element.isSelected = false
        });
        dataSource[index].isSelected = true
        this.setState({})
    }
    render() {
        return (
            <View >
                <SafeAreaView>
                    <View style={styles.mainView1}>

                        <View style={[LoginStyle.headerView, { marginTop: hp(2.67), }]}>
                            <TouchableOpacity>
                                <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                            </TouchableOpacity>
                            <Text style={LoginStyle.headingText}>Our Packs</Text>
                        </View>


                        <FlatList
                            style={{ marginTop: hp(2.46) }}
                            data={dataSource}
                            numColumns={2}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={[styles.mainView, { backgroundColor: item.isSelected ? Colors.themeColor : 'white', }]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Text style={[styles.headingText, { color: item.isSelected ? "white" : Colors.blackColor }]}>{item.plan}</Text>
                                            <TouchableOpacity onPress={() => this.onSelectCell(index)}>
                                                {
                                                    item.isSelected ?
                                                        <Ionicons name="radio-button-on" size={18} color={'white'} /> :
                                                        <Ionicons name="radio-button-off" size={18} color={Colors.themeColor} />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={[styles.subText, { color: item.isSelected ? "white" : Colors.themeColor }]}>{item.amount}
                                            <Text style={[styles.subText2, { color: item.isSelected ? "white" : Colors.themeColor }]}>/Mth</Text>
                                        </Text>
                                        <Text style={[styles.subText3, { color: item.isSelected ? "white" : "#5B5B5B", }]}>Hours Per day</Text>
                                        <Text style={[styles.subText4, { color: item.isSelected ? "white" : Colors.blackColor, }]}>03 hours</Text>
                                        <View style={styles.lineView} />
                                        <Text style={[styles.subText3, { color: item.isSelected ? "white" : "#5B5B5B", marginTop: 0 }]}>Extra Hour Charge</Text>
                                        <Text style={[styles.subText4, { color: item.isSelected ? "white" : Colors.blackColor, }]}>Rs 500</Text>
                                        <TouchableOpacity style={[styles.playButtonStyle, { backgroundColor: "#F1F3F6", }]}>
                                            <Text style={[styles.playText, { color: item.isSelected ? Colors.themeColor : '#A7A7A7' }]}>{item.isSelected ? "Selected" : "Select"}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />

                    </View>

                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView1: {
        marginHorizontal: wp(5.33),
        height: '100%'
    },
    mainView: {
        // height: hp(29.56),
        width: wp(41.87),
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 5,
        paddingHorizontal: wp(5),
        paddingVertical: hp(2.46),
        marginRight: wp(4.27),
        marginVertical: hp(1.23)

    },
    headingText: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Regular,
    },
    percentageText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
    },
    subText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        letterSpacing: 0.6
    },
    subText2: {
        color: Colors.themeColor,
        fontSize: hp(1.23),
        fontFamily: Fonts.Regular,
        letterSpacing: 0.3
    },
    subText3: {
        fontSize: hp(1.23),
        fontFamily: Fonts.Regular,
        letterSpacing: 0.3,
        marginTop: hp(2.46)
    },
    subText4: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Bold,
        letterSpacing: 0.6,
        marginTop: 4
    },
    lineView: {
        borderBottomColor: '#A7A7A7',
        borderBottomWidth: 1,
        marginVertical: hp(2.45)
    },
    playButtonStyle: {
        width: wp(31.2),
        height: hp(4.93),
        borderRadius: 12,
        marginTop: hp(2.46),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playText: {
        fontSize: hp(1.72),
        fontFamily: Fonts.Medium,
        marginLeft: wp(1),
    },

})
