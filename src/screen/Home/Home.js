import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Attandance from '../../components/Home/Attandance';
import Fees from '../../components/Home/Fees';
import Testdetail from '../../components/Home/Testdetail';
import { Fonts } from '../../utils/Fonts';
import RegisterNow from '../../components/Home/RegisterNow'
import UpcomingEvents from '../../components/Home/UpcomingEvents';
import E_learning from '../../components/Home/E_learning';
import Gallery from '../../components/Home/Gallery';
import { HomeStyle } from './HomeStyle';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={HomeStyle.mainView}>
                <SafeAreaView>
                    <ScrollView style={HomeStyle.scroll}>
                        <View style={{ paddingHorizontal: wp(5.33), }}>
                            {/* Header View */}
                            <View style={HomeStyle.headerView}>
                                <Image style={HomeStyle.userImage} />
                                <View style={HomeStyle.textView}>
                                    <View>
                                        <Text style={HomeStyle.hiText}>Hi Shubham,</Text>
                                        <Text style={HomeStyle.welcomeText}>Welcome Back!</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={HomeStyle.alertButton}>
                                            <Ionicons name="notifications-outline" color={'#5B5B5B'} size={20} style={{ alignSelf: 'center', }} />
                                            <Image style={HomeStyle.dotImage} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Attandance */}
                            <Attandance />

                            {/* Fees and lesson */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Fees />
                                <Testdetail />
                            </View>

                            {/* Register Now */}
                            <RegisterNow />

                            {/* Upcoming Events */}
                            <View style={HomeStyle.head}>
                                <Text style={HomeStyle.title}>Upcoming Events</Text>
                                <TouchableOpacity>
                                    <Text style={HomeStyle.seeallText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <UpcomingEvents />

                            {/* E-Learning */}
                            <View style={HomeStyle.head}>
                                <Text style={HomeStyle.title}>E-Learning</Text>
                                <TouchableOpacity>
                                    <Text style={HomeStyle.seeallText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <E_learning />

                            {/* Gallery */}
                            <View style={HomeStyle.head}>
                                <Text style={HomeStyle.title}>Gallery</Text>
                                <TouchableOpacity>
                                    <Text style={HomeStyle.seeallText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <Gallery />

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
