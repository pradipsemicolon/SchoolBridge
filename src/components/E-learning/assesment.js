import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../utils/Fonts';
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../../utils/Colors';
import { DiaryStyles } from '../../screen/Diary/DiaryStyles';
import Icon from 'react-native-vector-icons/Feather';

export default class assesment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderAssesment() {
        return (
            <View style={[DiaryStyles.borderRadiousView, { marginVertical: hp(2.46) }]} >

                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ borderRadius: 12 }}>
                                <View style={{ borderRadius: 12, backgroundColor: item.isSelected ? '#F1F3F6' : 'white', paddingHorizontal: wp(5.33), paddingVertical: hp(1.48) }}>
                                    {/* <TouchableOpacity onPress={() => this.onSelectActivity(index, index0)}> */}
                                    <View style={{ flexDirection: 'row' }}>
                                        
                                        <View
                                            style={DiaryStyles.headTextView}>
                                            <View>
                                                <Text style={styles.nameText}>{"item.name"}</Text>
                                                <Text style={styles.subnameText}>{"item.name"}</Text>
                                                <Text style={[styles.subnameText, { fontSize: hp(1.23), }]}>{"item.name"}</Text>
                                            </View>

                                            <View style={DiaryStyles.timeView}>

                                                <ProgressCircle
                                                    percent={75}
                                                    radius={hp(3.26)}
                                                    borderWidth={8}
                                                    color={Colors.themeColor}
                                                    shadowColor="#F1F3F8"
                                                    bgColor="#fff"
                                                    width={hp(6.53)}
                                                    height={hp(6.53)}
                                                >
                                                    <Text style={styles.headingText1}>{'7.5'}</Text>
                                                </ProgressCircle>




                                            </View>
                                        </View>
                                    </View>
                                    {/* </TouchableOpacity> */}

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
            <View>
                <View style={styles.mainView}>
                    <View style={styles.subView}>
                        <Text style={styles.headingText}>Overall CGPA </Text>
                    </View>
                    <View style={styles.progressMainView}>
                        <View style={styles.progressView}>
                            <ProgressCircle
                                percent={50}
                                radius={hp(6.28)}
                                borderWidth={8}
                                color={Colors.themeColor}
                                shadowColor="#F1F3F8"
                                bgColor="#fff"
                                width={hp(12.44)}
                                height={hp(12.44)}
                            >
                                <Text style={styles.headingText}>{'9/10'}</Text>
                            </ProgressCircle>
                        </View>
                        <View>
                            <View style={[styles.totalView, { paddingVertical: hp(1) }]}>
                                <View style={styles.totalView}>
                                    <Image style={styles.dotView} />
                                    <Text style={styles.totalText}>Total Tests</Text>
                                </View>
                                <View>
                                    <Text style={styles.marksText}>10</Text>
                                </View>
                            </View>
                            <View style={[styles.totalView, { paddingVertical: hp(1) }]}>
                                <View style={styles.totalView}>
                                    <Image style={styles.dotView} />
                                    <Text style={styles.totalText}>Total Marks</Text>
                                </View>
                                <View>
                                    <Text style={styles.marksText}>100</Text>
                                </View>
                            </View>
                            <View style={[styles.totalView, { paddingVertical: hp(1) }]}>
                                <View style={styles.totalView}>
                                    <Image style={styles.dotView} />
                                    <Text style={styles.totalText}>Marks Obtained</Text>
                                </View>
                                <View>
                                    <Text style={styles.marksText}>90</Text>
                                </View>
                            </View>
                        </View>
                    </View>



                </View>

                <Text style={[styles.headingText, { marginTop: hp(4.93), marginLeft: wp(4.27), }]}>Recent Tests</Text>
                {this.renderAssesment()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: hp(21.67),
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
        marginTop: hp(4.19),
        paddingHorizontal: wp(5.33),
        paddingVertical: hp(2.46),
    },

    subView: { flexDirection: 'row', justifyContent: 'space-between' },
    btn: { flexDirection: 'row', borderRadius: 12, borderWidth: 1.5, borderColor: '#6D7278', alignItems: 'center', paddingVertical: 2, paddingHorizontal: 5 },
    dropText: { fontSize: 10, marginRight: 5, color: '#6D7278' },
    headingText: {
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold,
        letterSpacing: 0.6,
        color: Colors.blackColor,
        fontWeight: '700',

    },
    progressMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressView: { marginTop: hp(2.46), alignSelf: 'center', },
    totalView: { flexDirection: 'row', alignItems: 'center' },
    dotView: {
        width: hp(1.48),
        height: hp(1.48),
        borderRadius: hp(1.48 / 2),
        backgroundColor: Colors.themeColor
    },
    totalText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        letterSpacing: 0.6,
        color: '#5B5B5B',
        marginLeft: wp(1.6),
        width: wp(30.67)
    },
    marksText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        letterSpacing: 0.6,
        color: 'black',
        marginLeft: wp(1.6),

    },
    nameText: {
        fontSize: hp(1.97),
        fontFamily: Fonts.Medium,
        color: Colors.blackColor
    },
    subnameText: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Regular,
        color: '#5B5B5B',
        marginTop:4
    },
    headingText1: {
        fontSize: hp(1.48),
        fontFamily: Fonts.Bold,
        letterSpacing: 0.6,
        color: Colors.themeColor,
        fontWeight: '700',

    },

})