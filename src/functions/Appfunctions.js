export function SearchInput(search, Intense_Search,site,navigation) {
    if(search.length > 0) {
        navigation.navigate('Searcher', {search, Intense_Search,site})
    } else {
        alert('Please Enter Something')
    }
}

export function ClearSearch(setSearch) {
    setSearch('')
}

export function CheckBoxTicker(searchType,setSearchType,OtherSearchType) {
    if(searchType == false) {
        setSearchType(true);
        OtherSearchType(false);
    } else {
        setSearchType(false);
        OtherSearchType(true);
    }
}

export function openDevURL(Linking,URL) {
    Linking.openURL(URL)
}