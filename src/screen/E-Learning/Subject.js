import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../utils/Colors';
import { LoginStyle } from '../Login/LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';
import E_learning from '../../components/Home/E_learning';
import { DiaryStyles } from '../Diary/DiaryStyles';

export default class Subject extends Component {
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
                            <Text style={LoginStyle.headingText}>Mathematics</Text>
                        </View>

                        <Text style={styles.headingText}>Continue Learning</Text>
                        <E_learning />

                        <Text style={styles.headingText}>Chapters</Text>
                        <View style={[DiaryStyles.borderRadiousView, { marginVertical: hp(2.46) }]} >

                            <FlatList
                                data={[1, 2, 3, 4]}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ borderRadius: 12 }}>
                                            <View style={{ borderRadius: 12, backgroundColor: item.isSelected ? '#F1F3F6' : 'white', paddingHorizontal: wp(5.33), paddingVertical: hp(1.48) }}>
                                                <TouchableOpacity onPress={() => this.onSelectActivity(index, index0)}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View
                                                            style={DiaryStyles.clipView}>
                                                            <Text style={styles.indexText}>{index + 1}</Text>
                                                            {/* <Icon
                                                                name="paperclip"
                                                                size={20}
                                                                color="#3f288d"
                                                                style={{ transform: [{ rotate: '90deg' }] }}
                                                            /> */}
                                                        </View>
                                                        <View
                                                            style={DiaryStyles.headTextView}>
                                                            <View>
                                                                <Text style={styles.nameText}>
                                                                    {"item.name"}
                                                                </Text>
                                                            </View>

                                                            <View style={DiaryStyles.timeView}>


                                                                <Icon
                                                                    name="chevron-right"
                                                                    size={20}
                                                                    color="#6D7278"
                                                                    style={{ justifyContent: 'flex-end' }}
                                                                />



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
    indexText:{
         color: Colors.themeColor,
         fontFamily:Fonts.Bold,
         fontSize:hp(2.46),
         letterSpacing:0.6,
    }
})
