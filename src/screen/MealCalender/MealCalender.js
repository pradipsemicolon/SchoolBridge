import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { LoginStyle } from '../Login/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts';
import { Colors } from '../../utils/Colors';
import moment from 'moment'

var data = [
    { name: 'Brunch', subName: 'Poha', time: '10:32AM' },
    { name: 'Mid-day Meal', subName: 'roti-sabji', time: '01:30PM' },
    { name: 'Dinner', subName: 'Salad', time: '07:30PM' }
]
export default class MealCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <View >
                <SafeAreaView >
                    <View >
                        <View style={LoginStyle.headerView}>
                            <TouchableOpacity>
                                <Icon name="angle-left" size={25} color={Colors.themeColor} />
                            </TouchableOpacity>

                            <Text style={LoginStyle.headingText}>Meal Calender</Text>
                        </View>
                        <ScrollView style={{width:'100%', height:'92%'}} contentContainerStyle={{ paddingHorizontal: wp(5.33) }}>
                            <View style={styles.calenderView}>
                                {this.renderCalender()}
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View>
                                            <Text style={styles.nameText}>{item.name}</Text>
                                            <View style={styles.mealView}>
                                                <View style={styles.v1}>
                                                    <Image style={styles.i1} />
                                                    <View style={{ marginLeft: wp(2.67) }}>
                                                        <Text style={styles.subNameText}>{item.subName}</Text>
                                                        <Text style={styles.timeText}>{item.time}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </ScrollView>

                    </View>
                </SafeAreaView>
            </View>
        );
    }


    renderCalender() {
        return (
            <Calendar
                // Initially visible month. Default = Date()
                current={'2020-11-04'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2021-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => { console.log('selected day', day) }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => { console.log('selected day', day) }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => { console.log('month changed', month) }}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={(direction) =>}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Show week numbers to the left. Default = false
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={false}
                enableSwipeMonths={true}
                renderHeader={(date) => {
                    const header = date.toString('MMM yyyy');
                    const [month, year] = header.split(' ');
                    const textStyle = {
                        fontSize: hp(1.97),
                        fontFamily: Fonts.Medium,
                        paddingTop: 10,
                        paddingBottom: 10,
                        color: Colors.themeColor,
                        paddingRight: 5
                    };

                    return (
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginBottom: 10,
                        }}>
                            <Text style={{ marginLeft: 5, ...textStyle }}>{`${month}`}</Text>
                            <Text style={{ marginRight: 5, ...textStyle }}>{year}</Text>
                        </View>
                    );
                }}

                style={{
                    backgroundColor: 'transparent',
                    borderRadius: 25
                }}
                theme={{
                    textDayFontFamily: Fonts.Regular,
                    textDayFontSize: hp(1.48),
                    monthTextColor: Colors.themeColor,
                    arrowColor: Colors.themeColor,
                    textMonthFontSize: hp(1.97),
                    textMonthFontFamily: Fonts.Medium,
                    calendarBackground: 'transparent',
                    'stylesheet.calendar.header': {
                        dayHeader: {
                            fontFamily: Fonts.Regular,
                            color: '#3F4A56',
                            fontSize: hp(1.48)
                        }
                    },
                    'stylesheet.day.basic': {
                        today: {
                            // borderColor: '#48BFE3',
                            // borderWidth: 0.8,
                            backgroundColor: Colors.themeColor,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',

                        },
                        todayText: {
                            color: 'white',
                            fontFamily: Fonts.Medium,
                            fontSize: hp(1.48),
                            textAlign: 'center',
                            padding: 1,
                            // fontWeight: '800'
                        }
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    calenderView: {
        borderRadius: 25,
        marginTop: hp(3.94),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 4,
    },
    mealView: {
        borderRadius: 20,
        marginTop: hp(2.46),
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 4,
    },
    nameText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.46),
        color: Colors.blackColor,
        letterSpacing: 0.6,
        marginTop: hp(2.46),
        marginLeft:wp(5.33)
    },
    subNameText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        color: Colors.blackColor,
        letterSpacing: 0.48
    },
    timeText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.23),
        color: '#A7A7A7',
        letterSpacing: 0.3,
        marginTop: 3
    },
    v1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    i1: {
        height: hp(5.17),
        width: hp(5.17),
        borderRadius: 12,
        backgroundColor: Colors.backColor,
        marginLeft: wp(5.33),
        marginVertical: hp(2.46)
    },
})