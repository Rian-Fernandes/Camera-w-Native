import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaViewBase } from 'react-native';
import { Camera } from 'expo-camera'

export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect (() =>{
    (async () =>{
      const {status} = await Camera.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  if(hasPermission === null){
    return <View/>
  }

  if(hasPermission === false){
    return <Text>Acesso negado</Text>
  }
  
  return (
    <SafeAreaViewBase style={styles.container}>
      <Camera
      type={type}
      style={styles.camera}
      ></Camera>
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera:{
    width:"100%",
    height:"100%",
  }
});
