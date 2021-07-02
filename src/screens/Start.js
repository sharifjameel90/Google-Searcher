import React from 'react'
import { ActivityIndicator,Platform, View , Alert,Linking,BackHandler} from 'react-native'
import {StartStyles} from '../styles';
import {Text,Image} from 'react-native-elements'
import {NaviGate, exitApp} from '../functions'
import {version} from '../../package.json'

export default function Start({navigation}) {
    fetch('https://download-googlesearch.herokuapp.com/version').then((response) => response.json())
    .then((json) => {
      if(json.version == version) {
          NaviGate(navigation,'Home')
      } else {
        Alert.alert(
            "Google Searcher",
            "Update Available Please Update To The Latest version",
            [
              {
                text: "Cancel",
                onPress: () => exitApp(BackHandler, Platform.OS),
                style: "cancel"
              },
              { text: "OK", onPress: () => Linking.openURL('https://download-googlesearch.herokuapp.com') }
            ]
          );
      }
    })
    .catch((error) => {
        alert(error);
    })
    return (
        <View style={StartStyles.containerStyle}>
            <Image style={StartStyles.ImageStyles} source={require('../assets/google.png')} 
            PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={StartStyles.TextStyle} h4>Google Searcher</Text>
        </View>
    )
}
