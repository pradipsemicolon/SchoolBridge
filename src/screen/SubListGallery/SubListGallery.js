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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { LoginStyle } from '../Login/LoginStyle';

export default class SubListGallery extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <ScrollView>
                        {/* Header. */}
                        <View style={[LoginStyle.headerView, { marginHorizontal: wp(5.33), justifyContent: 'space-between' }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                                </TouchableOpacity>
                                <Text style={LoginStyle.headingText}>Annual Day</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name="ios-information-circle-outline" size={28} color={Colors.themeColor} />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={[1, 2]}
                            renderItem={() => {

                                return (
                                    <View>
                                        <View style={styles.title}>
                                            <Text style={styles.titleText}>Today</Text>
                                        </View>
                                        <FlatList
                                            data={[1, 2, 3, 4, 5]}
                                            style={{ marginHorizontal: 10 }}
                                            keyExtractor={(item, index) => index}
                                            numColumns={3}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <Image style={styles.imageStyle} />
                                                    </View>

                                                )
                                            }}
                                        />
                                    </View>
                                )
                            }}
                        />

                    
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: hp(6.03),
        marginRight: wp(27.77),
        marginLeft: wp(4.83),
        flexDirection: 'row'

    },
    headText: {
        fontSize: 24,
        color: '#3f288d',
        fontWeight: 'bold',
        marginRight: wp(23.2)
    },
    title: {
        marginTop: hp(4.93),
        marginLeft: wp(10.67),
        marginBottom: hp(2)
    },
    titleText: {
        color: Colors.blackColor,
        fontSize: hp(2.46),
        fontFamily: Fonts.Bold
    },
    section1text: {
        marginTop: hp(1.70),
        marginBottom: hp(2.12),
        marginLeft: wp(4.83),
        fontSize: 14,
        color: '#A7A7A7',

    },
    section2: {

        marginLeft: wp(5.53),
        marginRight: wp(5.53),
        marginTop: hp(2.46)


    },

    icon: {
        backgroundColor: '#F1F3F6',
        height: 50,
        width: 50,
        borderRadius: 10,
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
        height: hp(6.27),
        borderRadius: 12,
        alignItems: 'center',
        fontSize: 14,
        justifyContent: "center",
        top: hp(2),
        width: wp(89.33),

        alignSelf: 'center',
        marginVertical: hp(5.04),

    },
    imageStyle: {
        width: wp(28.63),
        height: wp(28.63),
        backgroundColor: Colors.lineColor,
        marginHorizontal: 5,
        borderRadius: 8,
        marginVertical: 5
    }

})