import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../utils/Colors';
import { LoginStyle } from '../Login/LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';
import { DiaryStyles } from '../Diary/DiaryStyles';
import Assesment from '../../components/E-learning/assesment';

export default class E_learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabSelect: true
        };
    }

    onSelectTab(index) {
        if (index == 1) {
            this.setState({ isTabSelect: true })
        } else {
            this.setState({ isTabSelect: false })
        }
    }

    renderSubjects() {
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
                                                    <Text style={styles.nameText}>{"item.name"}</Text>
                                                </View>

                                                <View style={DiaryStyles.timeView}>


                                                    <Icon
                                                        name="chevron-right"
                                                        size={15}
                                                        color="#5B5B5B"
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

                        {/* Tab View */}
                        <View style={styles.tabView}>
                            <TouchableOpacity onPress={() => this.onSelectTab(1)} style={{ marginLeft: wp(5.33) }}>
                                <Text style={this.state.isTabSelect ? styles.selectTabText : styles.tabText}>Subjects</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onSelectTab(2)} style={{ marginLeft: wp(5.33) }}>
                                <Text style={this.state.isTabSelect ? styles.tabText : styles.selectTabText}>Assesment</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.isTabSelect ?
                                this.renderSubjects()
                                : <Assesment />
                        }


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
        fontFamily: Fonts.Regular,
        color: Colors.blackColor
    },
})