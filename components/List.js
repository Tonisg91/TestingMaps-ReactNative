import React from 'react'
import { StyleSheet, FlatList, Text, View, Button, Dimensions } from 'react-native'

export default ({pointers, closeModal}) => {
    const names = pointers.map(e => e.name)

    const listElement = (data) => (
        <View style={styles.listElement}>
            <Text>{data}</Text>
        </View>
    )


    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={names}
                    renderItem={({ item }) => listElement(item)}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button
                    color='lightgray'
                    title='Cerrar'
                    onPress={closeModal}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        alignItems: 'center',
    },
    list: {
        height: Dimensions.get('window').height - 250,
    },
    listElement: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    },
})
