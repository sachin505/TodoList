import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')


    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <Modal visible={props.modalValue} animationType="slide">
            <View style={styles.intputContainer}>
                <TextInput placeholder="Course Goals" style={styles.intput} onChangeText={inputHandler} value={enteredGoal} onPress={props.delete} />

                <View style={styles.Buttons}><Button title="Add" onPress={addGoalHandler} />

                    <Button title="Cancel" color="red" style={{ marginBottom: 10 }} onPress={props.onCancel} /></View>

            </View></Modal>);
}
export default GoalInput;
const styles = StyleSheet.create({
    intputContainer: {
        //flexDirection: "row",
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,

    },
    intput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        width: '70%',
        marginBottom: 10,
    },
    Buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60 %"

    }
})