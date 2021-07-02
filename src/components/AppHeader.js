import React, { Component } from 'react'
import { View } from 'react-native'
import {Header} from 'react-native-elements'
export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Header
                // placement="left"
                leftComponent={{ icon: this.props.leftIcon, color: '#fff', onPress: this.props.leftIconPress }}
                centerComponent={{ text: this.props.title, onPress: this.props.titlePress ,style: { color: '#fff' } }}
                rightComponent={{ icon: this.props.rightIcon, color: '#fff',onPress: this.props.rightIconPress }}
                containerStyle={this.props.headerStyle}
                />
            </View>
        )
    }
}
