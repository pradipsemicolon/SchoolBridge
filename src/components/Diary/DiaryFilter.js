import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';

export default class DiaryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BottomSheet ref={ref => this.toggle = ref}>
                <Text style={{ paddingVertical: 20 }}>
                    Some random content
                </Text>
            </BottomSheet>
        );
    }
}
