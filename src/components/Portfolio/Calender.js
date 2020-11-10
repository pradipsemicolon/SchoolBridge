import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

export default class Calender extends Component {

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
                    borderRadius: 25,
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

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.calenderMainView}>
                    <View style={styles.blueCornerView}>
                        <Text style={styles.yearText}>2020</Text>
                        <Text style={styles.dateText}>Wed, 22 Sept</Text>
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        {this.renderCalender()}
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <Text style={styles.cencelText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.continueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calenderMainView: {
        width: wp(89.33),
    },
    blueCornerView: {
        height: hp(11.45),
        width: '100%',
        backgroundColor: Colors.themeColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: wp(5.33),
        justifyContent: 'center',
    },
    yearText: {
        color: 'white',
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
    },
    dateText: {
        color: 'white',
        fontFamily: Fonts.Medium,
        fontSize: hp(2.96),
        letterSpacing: 0.48,
        marginTop: 6
    },
    buttonView: {
        backgroundColor: 'white',
        height: hp(5),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingRight: wp(5.33),
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    continueText: {
        color: Colors.themeColor,
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
        fontWeight: '500'
    },
    cencelText: {
        color: '#A7A7A7',
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        letterSpacing: 0.48,
        fontWeight: '500',
        marginRight: wp(4.27)
    },
})
