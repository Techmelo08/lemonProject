import styles from "./styles";
import React from "react";
import { Text, TouchableOpacity,View } from "react-native";

const ButtonView = (props) => {
  return (
    <View>
      <View style={styles.totalViewContaier}>
        <Text>total</Text>
      </View>

    <TouchableOpacity 
    onPress={()=>props.onPress()}
    style={styles.buttonContainer}>
      <Text style={styles.labelContainer}>{props.label}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default ButtonView;
