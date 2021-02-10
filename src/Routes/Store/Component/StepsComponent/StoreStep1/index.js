import styles from "./styles";
import React, { Component } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import ListView from "./ListView/index";
import TextViewStoreStep1 from "./TextViewStoreStep1/index";
import ButtonView from "./ButtonView/index";

export default class index extends Component {
  render() {
   // console.log("Data ==>>", this.props.data);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextViewStoreStep1 />
          <ListView
            data={this.props.data}
            setCountStoreStep1={this.props.setCountStoreStep1}
            setCountDecrementStoreStep1={this.props.setCountDecrementStoreStep1}
          />

          <ButtonView
            label={"Place Order"}
            onPress={() => this.props.storeData()}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
