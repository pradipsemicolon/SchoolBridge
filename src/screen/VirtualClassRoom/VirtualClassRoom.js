import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import { Colors } from '../../utils/Colors';
import { LoginStyle } from '../Login/LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';
import { DiaryStyles } from '../Diary/DiaryStyles';

export default class VirtualClassRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderUpcoming() {
    return (
      <View style={[DiaryStyles.borderRadiousView, { marginVertical: hp(2.46) }]} >

        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({ item, index }) => {
            return (
              <View style={{ borderRadius: 12 }}>
                <View style={{ borderRadius: 12, backgroundColor: item.isSelected ? '#F1F3F6' : 'white', paddingHorizontal: wp(5.33), paddingVertical: hp(1.48) }}>
                  <TouchableOpacity onPress={() => this.onSelectActivity(index, index0)}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image style={styles.userImage} />

                    
                      <View
                        style={DiaryStyles.headTextView}>
                        <View>
                          <Text style={styles.nameText}>
                            {"item.name"}
                          </Text>
                          <Text style={styles.subNameText}>Joyful</Text>
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
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View style={[DiaryStyles.lineView, { marginTop: hp(2) }]}></View>


                </View>
              </View>
            )
          }}
        />
      </View>
    )
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
              <Text style={LoginStyle.headingText}>E-Learning</Text>
            </View>



            <Text style={styles.headingText}>Upcoming</Text>
            {this.renderUpcoming()}

            <Text style={[styles.headingText, { marginTop: hp(2.46) }]}>Archieved</Text>
            {this.renderUpcoming()}

          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(5.79)
  },
  selectTabText: {
    color: Colors.themeColor,
    fontSize: hp(2.96),
    fontFamily: Fonts.Medium,
    textAlign: 'center'
  },
  tabText: {
    color: Colors.blackColor,
    fontSize: hp(1.97),
    fontFamily: Fonts.Bold,
    letterSpacing: 0.48,
    textAlign: "center"
  },
  nameText: {
    fontSize: hp(1.97),
    fontFamily: Fonts.Medium,
    color: Colors.blackColor,
    letterSpacing: 0.48
  },
  headingText: {
    fontSize: hp(2.46),
    fontFamily: Fonts.Bold,
    letterSpacing: 0.6,
    color: Colors.blackColor,
    fontWeight: '700',
    marginLeft: wp(4.27),
    marginTop: hp(4.93)
  },
  subNameText: { color: 'grey', fontSize: 12, },
  dateView: { flexDirection: 'row', alignSelf: 'center' },
  userImage: { width: hp(5.17), height: hp(5.17), borderRadius: hp(5.17 / 2), backgroundColor: Colors.backColor, marginRight: wp(2) },

})