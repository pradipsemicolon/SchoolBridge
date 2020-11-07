import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,

} from 'react-native';
import { color } from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { LoginStyle } from '../Login/LoginStyle';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


    var datas = [
      {
        ios: "comments",
        name: 'My attendance'
      },
      {
        ios: "comments",
        name: 'Daycare'
      },
      {
        ios: "comments",
        name: 'Meal Calender'
      },
      {
        ios: "comments",
        name: 'Feedback',
        note: '  03  ',
      },
      {
        ios: "comments",
        name: 'Teacher Comments',
        note: '  06  ',
      },
      {
        ios: "comments",
        name: 'Test Reports'
      },
      {
        ios: "comments",
        name: 'My Gallery'
      },
      {
        ios: "comments",
        name: 'Fees'
      },
      {
        ios: "comments",
        name: 'Holidays Calender'
      },
      {
        ios: "comments",
        name: 'Events'
      },
      {
        ios: "comments",
        name: 'Virtual Class'
      },
      {
        ios: "comments",
        name: 'Bus Tracking'
      },
      {
        ios: "comments",
        name: 'E- Learning'
      }
    ];


    return (
      <View style={styles.mainView}>
        <SafeAreaView>
          <View style={LoginStyle.headerView}>
            <TouchableOpacity>
              <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
            </TouchableOpacity>
            <Text style={LoginStyle.headingText}>Teacher Calendar</Text>
          </View>


          {/* 
        <View style={styles.heading}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={25} color="#3f288d" style={{ marginRight: wp(3.21), marginTop: hp(0.71) }} />
          </TouchableOpacity>
          <Text style={styles.headText}>Teacher Comments</Text>

        </View> */}
          <View style={styles.section1}>
            <View style={styles.section11}>
              <TextInput
                placeholder="Search"
                placeholderTextColor='#A7A7A7'
                style={styles.input}
              />
              <TouchableOpacity style={styles.searchButton}>
                <Icon name="search" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.section2} shadowOffset={{ height: 0, width: 2 }} shadowColor='black' shadowOpacity={0.2} >
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
                        {
                          item.note ?
                            <View style={styles.roundView}>
                              <Text style={styles.noteText}>{item.note}</Text>
                            </View> : null
                        }

                      </View>
                    </TouchableOpacity>
                    <View style={styles.lineView}></View>
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
  mainView: { flex: 1, paddingHorizontal: wp(5.33) },
  section11: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { width: '90%', height: '100%', paddingLeft: wp(5.33), fontSize: hp(1.72), fontFamily: Fonts.Medium },
  searchButton: { backgroundColor: '#3F288D', height: 47, width: 45, borderRadius: 27.5, alignItems: 'center', justifyContent: 'center', },
  v1: { flexDirection: 'row', height: hp(11), alignItems: 'center', },
  v2: { flexDirection: 'row', justifyContent: 'space-between', },
  noteText: { color: 'white', fontFamily: Fonts.Regular, fontSize: hp(1.48) },
  lineView: { borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.1)', width: '100%', alignSelf: 'center' },
  roundView: {
    position: 'absolute',
    right: 0,
    backgroundColor: "#3F288D",
    height: hp(3.94),
    width: hp(3.94),
    borderRadius: hp(3.94 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: 'rgba(63, 40, 141, 0.3)',
    shadowOpacity: 0.2,
    shadowOffset: { height: 10, width: 10, }
  },
  heading: {
    marginTop: hp(6.03),
    marginRight: wp(27.77),
    marginLeft: wp(4.83),
    flexDirection: 'row'

  },
  headText: {
    fontSize: 24,
    color: '#3f288d',
    fontWeight: 'bold'
  },
  section1: {
    marginTop: hp(3.57),
    backgroundColor: 'white',
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    // width:wp(80.92),
    height: hp(6.77)

  },
  section1text: {
    marginTop: hp(1.70),
    marginBottom: hp(2.12),
    marginLeft: wp(4.83),
    fontSize: 14,
    color: '#A7A7A7',

  },
  section2: {
    backgroundColor: 'white',
    marginTop: hp(2.68),
    height: hp(65.06),
    // alignItems:'center',
    // justifyContent: 'center',
    // alignContent:'center',
    // width:wp(80.92)
    borderRadius: 20,
    elevation: 5,


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
  section2Text: {
    fontFamily: Fonts.Regular,
    fontSize: hp(1.97),
    color: Colors.blackColor,
    letterSpacing: 0.48,
    // fontWeight:'bold'
  }

})