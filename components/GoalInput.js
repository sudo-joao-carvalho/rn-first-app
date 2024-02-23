import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const handleGoalInput = (text) => {
        if(text.length === 0) return;
        
        setEnteredGoal(text);
    }

    const addGoalHandler = () => {
        props.addGoalHandler.bind(this, enteredGoal)
        setEnteredGoal("");
    }

    return(
        <Modal 
            visible={props.isModalVisible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal' 
                    style={styles.input}
                    onChangeText={handleGoalInput}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="CANCEL"
                            color="red"
                            onPress={() => props.onCancel(false)}
                        />
                    </View>
                    
                    <View style={styles.button}>
                        <Button 
                            title="ADD"
                            onPress={addGoalHandler} //or anonymous function
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
    button: {
        width: "40%",
    }
});

export default GoalInput;
