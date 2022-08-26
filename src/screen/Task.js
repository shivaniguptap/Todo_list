import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
const { width, height } = Dimensions.get('window')

const Task = () => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [editing, setEditing] = useState(false)


    const handleAddTask = (value) => {
        const newTask = [{ key: value, value: value, isComplete: false }, ...taskItems]
        setTaskItems(newTask)
        setTask()
    }
    const handelDelete = (value) => {
        let index = taskItems.indexOf(value)
        setTaskItems([
            ...taskItems.slice(0, index),
            ...taskItems.slice(index + 1, taskItems.length)
        ])
    }
    const handelIsComplete = (item, status) => {
        let index = taskItems.indexOf(item)
        setTaskItems([
            ...taskItems.slice(0, index),
            ...taskItems.slice(index + 1, taskItems.length),
            { key: item.value, value: item.value, isComplete: status }
        ])
    }

    const handelEdit = (value) => {

        let index = taskItems.forEach(value)
        setTaskItems([
            ...taskItems.push(0, index),
            ...taskItems.push(index + 1, taskItems.length),
            
        ])

    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>TinyList</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <Text style={styles.addText}>+</Text>
                <TextInput
                    placeholderTextColor='red'
                    style={styles.input}
                    placeholder={'Add to list...'}
                    value={task}
                    onChangeText={text => setTask(text)}
                    onSubmitEditing={() => handleAddTask(task)}
                />
            </KeyboardAvoidingView>
            <View style={styles.addWrapper} />
            <View style={styles.viewstyle}>
                {taskItems.map((item, index) => {
                    return <TouchableOpacity key={index} style={styles.opacity} 
                    // onPress={() => handelEdit(item)}
                    >
                        {item.isComplete ?
                            <TouchableOpacity
                                onPress={() => handelIsComplete(item, false)}
                            >
                                <AntDesign name='checksquare' style={styles.iconStyle1} />
                            </TouchableOpacity>
                            : <TouchableOpacity
                                onPress={() => handelIsComplete(item, true)}
                            >
                                <Fontisto name='checkbox-passive' size={15} style={styles.iconStyle} />
                            </TouchableOpacity>
                        }
                        <Text style={{ color: 'red', fontSize: 15, flex: 3, marginLeft: 5, textDecorationLine: item.isComplete ? 'line-through' : 'none' }} >{item.value}</Text>
                        <TouchableOpacity onPress={() => handelDelete(item)} style={styles.opacity1}>
                            <AntDesign name='delete' size={20} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                })}
            </View>

        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: { height: height, backgroundColor: '#fff' },

    header: {
        backgroundColor: '#ff471a', height: height * 0.08,
        alignItems: 'center', justifyContent: 'center'
    },

    textStyle: { color: '#ffff', fontSize: 15, fontWeight: 'bold' },

    writeTaskWrapper: {
        paddingTop: 50, paddingHorizontal: 16,
        position: 'absolute', flexDirection: 'row', alignItems: 'center'
    },

    input: {
        paddingVertical: 15, paddingHorizontal: 15,
        width: width * 0.8, color: 'red'
    },

    addWrapper: {
        width: width * 0.88, borderColor: '#C0C0C0', borderWidth: 0.2,
        position: 'absolute', marginLeft: 20, marginTop: 100
    },

    addText: { fontSize: 20, color: 'red' },

    icons: { paddingRight: 10 },

    iconStyle: { color: 'gray' },

    iconStyle1: { color: '#ff471a', fontSize: 15 },

    opacity: { flexDirection: 'row', alignItems: 'center' },

    opacity1: { marginHorizontal: 20 },

    viewstyle: { marginTop: 50, marginLeft: 16 },
})
