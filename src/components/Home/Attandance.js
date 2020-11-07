import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../utils/Fonts';


export default class Attandance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.headingText}> Attandance </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.dropText}>Monthly</Text>
            <FontAwesome name='chevron-down' size={10} color={'#6D7278'} />
          </TouchableOpacity>
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    fontFamily: Fonts.Bold
    // fontWeight: 'bold'
  }

})
