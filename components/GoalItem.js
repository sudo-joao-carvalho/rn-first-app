import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.handleRemoveGoal(props.goal.key)}
        >
            <View
                style={styles.listItem}
            >
                <Text>
                    {props.goal.value}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    },
});

export default GoalItem;