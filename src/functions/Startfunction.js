export function NaviGate(navigation,to) {
        navigation.navigate(to)
}
export function exitApp(BackHandler, platform) {
        if(platform == 'ios') {
            BackHandler.exitApp(9)
        } else if(platform == 'android') {
            BackHandler.exitApp();
        }
}