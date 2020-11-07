
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    SectionList,
    SafeAreaView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DiaryFilter from '../../components/Diary/DiaryFilter';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import BottomSheet from 'react-native-simple-bottom-sheet';

var filter = [
    { name: 'Activity', iconName: 'football-outline', isSelected: false },
    { name: 'Food', iconName: 'football-outline', isSelected: false },
    { name: 'Mood', iconName: 'football-outline', isSelected: false },
    { name: 'Note', iconName: 'football-outline', isSelected: false },
    { name: 'Attachment', iconName: 'football-outline', isSelected: false },
    { name: 'Medication', iconName: 'football-outline', isSelected: false },
    { name: 'Nap', iconName: 'football-outline', isSelected: false },
]

import { LoginStyle } from '../Login/LoginStyle';
import { DiaryStyles } from '../Diary/DiaryStyles';

const DATA = [
    {
        title: "Today",
        data: [{ name: "Pizza", isSelected: false },
        { name: "Burger", isSelected: false },
        { name: "Risotto", isSelected: false }]
    },
    {
        title: "Yesterday",
        data: [{ name: "French Fries", isSelected: false },
        { name: "Onion Rings", isSelected: false },
        { name: "Fried Shrimps", isSelected: false }]
    },
    {
        title: "Tomorrow",
        data: [{ name: "Water", isSelected: false },
        { name: "Coke", isSelected: false },
        { name: "Beer", isSelected: false }]
    },
    {
        title: "Desserts",
        data: [{ name: "Cheese Cake", isSelected: false },
        { name: "Ice Cream", isSelected: false }]
    }
];

export default class AbsentHistory extends Component {


    Item = (items, index0) => {
        console.log('items of ', items)
        return (
            <View>
                <Text style={DiaryStyles.header}>
                    {items.title}
                </Text>
                <View style={DiaryStyles.borderRadiousView} >

                    <FlatList
                        data={items.data}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ borderRadius: 12 }}>
                                    <View style={[styles.cellMainView, { backgroundColor: item.isSelected ? '#F1F3F6' : 'white', }]}>
                                        <View >
                                            <View style={styles.v1}>

                                                <View
                                                    style={[DiaryStyles.headTextView, { width: '100%' }]}>
                                                    <View>
                                                        <Text style={styles.nameText}>
                                                            {"item.name"}
                                                        </Text>
                                                        <Text style={styles.t1}>By: Joyful</Text>
                                                        <Text style={styles.t2}>19 Sep, 2020 | 10:14 AM</Text>
                                                    </View>

                                                    <TouchableOpacity style={{ justifyContent: 'center', }}>
                                                        <Feather
                                                            name="download"
                                                            size={20}
                                                            color={Colors.themeColor}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.lineView}></View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View >
            </View>
        )
    }




    render() {
        return (
            <View style={DiaryStyles.mainView}>
                {/* <DiaryFilter /> */}

                <SafeAreaView >
                    {/* Header view */}
                    <View style={LoginStyle.headerView}>
                        <TouchableOpacity>
                            <Icon name="angle-left" size={25} color={Colors.themeColor} />
                        </TouchableOpacity>
                        <Text style={LoginStyle.headingText}>Absent History</Text>
                    </View>

                    {/* section wise list view */}
                    <FlatList
                        style={styles.flatelist}
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                this.Item(item, index)
                            )
                        }}
                    />
                </SafeAreaView>
            </View>
        );
    }



}

const styles = StyleSheet.create({
    flatelist: { marginBottom: hp(1), height: hp(82) },
    cellMainView: { borderRadius: 12, margin: 8, paddingHorizontal: wp(3.2), paddingVertical: hp(1.48) },
    v1: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    nameText: { fontSize: hp(1.97), fontFamily: Fonts.Medium, color: Colors.blackColor },
    t1: { color: '#5B5B5B', fontSize: hp(1.48), paddingVertical: 4 },
    t2: { color: '#5B5B5B', fontSize: hp(1.23) },
    lineView: { borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', marginTop: hp(2.70) },
})

