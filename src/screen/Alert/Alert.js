
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

export default class Alert extends Component {

    onSelectActivity(ind1, ind2) {
        DATA[ind2].data[ind1].isSelected = !DATA[ind2].data[ind1].isSelected
        this.setState({})
    }
    onSelectCell(index) {
        filter[index].isSelected = !filter[index].isSelected
        this.setState({})
    }
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
                                    <View style={[styles.cellMainView,{ backgroundColor: item.isSelected ? '#F1F3F6' : 'white',}]}>
                                        <TouchableOpacity onPress={() => this.onSelectActivity(index, index0)}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image style={styles.userImage} />
                                                <View
                                                    style={[DiaryStyles.headTextView, { width: '84%', marginBottom: hp(2.70) }]}>
                                                    <View>
                                                        <Text style={styles.nameText}>
                                                            {"item.name"}
                                                        </Text>
                                                        <Text style={styles.subNameText}>Joyful</Text>
                                                    </View>

                                                    <View style={styles.dateView}>
                                                        <Text
                                                            style={{
                                                                color: '#5B5B5B',
                                                                marginRight: 10,
                                                                fontSize: 10
                                                            }}>
                                                            10:32 AM
                                                         </Text>
                                                        {
                                                            item.isSelected ?
                                                                <Icon
                                                                    name="chevron-down"
                                                                    size={15}
                                                                    color="#5B5B5B"
                                                                    style={{ justifyContent: 'flex-end' }}
                                                                />
                                                                :
                                                                <Icon
                                                                    name="chevron-right"
                                                                    size={15}
                                                                    color="#5B5B5B"
                                                                    style={{ justifyContent: 'flex-end' }}
                                                                />

                                                        }

                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)' }}></View>
                                        {
                                            item.isSelected ?
                                                <View style={{ marginHorizontal: wp(2.13), marginTop: hp(2.46) }}>
                                                    <View style={DiaryStyles.messageView}>
                                                        <Text style={DiaryStyles.messageText}>Message</Text>

                                                    </View>
                                                    <Text style={DiaryStyles.descText}>
                                                        Hello students, Hope you are doing well at home. this is English worksheet Please complete it by tommorow
                      </Text>



                                                </View> : null
                                        }

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

                {/* Header view */}
                <SafeAreaView >
                    <View style={LoginStyle.headerView}>
                        <TouchableOpacity>
                            <Icon name="angle-left" size={25} color={Colors.themeColor} />
                        </TouchableOpacity>
                        <Text style={LoginStyle.headingText}>Alert</Text>
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
    userImage: { width: hp(5.17), height: hp(5.17), borderRadius: hp(5.17 / 2), backgroundColor: Colors.backColor, marginRight: wp(2) },
    nameText: { fontSize: hp(1.97), fontWeight: 'bold' },
    subNameText: { color: 'grey', fontSize: 12,},
    dateView:{ flexDirection: 'row', alignSelf: 'center' },
})

