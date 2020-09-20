import React from 'react'
import {Button, View, StyleSheet } from 'react-native'

export default ({ onPressLeft, textLeft, onPressRight, textRight }) => {
    return (
        <View style={styles.panel}>
            <Button 
                title={textLeft}
                onPress={onPressLeft}
            />
            <Button 
                title={textRight}
                onPress={onPressRight}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
