import React, { Component } from 'react'
import {Button} from 'react-native-elements'

export default class AppButton extends Component {
    render() {
        return (
            <Button
                title={this.props.title}
                type={this.props.type}
                icon={this.props.icon}
                loding={this.props.loding}
                iconRight={this.props.iconRight}
                containerStyle={this.props.style}
                onPress={this.props.onPress}
            />
        )
    }
}

AppButton.defaultProps = {
    title: 'Enter A Value',
    type:'solid',
    icon: null,
    loding: false,
    iconRight: false,
    style: null
}