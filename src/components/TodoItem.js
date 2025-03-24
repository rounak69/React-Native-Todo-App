import { View, Text, StyleSheet, Modal, TextInput, TextInputComponent } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/reducers/todoSlice';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoItem = ({ item }) => {

    const [visible, setVisible] = useState(false);

    const [value, setValue] = useState(item?.title);
    const [description, setDescription] = useState(item?.desc);

    const dispatch = useDispatch();
    const deleteHandler = async () => {
        dispatch(deleteTodo({ id: item?.id }))
    };

    const onUpdate = async () => {
        dispatch(updateTodo({ id: item?.id, title: value, desc: description }));
        setVisible(false);
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.desc}>{item?.desc}</Text>
            </View>

            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="pencil-circle" size={32}

                    onPress={() => setVisible(true)}

                    color="#007AFF" />

                <FontAwesome
                    onPress={deleteHandler}
                    name="trash" size={32} color="red" />
            </View>

           
        </View>
        <Modal 
        transparent={true}
        animationType='slide'
        style={styles.mainModal} 
        visible={visible} 
        onRequestClose={() => setVisible(false)}>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>

                        <AntDesign
                            onPress={() => setVisible(false)}
                            name="closecircle" style={styles.closeIcon} size={24} color="black" />


                        <TextInput
                            placeholder="Enter your text here:"
                            value={value}
                            onChangeText={setValue}
                            style={[styles.input, styles.morePadding]}
                        />

                        <TextInput
                            placeholder="Enter your todo description: "
                            placeholderTextColor="#999"
                            value={description}
                            numberOfLines={4}
                            multiline
                            maxLength={130}
                            onChangeText={setDescription}
                            style={[styles.input, styles.minHeight]}
                        />

                        <CustomButton title='UPDATE' onPress={onUpdate} />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    mainModal: {
        position: "absolute",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        elevation: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        backgroundColor: "#f2f2f2",
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    infoContainer: {
        width: "70%",

    },
    iconContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#222"
    },
    desc: {
        fontSize: 14,
        color: "#888",
        textAlign: 'left'
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: 'center'
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

    morePadding: {
        marginTop: 20,
    },

    minHeight: {
        minHeight: 120,
        textAlignVertical: "top"
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        margin: 10,
        width: "90%"
    },
    closeIcon: {
         position: "absolute",
         top: 10,
         right: 10,
         color: "#0090B0"
    }
})


export default TodoItem