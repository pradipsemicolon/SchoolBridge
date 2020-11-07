
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { LoginStyle } from '../Login/LoginStyle';
import { Fonts } from '../../utils/Fonts';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { DiaryStyles } from '../Diary/DiaryStyles';



var datas = [
  { ios: "ios-mail-outline", name: 'Change Email', isSelected: false },
  { ios: "ios-call-outline", name: 'Change Phone Number', isSelected: false },
];
var data1 = [
  { ios: "comments", name: 'Mother' },
  { ios: "comments", name: 'Father' }];
var data2 = [
  { ios: "comments", name: 'Share' },
  { ios: "headset", name: 'Support' }];
var data3 = [
  { ios: "log-out-outline", name: 'Logout' },
];

var account = [
  { name: 'Shawn Bridges', name2: "lonuced@munak.org", iconName: 'football-outline', isSelected: false },
  { name: 'Eugene Guzman', name2: "zasdod@feti.io", iconName: 'football-outline', isSelected: false },
  { name: 'Shubham', name2: "dovsup@duc.co.uk", iconName: 'football-outline', isSelected: false },
]
export default class Profile extends Component {
  onSelectActivity(index) {
    datas[index].isSelected = !datas[index].isSelected
    this.setState({})
  }
  onSelectCell(index) {
    account[index].isSelected = !account[index].isSelected
    this.setState({})
  }
  bottomSheet() {
    return (
      <BottomSheet sliderMinHeight={0} sliderMaxHeight={hp(90)} isOpen={false} ref={ref => this.panelRef = ref}>
        <View>
          <View style={DiaryStyles.filterViewStyle}>
            <Text style={DiaryStyles.filterTitle}>Switch Profiles</Text>
            <TouchableOpacity onPress={() => this.panelRef.togglePanel()} >
              <Icon name="close-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            {
              account.map((item, index) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => this.onSelectCell(index)}
                      style={styles.accountButton}>
                      <View style={styles.v10}>
                        <Image style={styles.userImage} />
                        <View>
                          <Text style={[styles.accountButtonText, { color: Colors.blackColor, }]}>{item.name}</Text>
                          <Text style={[styles.accountButtonText2, { color: '#5B5B5B', }]}>{item.name2}</Text>
                        </View>
                      </View>
                      {
                        item.isSelected ?
                          <Icon name="radio-button-on" size={18} color={Colors.themeColor} /> :
                          <Icon name="radio-button-off" size={18} color={'#5B5B5B'} />
                      }
                    </TouchableOpacity>
                    <View style={styles.lineView} />
                  </View>
                )
              })
            }

          </View>

        </View>

      </BottomSheet>
    )
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <ScrollView>
            <View style={[LoginStyle.headerView, styles.headerView]}>
              <TouchableOpacity>
                <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
              </TouchableOpacity>
              <Text style={LoginStyle.headingText}>My Profile</Text>
            </View>

            <View>

            </View>
            <View style={styles.section2}  >
              <View style={styles.profileImageView}>
                <Image style={styles.profileImage} />
                <TouchableOpacity>
                  <View style={styles.cameraButton}>
                    <Icon name="ios-camera-outline" size={20} color="white" style={{ alignSelf: 'center' }} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.userNameView}>
                <Text style={styles.userNameText}>Shubham</Text>
                <View style={styles.v1}>
                  <View style={styles.v2}>
                    <Text style={styles.studentText}>Student</Text>
                  </View>
                </View>

              </View>
              <View style={styles.v3}></View>
              <View style={{ marginVertical: hp(2) }}>
                <View style={styles.v4}>
                  <Text style={styles.classText}>Class :</Text>
                  <Text style={styles.classText2}> Nursery</Text>
                </View>
                <View style={styles.v4}>
                  <Text style={styles.classText}>Section :</Text>
                  <Text style={styles.classText2}> A</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.addNewaccountText}>Add New Account</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btn2} onPress={() => this.panelRef.togglePanel()}>
                  <Text style={styles.switchAccountText}>Switch Account</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.section1}>
              <Text style={styles.headText2}>Settings </Text>
            </View>
            <View style={[styles.section2, { paddingVertical: hp(2) }]} shadowOffset={{ height: 2, width: 0 }} shadowColor='rgba(0,0,0,0.08)' shadowOpacity={0.2} >
              <FlatList
                data={datas}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ backgroundColor: item.isSelected ? '#F1F3F6' : 'white', marginHorizontal: wp(2), borderRadius: 12 }}>
                      <TouchableOpacity onPress={() => this.onSelectActivity(index)}>
                        <View style={styles.v5}>
                          <View style={[styles.icon, { backgroundColor: item.isSelected ? 'white' : '#F1F3F6', }]}>
                            <Icon name={item.ios} size={25} color='#3f288d'></Icon>
                          </View>
                          <View style={styles.v6}>
                            <View>
                              <Text style={styles.section2Text}>{item.name}</Text>
                            </View>
                            {/* <View style={styles.v9}>
                              <Text style={{ color: 'white' }}>{item.note}</Text>
                            </View> */}
                          </View>
                          <View>
                            {
                              item.isSelected ?
                                <FontAwesome
                                  name="angle-down"
                                  size={16}
                                  color="#5B5B5B"
                                  style={{ marginTop: hp(1), justifyContent: 'flex-end' }}
                                /> :
                                <FontAwesome
                                  name="angle-right"
                                  size={16}
                                  color="#5B5B5B"
                                  style={{ marginTop: hp(1), justifyContent: 'flex-end' }}
                                />

                            }

                          </View>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.v7}></View>
                      {item.isSelected ? <View>
                        <View style={{ paddingVertical: hp(2.46) }}>
                          <View style={styles.v8}>
                            <Text style={[styles.accountButtonText, { color: Colors.blackColor, }]}>{item.name}</Text>
                            <TouchableOpacity style={{ padding: 5 }} >
                              <Icon name="radio-button-on" size={18} color={Colors.themeColor} />
                            </TouchableOpacity>
                          </View>
                          <TextInput
                            placeholder='tivabna@mircaka.net'
                            style={styles.textInputStyle}
                          />
                          <TouchableOpacity style={[styles.btn2, { marginTop: hp(4.93) }]} >
                            <Text style={styles.switchAccountText}>Continue</Text>
                          </TouchableOpacity>
                        </View>
                      </View> : null}
                    </View>
                  )
                }}
              />
            </View>
            <View style={styles.section1}>
              <Text style={styles.headText2}>Facebook Account</Text>
            </View>
            <View style={styles.section2} shadowOffset={{ height: 2, width: 0 }} shadowColor='black' shadowOpacity={0.2} >
              <FlatList
                data={data1}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity>
                        <View style={styles.v5}>
                          <View style={styles.icon}>
                            <Icon name={item.ios} size={20} color='#3f288d'></Icon>
                          </View>
                          <View style={styles.v6}>
                            <View>
                              <Text style={styles.section2Text}>{item.name}</Text>
                            </View>
                            <View style={styles.v9}>
                              <Text style={{ color: 'white' }}>{item.note}</Text>
                            </View>
                          </View>
                          <View>
                            <FontAwesome
                              name="angle-right"
                              size={16}
                              color="#5B5B5B"
                              style={{ marginTop: hp(1), justifyContent: 'flex-end' }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.v3}></View>
                    </View>
                  )
                }}
              />
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddLink')} style={styles.btn2}>
                  <Text style={styles.switchAccountText}>Add New Link</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section1}>
              <Text style={styles.headText2}>Help </Text>
            </View>
            <View style={styles.section2} shadowOffset={{ height: 2, width: 0 }} shadowColor='black' shadowOpacity={0.2} >
              <FlatList
                data={data2}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity>
                        <View style={styles.v5}>
                          <View style={styles.icon}>
                            <Icon name={item.ios} size={20} color='#3f288d'></Icon>
                          </View>
                          <View style={styles.v6}>
                            <View>
                              <Text style={styles.section2Text}>{item.name}</Text>
                            </View>
                            {/* <View style={styles.v9}>
                              <Text style={{ color: 'white' }}>{item.note}</Text>
                            </View> */}
                          </View>
                          <View>
                            <FontAwesome
                              name="angle-right"
                              size={16}
                              color="#5B5B5B"
                              style={{ marginTop: hp(1), justifyContent: 'flex-end' }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.v3}></View>
                    </View>
                  )
                }}
              />

            </View>
            <View style={styles.section5} shadowOffset={{ height: 2, width: 0 }} shadowColor='black' shadowOpacity={0.2} >
              <FlatList
                data={data3}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity>
                        <View style={styles.v5}>
                          <View style={styles.icon}>
                            <Icon name={item.ios} size={20} color='#3f288d'></Icon>
                          </View>
                          <View style={styles.v6}>
                            <View>
                              <Text style={styles.section2Text}>{item.name}</Text>
                            </View>
                            {/* <View style={styles.v9}>
                              <Text style={{ color: 'white' }}>{item.note}</Text>
                            </View> */}
                          </View>
                          <View>
                            <FontAwesome
                              name="angle-right"
                              size={16}
                              color="#5B5B5B"
                              style={{ marginTop: hp(1), justifyContent: 'flex-end' }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.v3}></View>
                    </View>
                  )
                }}
              />
            </View>
            <View style={{ marginBottom: hp(5) }}></View>

          </ScrollView>
        </SafeAreaView>
        {this.bottomSheet()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerView: { marginTop: hp(2.67), marginLeft: wp(5.33) },
  profileImageView: { alignSelf: 'center', marginVertical: hp(3) },
  profileImage: { height: hp(14.78), width: hp(14.78), borderRadius: hp(14.78 / 2), backgroundColor: '#F1F3F6' },
  cameraButton: { backgroundColor: "#3f288d", height: hp(4.93), width: hp(4.93), borderRadius: hp(4.93 / 2), justifyContent: 'center', position: 'absolute', bottom: 0, right: 0 },
  userNameView: { justifyContent: 'center', alignSelf: 'center', },
  userNameText: { fontSize: hp(3.94), fontFamily: Fonts.Bold, letterSpacing: 0.3, color: Colors.blackColor },
  v1: { flexDirection: 'row', justifyContent: 'center', marginBottom: hp(2), marginTop: hp(1), },
  v2: { backgroundColor: 'rgba(63, 40, 141, 0.1)', borderRadius: 10, },
  studentText: { fontSize: hp(1.48), color: '#3f288d', padding: hp(0.33), borderWidth: 1, borderColor: '#3f288d', borderRadius: 10, alignSelf: 'center', paddingHorizontal: wp(2.42), fontFamily: Fonts.Regular, letterSpacing: 0.6 },
  v3: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: wp(71.26), alignSelf: 'center' },
  v4: { flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' },
  classText: { fontSize: hp(1.97), fontFamily: Fonts.Medium, color: '#5B5B5B' },
  classText2: { fontSize: hp(1.97), fontFamily: Fonts.Medium, color: '#3f288d' },
  addNewaccountText: { color: 'white', fontFamily: Fonts.Medium, fontSize: hp(1.72), letterSpacing: 0.35 },
  switchAccountText: { color: '#3f288d', fontFamily: Fonts.Medium, fontSize: hp(1.72), letterSpacing: 0.35 },
  v5: { flexDirection: 'row', height: hp(11), alignItems: 'center', marginLeft: wp(6) },
  v6: { flexDirection: 'row', justifyContent: 'space-between', width: '72%' },
  v7: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: wp(78.26), alignSelf: 'center' },
  v8: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(2.46) },
  v9: { backgroundColor: "#3F288D", height: hp(4), borderRadius: 20, alignSelf: 'center', justifyContent: 'center' },
  v10: { flexDirection: 'row', alignItems: 'center' },
  userImage: { width: hp(5.17), height: hp(5.17), borderRadius: hp(5.17 / 2), backgroundColor: Colors.backColor },
  lineView: { borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, marginTop: hp(1.46) },
  heading: {
    marginTop: hp(6.03),
    marginRight: wp(27.77),
    marginLeft: wp(4.83),
    flexDirection: 'row'
  },
  headText: {
    fontSize: hp(2.96),
    color: '#3f288d',
    fontFamily: Fonts.Bold
  },
  headText2: {
    fontSize: hp(2.46),
    color: Colors.blackColor,
    fontFamily: Fonts.Bold,
    letterSpacing: 0.6,
  },
  section1: {
    marginLeft: wp(10.83),
    marginTop: hp(4.93),
    marginRight: wp(4.83),
    flexDirection: "row"
  },

  section2: {
    backgroundColor: 'white',
    marginLeft: wp(4.83),
    marginTop: hp(2.68),
    marginRight: wp(4.83),
    // height:hp(25.06),
    borderRadius: 20,
    elevation: 5,
    shadowOffset: { height: 2, width: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2


  },

  section5: {
    backgroundColor: 'white',
    marginLeft: wp(4.83),
    marginTop: hp(2.68),
    marginRight: wp(4.83),
    height: hp(11.06),
    borderRadius: 20,
    elevation: 5,


  },
  icon: {
    backgroundColor: '#F1F3F6',
    height: 50,
    width: 50,
    borderRadius: 12,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  section2Text: {

    fontSize: 16,
    color: '#292929',
    // fontWeight:'bold'
  },
  btn: {
    backgroundColor: '#3f288d',
    marginRight: wp(0.83),
    height: hp(6.89),
    borderRadius: 10,
    elevation: 5,
    width: wp(80.92),
    alignItems: 'center',
    marginBottom: hp(2),
    fontSize: 14,
    justifyContent: "center",
    alignSelf: 'center'
  },
  btn2: {
    borderColor: '#3f288d',
    borderWidth: 1,
    marginRight: wp(0.83),
    height: hp(6.89),
    borderRadius: 12,
    // elevation:5,
    width: wp(80.92),
    alignItems: 'center',
    marginBottom: hp(2),
    fontSize: 14,
    justifyContent: "center",
    alignSelf: 'center'
  },
  accountButton: {
    width: wp(89.33),
    height: 56,
    alignSelf: 'center',
    marginTop: hp(2.46),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: wp(5.33)
  },
  accountButtonText: {
    fontFamily: Fonts.Medium,
    fontSize: hp(1.97),
    marginLeft: 10,
    letterSpacing: 0.48,
  },
  accountButtonText2: {
    fontFamily: Fonts.Regular,
    fontSize: hp(1.48),
    marginLeft: 10,
    letterSpacing: 0.6,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: wp(2.46),
    borderBottomColor: Colors.lineColor,
    paddingLeft: 5,
    fontSize: hp(1.97),
    paddingLeft: 8,
    height: hp(6),
    width: wp(78.26),
    alignSelf: 'center'
  },

})