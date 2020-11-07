
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
import { DiaryStyles } from './DiaryStyles';

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

export default class Diary extends Component {

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
                  <View style={
                    { borderRadius: 12, margin: 8, backgroundColor: item.isSelected ? '#F1F3F6' : 'white', paddingHorizontal: wp(3.2), paddingVertical: hp(1.48) }}>
                    <TouchableOpacity onPress={() => this.onSelectActivity(index, index0)}>
                      <View style={{ flexDirection: 'row' }}>
                        <View
                          style={DiaryStyles.clipView}>
                          <Icon
                            name="paperclip"
                            size={20}
                            color="#3f288d"
                            style={{ transform: [{ rotate: '90deg' }] }}
                          />
                        </View>
                        <View
                          style={DiaryStyles.headTextView}>
                          <View>
                            <Text style={DiaryStyles.nameText}>
                              {"item.name"}
                            </Text>
                            <Text style={DiaryStyles.adminText}>Joyful</Text>
                          </View>

                          <View style={DiaryStyles.timeView}>
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

                    <View style={DiaryStyles.lineView}></View>
                    {
                      item.isSelected ?
                        <View style={{ marginHorizontal: wp(2.13), marginTop: hp(2.46) }}>
                          <View style={DiaryStyles.messageView}>
                            <Text style={DiaryStyles.messageText}>Message</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                              <Ionicons
                                name="alarm-outline"
                                size={20}
                                color="#000000"
                                style={{ justifyContent: 'flex-end' }}
                              />
                              <Text style={DiaryStyles.timeText}>09:30AM</Text>

                            </View>
                          </View>
                          <Text style={DiaryStyles.descText}>
                            Hello students, Hope you are doing well at home. this is English worksheet Please complete it by tommorow
                      </Text>

                          <Text style={DiaryStyles.messageText}>Attachments</Text>
                          <View style={DiaryStyles.docView}>
                            <Ionicons
                              name="ios-document-outline"
                              size={20}
                              color={Colors.themeColor}
                              style={{ justifyContent: 'flex-end' }}
                            />
                            <Text style={DiaryStyles.docNameText}>Datesheet.doc</Text>

                          </View>

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

  bottomSheet() {
    return (
      <BottomSheet sliderMinHeight={0} sliderMaxHeight={hp(90)} isOpen={false} ref={ref => this.panelRef = ref}>
        <View>
          <View style={DiaryStyles.filterViewStyle}>
            <Text style={DiaryStyles.filterTitle}>Filter By :</Text>
            <TouchableOpacity onPress={() => this.panelRef.togglePanel()} >
              <Ionicons name="close-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            {
              filter.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.onSelectCell(index)}
                    style={[DiaryStyles.filterButton, { borderColor: item.isSelected ? Colors.themeColor : '#979797', }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons name={item.iconName} size={22} color={item.isSelected ? Colors.themeColor : '#5B5B5B'} />
                      <Text style={[DiaryStyles.filterButtonText, { color: item.isSelected ? Colors.themeColor : '#5B5B5B', }]}>{item.name}</Text>
                    </View>
                    {
                      item.isSelected ?
                        <Ionicons name="radio-button-on" size={18} color={Colors.themeColor} /> :
                        <Ionicons name="radio-button-off" size={18} color={'#5B5B5B'} />
                    }
                  </TouchableOpacity>
                )
              })
            }

          </View>
          <TouchableOpacity onPress={() => this.panelRef.togglePanel()}
            style={[LoginStyle.loginButton, { width: wp(89.33) }]}>
            <Text style={LoginStyle.loginButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>

      </BottomSheet>
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
            <Text style={LoginStyle.headingText}>Student Diary</Text>
          </View>

          {/* Dialy Activity view  */}
          <View
            style={DiaryStyles.diaryActivityView}>
            <Text style={DiaryStyles.diaryActvityText}>
              Daily Activity
            </Text>
            <TouchableOpacity onPress={() => this.panelRef.togglePanel()}>
              <View
                style={DiaryStyles.filterView}>
                <Text
                  style={DiaryStyles.filterText}>
                  Filter
                </Text>
                <View
                  style={DiaryStyles.iconView}>
                  <Icon
                    name="tasks"
                    size={16}
                    color="white"
                    style={{ marginTop: 8, alignSelf: 'center' }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Attachment */}
          <View
            style={DiaryStyles.attachmentView}>
            <Icon
              name="paperclip"
              size={15}
              color="#3f288d"
              style={{
                marginHorizontal: wp(1.3),
                alignSelf: 'center',
                transform: [{ rotate: '90deg' }],
              }}
            />
            <Text style={DiaryStyles.AttachmentText}>
              Attachment
            </Text>
            <TouchableOpacity>
              <Ionicons name="close-outline" size={25} color={Colors.themeColor} />

              {/* <Icon
                name="times"
                size={20}
                color="#3f288d"
                style={{ marginHorizontal: wp(1.3), alignSelf: 'center' }}
              /> */}
            </TouchableOpacity>
          </View>

          {/* section wise list view */}
          <FlatList
            style={{ marginBottom: hp(1), height: hp(62) }}
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                this.Item(item, index)
              )
            }}
          />
        </SafeAreaView>
        {this.bottomSheet()}
      </View>
    );
  }



}

