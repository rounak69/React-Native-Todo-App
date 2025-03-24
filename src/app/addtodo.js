import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';
import {useDispatch} from "react-redux";
import { addTodo } from '../redux/reducers/todoSlice';
import { router } from 'expo-router';

const AddTodo = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async () => {
    if(value.trim() == "" || description.trim() == ""){
      Alert.alert("Please Enter Something!");
      return;
    }
    dispatch(addTodo({title: value, desc: description}));
    router.back();
  };

  return (
    <View style={styles.container}>
      <CustomHeader title='Add New Todo' isBackButton={true} />
      
      <TextInput placeholder="Enter your text here:"
        value={value}
        onChangeText={setValue}
        style={[styles.input,styles.morePadding]}
      />

      <TextInput placeholder="Enter your todo description: "
        placeholderTextColor="#999"
        value={description}
        numberOfLines={4}
        multiline
        maxLength={130}
        onChangeText={setDescription}
        style={[styles.input,styles.minHeight]}
      />

      <CustomButton title='ADD'  onPress={onSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18
  },

  morePadding:{
    marginTop: 20,
  },
  
  minHeight:{
    minHeight: 120,
    textAlignVertical:"top"
  }
})
export default AddTodo