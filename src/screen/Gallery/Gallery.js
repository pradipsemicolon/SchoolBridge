import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import { Colors } from '../../utils/Colors'
import { LoginStyle } from '../Login/LoginStyle'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Feather';
import { Fonts } from '../../utils/Fonts';

export default class Gallery extends Component {

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

    render() {
        return (
            <View style={{ paddingHorizontal: wp(5.33) }}>
                {/* Header view */}
                <SafeAreaView>

                    <View style={[LoginStyle.headerView, { marginLeft: wp(0) }]}>
                        <TouchableOpacity>
                            <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                        </TouchableOpacity>
                        <Text style={LoginStyle.headingText}>Gallery</Text>
                    </View>

                    <View style={styles.tabView}>
                        <TouchableOpacity onPress={() => this.onSelectTab(1)} style={{ marginLeft: wp(5.33) }}>
                            <Text style={this.state.isTabSelect ? styles.selectTabText : styles.tabText}>Albums</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onSelectTab(2)} style={{ marginLeft: wp(5.33) }}>
                            <Text style={this.state.isTabSelect ? styles.tabText : styles.selectTabText}>Videos</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={[1, 2, 3, 4]}
                        numColumns={2}
                        style={{ marginTop: hp(2.46), marginLeft: wp(-1.23) }}
                        renderItem={({ item, index }) => {
                            return (
                                this.state.isTabSelect ?
                                    // Image Library
                                    <View style={[styles.cellView, { marginTop: index % 2 == 1 ? hp(2.46) : 0 }]}>
                                        <Image style={styles.videoStyle} />
                                        <Text numberOfLines={1} style={styles.nameText}>Anual Day and…</Text>
                                    </View> :
                                    // Video Library
                                    <View style={[styles.cellView, { marginTop: index % 2 == 1 ? hp(2.46) : 0 }]}>
                                        <View style={styles.videoStyle} >
                                            <Image style={styles.imageStyle} />
                                            <TouchableOpacity style={styles.playButton}>
                                                <Ionicons name="play" color={Colors.themeColor} size={18} style={{ alignSelf: 'center' }} />

                                            </TouchableOpacity>
                                        </View>
                                        <Text numberOfLines={1} style={styles.nameText}>Anual Day and…</Text>
                                    </View>
                            )
                        }}
                    />


                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%'
    },
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
    cellView: {
        width: wp(41.87),
        height: 240,
        borderRadius: 20,
        backgroundColor: '#FDFDFD',
        marginHorizontal: wp(2.67)
    },
    videoStyle: {
        margin: 10,
        backgroundColor: 'red',
        height: 187,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    nameText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
        color: Colors.blackColor,
        paddingHorizontal: wp(3.6),
        textAlign: 'center'
    },
    playButton: {
        position: 'absolute',
        width: hp(5.17),
        height: hp(5.17),
        borderRadius: hp(5.17 / 2),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
