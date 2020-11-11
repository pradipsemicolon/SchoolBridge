import React, { Component } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Login from '../screen/Login/Login';
import Home from '../screen/Home/Home';
import Diary from '../screen/Diary/Diary';
import Search from '../screen/Search/Search';
import Profile from '../screen/Profile/Profile';
import { Colors } from '../utils/Colors';
import AddLink from '../screen/AddLink/AddLink';
import DayCarePack from '../screen/DayCarePack/DayCarePack';
import AbsentHistory from '../screen/AbsentHistory/AbsentHistory';
import Alert from '../screen/Alert/Alert';
import MealCalender from '../screen/MealCalender/MealCalender';
import TeacherComments from '../screen/TeacherComment/TeacherComments';
import Gallery from '../screen/Gallery/Gallery';
import SubListGallery from '../screen/SubListGallery/SubListGallery';
import PreviewImage from '../screen/SubListGallery/PreviewImage';
import Portfolio from '../screen/Portfolio/Portfolio';
import AdmissionEnquiry from '../screen/AdmissionEnquiry/AdmissionEnquiry';
import ContactUs from '../screen/ContactUs/ContactUs';
import E_learning from '../screen/E-Learning/E_learning';
import Subject from '../screen/E-Learning/Subject';
import VirtualClassRoom from '../screen/VirtualClassRoom/VirtualClassRoom';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
// tabBar={props => <MyTabBar {...props} />}
export const BottomTab = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.themeColor,
            showLabel: false
        }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Diary"
                component={Diary}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default class Route extends Component {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName='E_learning' headerMode='none'>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="main" component={BottomTab} />
                    <Stack.Screen name="AddLink" component={AddLink} />
                    <Stack.Screen name="DayCarePack" component={DayCarePack} />
                    <Stack.Screen name="AbsentHistory" component={AbsentHistory} />
                    <Stack.Screen name="Alert" component={Alert} />
                    <Stack.Screen name="MealCalender" component={MealCalender} />
                    <Stack.Screen name="TeacherComments" component={TeacherComments} />
                    <Stack.Screen name="Gallery" component={Gallery} />
                    <Stack.Screen name="SubListGallery" component={SubListGallery} />
                    <Stack.Screen name="PreviewImage" component={PreviewImage} />
                    <Stack.Screen name="Portfolio" component={Portfolio} />
                    <Stack.Screen name="AdmissionEnquiry" component={AdmissionEnquiry} />
                    <Stack.Screen name="ContactUs" component={ContactUs} />
                    <Stack.Screen name="E_learning" component={E_learning} />
                    <Stack.Screen name="Subject" component={Subject} />
                    <Stack.Screen name="VirtualClassRoom" component={VirtualClassRoom} />
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}

