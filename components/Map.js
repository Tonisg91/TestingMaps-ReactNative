import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default ({longPress, pointers, displayPointers}) => {

    const displayMarkers = pointers.map(e => (
        <Marker key={e.name} coordinate={e.coordinate}/>
    ))

    return (
        <MapView
            style={styles.map}
            onLongPress={longPress}
        >
            { displayPointers ? displayMarkers : null}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width
    },
})
