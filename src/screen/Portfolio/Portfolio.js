import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Slick from 'react-native-slick';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStyle } from '../Home/HomeStyle';
import Gallery from '../../components/Home/Gallery';
import UpcomingEvents from '../../components/Home/UpcomingEvents';
import Faculty from '../../components/Portfolio/Faculty'
import Reviews from '../../components/Portfolio/Reviews';

const about = "We, at Cambridge School, Noida believe that sharpening of the mind and intellect is the noblest aim of education. We do not want the minds of our children to be limited within the confines of curricular or of borrowed thought; we want them to confront both victory and defeat and as Kipling wrote, “Treat these two imposters just the same..”"

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return ( 
            <View style={styles.mainView}>
                <ScrollView>
                    <View>
                        <View>
                            <Slick scrollEnabled={true} pagingEnabled={true} activeDotStyle={styles.activeDotStyle} dotStyle={styles.dotStyle} style={styles.wrapper} >
                                {
                                    [1, 2, 3, 4].map((item, index) => {
                                        return (
                                            <Image style={styles.slickImage} />
                                        )
                                    })
                                }
                            </Slick>
                        </View>
                        <View style={styles.schoolnameView}>
                            <View>
                                <Text style={styles.schoolnameText}>Cambridge International School, Delhi</Text>
                                <Text style={styles.addressText}>C.B.S.E Affilated, Dehli Board</Text>
                            </View>
                            <TouchableOpacity style={styles.callButton}>
                                <Ionicons name="call-sharp" size={25} color={'white'} />
                            </TouchableOpacity>
                        </View>

                        {/* about us */}
                        <View >
                            <View style={HomeStyle.head}>
                                <Text style={[HomeStyle.title, { marginLeft: wp(5.33) }]}>About Us</Text>
                            </View>
                            <View style={styles.aboutView}>
                                <Text style={styles.aboutText}>{about}</Text>
                            </View>
                        </View>

                        {/* Gallery */}
                        <View >
                            <View style={[HomeStyle.head, { paddingHorizontal: wp(10.67) }]}>
                                <Text style={HomeStyle.title}>Gallery</Text>
                                <TouchableOpacity>
                                    <Text style={HomeStyle.seeallText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: wp(5.33) }}>
                                <Gallery />
                            </View>
                        </View>

                        {/* latest News */}
                        <View >
                            <View style={[HomeStyle.head, { paddingHorizontal: wp(10.67) }]}>
                                <Text style={HomeStyle.title}>Latest News</Text>
                            </View>
                            <View style={{ marginLeft: wp(5.33) }}>
                                <UpcomingEvents />
                            </View>
                        </View>

                        {/* Our faculty */}
                        <View >
                            <View style={[HomeStyle.head, { paddingHorizontal: wp(10.67) }]}>
                                <Text style={HomeStyle.title}>Our Faculty</Text>
                            </View>
                            <View style={{ marginLeft: wp(5.33) }}>
                                <Faculty />
                            </View>
                        </View>

                        {/* Our faculty */}
                        <View >
                            <View style={[HomeStyle.head, { paddingHorizontal: wp(10.67) }]}>
                                <Text style={HomeStyle.title}>Parents Reviews</Text>
                            </View>
                            <View style={{ marginLeft: wp(5.33), marginBottom: hp(4) }}>
                                <Reviews />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomButtonView}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AdmissionEnquiry')} style={styles.admissionButton}>
                        <Text style={styles.buttonText}>Admission Enquiries</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginbuttonText}>Login Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backColor
    },
    wrapper: {
        height: hp(39.29),
    },
    activeDotStyle: {
        backgroundColor: Colors.themeColor,
        height: hp(1.48),
        width: hp(1.48),
        borderRadius: hp(1.48 / 2)
    },
    dotStyle: {
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderWidth: 1,
        height: hp(1.48),
        width: hp(1.48),
        borderRadius: hp(1.48 / 2)
    },
    slickImage: {
        height: hp(39.29),
        width: '100%',
        backgroundColor: 'pink'
    },
    schoolnameView: {
        width: '100%',
        height: hp(11.82),
        backgroundColor: 'rgba(253,253,253,1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.2,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(5.33),
        justifyContent: 'space-between'
    },
    schoolnameText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
        color: Colors.blackColor,
        width: wp(68.53)
    },
    addressText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        letterSpacing: 0.6,
        color: '#5B5B5B',
        width: wp(68.53)

    },
    callButton: {
        backgroundColor: Colors.themeColor,
        width: hp(5.91),
        height: hp(5.91),
        borderRadius: 12,
        shadowColor: 'rgba(63, 40, 141, 0.3)',
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 12,
        shadowOpacity: 0.5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutView: {
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOffset: { width: 0, height: 16 },
        shadowRadius: 20,
        shadowOpacity: 0.5,
        elevation: 5,
        padding: hp(2.46),
        marginHorizontal: wp(5.33),
        marginTop: hp(2.46)

    },
    aboutText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        color: '#5B5B5B',
        lineHeight: hp(2.96),
        letterSpacing: 0.48,
        fontWeight: '400'
    },
    bottomButtonView: {
        position: 'absolute',
        paddingHorizontal: wp(5.33),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        bottom: hp(11.08)

    },
    admissionButton: {
        width: wp(42.67),
        height: 56,
        backgroundColor: '#F1F3F6',
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 0, height: 16 },
        shadowRadius: 12,
        shadowOpacity: 0.5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        width: wp(42.67),
        height: 56,
        backgroundColor: Colors.themeColor,
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 0, height: 16 },
        shadowRadius: 12,
        shadowOpacity: 0.5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.themeColor,
        letterSpacing: 0.35,
        fontWeight: '500',
        fontFamily: Fonts.Medium,
        fontSize: hp(1.72)
    },
    loginbuttonText: {
        color: 'white',
        letterSpacing: 0.35,
        fontWeight: '500',
        fontFamily: Fonts.Medium,
        fontSize: hp(1.72)

    },
})
