import React from 'react'
import {AppHeader} from '../components'
import {WebView} from 'react-native-webview'
import * as Progress from 'react-native-progress';
export default function Searcher({navigation, route}) {
    const {site,search,Intense_Search} = route.params;
    const [progress, setProgress] = React.useState(0)
    const [isLoaded, setIsLoaded] = React.useState(false)
    return (
        <>
        <AppHeader 
            title="Searcher" 
            leftIconPress={() => navigation.goBack()} 
            leftIcon="arrow-back"/>
        {!isLoaded ? (
            <Progress.Bar 
                progress={progress} 
                width={null} 
                color="#000"
                borderWidth={0}
                borderRadius={0}
            />
        ): null}
        {
            Intense_Search ? (
                <>
                {site ? (
                    <WebView 
                        source={{uri: `https://google.com/search?q=intext:"${search}" site:${site}`}}
                        onError={({nativeEvent}) => alert(nativeEvent.description)}
                        onLoadEnd={() => setIsLoaded(true)}
                        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
                    />
            ): (
                <WebView 
                        source={{uri: `https://google.com/search?q=intext:"${search}"`}}
                        onError={({nativeEvent}) => alert(nativeEvent.description)}
                        onLoadEnd={() => setIsLoaded(true)}
                        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
                    />
            )}
                </>
            ) : (

                <WebView 
                    source={{uri: 'https://google.com/search?q='+search}}
                    onError={({nativeEvent}) => alert(nativeEvent.description)}
                    onLoadEnd={() => setIsLoaded(true)}
                    onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
                />
            )
        }
        </>
    )
}
