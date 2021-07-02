import React, { Component } from 'react'
import {Input} from 'react-native-elements';

export default class AppInput extends Component {
    render() {
        return (
                <Input
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    leftIcon={{ type: this.props.leftFontFamily, name: this.props.lefticonName,onPress:this.props.onLeftPress , style: this.props.leftIconstyle}}
                    rightIcon={{ type: this.props.rightFontFamily, name: this.props.righticonName, onPress: this.props.onRightPress, style: this.props.rightIconstyle}}
                    style={this.props.style}
                />
        )
    }
}
