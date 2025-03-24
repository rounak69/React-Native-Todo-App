import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {useFonts} from 'expo-font'
import logo from '../assets/images/icon.png'
import { screenHeight, screenWidth } from '../utils/Constants';
import {resetAndNavigate} from '../utils/Helpers'


const Main = () => {

  const [loaded, error] = useFonts({

    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect (()=>{
    if(loaded && !hasNavigated && !error){

      const timeoutId = setTimeout(() =>{
        resetAndNavigate("/home");
      },1000);
      
      return () => clearTimeout(timeoutId);
    }
  },[loaded,hasNavigated])


  return (
    <View style = {styles.container}>
      <Image source={logo} style={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  
  img:{
    width:screenWidth * 0.3,
    height:screenHeight* 0.12, 
  },
});


export default Main
