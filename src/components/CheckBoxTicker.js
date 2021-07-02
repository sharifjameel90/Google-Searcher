import React, { Component } from 'react'
import { CheckBox } from 'react-native-elements'


export default class CheckBoxTicker extends Component {
    render() {
        return (
            <CheckBox
                title={this.props.title}
                checked={this.props.checked}
                onPress={this.props.onPress}
                containerStyle={this.props.containerStyle}
            />          
        )
    }
}
