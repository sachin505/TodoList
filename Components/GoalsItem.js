import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
const GoalsItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.ListItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalsItem;
const styles = StyleSheet.create({
    ListItems: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
    }
})