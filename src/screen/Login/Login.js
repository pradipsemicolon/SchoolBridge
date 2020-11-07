import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../utils/Colors';
import { LoginStyle } from './LoginStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
var tab = [
    { name: 'Admin', isSelected: true },
    { name: 'Staff', isSelected: false },
    { name: 'Parent', isSelected: false },
]
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onTapTab(index) {
        tab.forEach(element => {
            element.isSelected = false
        });
        tab[index].isSelected = true
        this.setState({})
    }
    render() {
        return (
            <KeyboardAwareScrollView style={LoginStyle.mainView}>
                <SafeAreaView>
                    {/* Header view */}
                    <View style={LoginStyle.headerView}>
                        <TouchableOpacity>
                            <FontAwesome name="angle-left" size={25} color={Colors.themeColor} />
                        </TouchableOpacity>
                        <Text style={LoginStyle.headingText}>Login</Text>
                    </View>

                    <Text style={LoginStyle.hiText}>{'Hi,\nWelcome Back!'}</Text>

                    <Text style={LoginStyle.chooseText}>{'Choose account type'}</Text>
                    {/* Tab View */}
                    <View style={LoginStyle.tabView}>
                        {
                            tab.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => this.onTapTab(index)}
                                        style={[LoginStyle.tabButton, { backgroundColor: item.isSelected ? Colors.themeColor : 'white' }]}>
                                        <Text style={[LoginStyle.tabText, { color: item.isSelected ? 'white' : 'black' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                    {/* Login View */}
                    <View style={[LoginStyle.loginView, { borderRadius: 20, }]}>
                        <Text style={[LoginStyle.chooseText, { marginTop: 20 }]}>{'Login Account'}</Text>
                        <Text style={[LoginStyle.chooseText, { marginTop: 20 }]}>{'Email'}</Text>
                        <TextInput
                            placeholder='tivabna@mircaka.net'
                            style={LoginStyle.textInputStyle}
                        />
                        <Text style={[LoginStyle.chooseText, { marginTop: 20 }]}>{'Password'}</Text>
                        <TextInput
                            placeholder='Password'
                            style={LoginStyle.textInputStyle}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity style={LoginStyle.forgotPassButton}>
                            <Text style={LoginStyle.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('main')}
                        style={LoginStyle.loginButton}>
                            <Text style={LoginStyle.loginButtonText}>Login Account</Text>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }
}

