import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'


export default function App() {
  const [pointers, setPointers] = useState([])
  const [tempPointers, setTempPointers] = useState({})
  const [displayModal, setDisplayModal] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_pointer') // new_pointer || all_pointer
  const [showPointers, setShowPointers] = useState(true)
  const [name, setName] = useState('')

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_pointer')
    setTempPointers(nativeEvent.coordinate)
    setDisplayModal(true)
  }

  const handleChangeText = text => {
    setName(text)
  }

  const displayPointers = () => setShowPointers(!showPointers)

  const displayList = () => {
    setVisibilityFilter('all_pointer')
    setDisplayModal(true)
  }

  const handleSubmit = () => {
    const newPoint = {
      name: name,
      coordinate: tempPointers
    }
    setPointers([...pointers,newPoint])
    setDisplayModal(!displayModal)
    setName('')
  }

  return (
    <View style={styles.container}>
      <Map 
        displayPointers={showPointers}
        pointers={pointers}
        longPress={handleLongPress}
      />
      <Panel 
        onPressRight={displayPointers}
        onPressLeft={displayList}
        textLeft="Lista"
        textRight="Mostrar/Ocultar"
      />
      <Modal visibility={displayModal}>
        {
          visibilityFilter === 'new_pointer'
            ?
          <View style={styles.formContainer}>
                <View style={styles.form}>
                  <Input
                    title="Nombre"
                    placeholder="Nombre del punto"
                    onChangeText={handleChangeText}
                  />
                </View>
                <Button
                  title="Aceptar"
                  onPress={handleSubmit}
                />
          </View>
          : <List 
              pointers={pointers} 
              closeModal={() => setDisplayModal(false)}
            />
        }
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formContainer: {
    padding: 15,
  },
  form: {
    marginBottom: 15
  }
});
