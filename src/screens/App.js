import React, {useState, useEffect} from 'react'
import { View , Text,TouchableWithoutFeedback,Keyboard, Linking} from 'react-native'
import {AppHeader, AppInput, AppButton, AppCheckBox} from '../components'
import {AppStyles} from '../styles'
import {SearchInput, ClearSearch,CheckBoxTicker, openDevURL} from '../functions'

export default function App({navigation}) {
    const [search, setSearch] = useState('');
    const [Intense_Search, setIntense_Search] = useState(false)
    const [Normal_Search, setNormal_Search] = useState(true)
    const [site, setSite] = useState('')
    useEffect(() => {
        alert('Please Do Not Do Something Wrong/bad/anything that causes harm you are responsible for every search you do in this app thank you!')
    },[])
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
            <AppHeader 
                title="Google Searcher" 
                headerStyle={AppStyles.HeaderStyle} 
            />
            
            <AppInput 
                placeholder="Search" 
                righticonName="search" 
                rightFontFamily="MaterialIcons" 
                onRightPress={() => SearchInput(search,Intense_Search,site,navigation)} 
                value={search} 
                onChangeText={setSearch}
            />
            
            <AppButton 
                onPress={() => ClearSearch(setSearch)}
                style={AppStyles.ButtonStyle} 
                title="Clear Search"
            />

            <AppCheckBox 
                title="Normal Search" 
                checked={Normal_Search} 
                onPress={() => CheckBoxTicker(Normal_Search, setNormal_Search, setIntense_Search)} 
                containerStyle={AppStyles.CheckBox1Style}
            />

            <AppCheckBox 
                title="Intense Search" 
                checked={Intense_Search} 
                onPress={() => CheckBoxTicker(Intense_Search, setIntense_Search, setNormal_Search)}/>

            <AppInput 
                placeholder="Site url (optional)"
                value={site} 
                style={AppStyles.InputStyle}
                onChangeText={setSite}
            />
            <AppButton 
                onPress={() => ClearSearch(setSite)}
                style={AppStyles.ButtonStyle} 
                title="Clear Site"
            />
            <Text style={AppStyles.TextStyle}>Note : This Will Only Work On Intense Search 👆!</Text>
            <Text onPress={() => openDevURL(Linking,'https://sharifjameel90.github.io')} style={AppStyles.devStyles}>Devloper : Sharif Jameel</Text>
            
        </View>
        </TouchableWithoutFeedback>
    )
}
