import styles from "./styles";
import React, { Component } from "react";
import { View, LogBox } from "react-native";
import ListView from "./Component/UI/ListView/";
import Modal from "./Component/UI/Modal/index";
import TextView from "./Component/UI/TextView/index";
import ButtonComponent from "./Component/UI/Button/index";
import StoreStep1 from "./Component/StepsComponent/StoreStep1/index";
LogBox.ignoreAllLogs();
//let data = [];

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      count: 1,
      data: [],
      priceControl: "",
      isModalVisable: false,
      isSelected: 1,
      textSelected: 1,
    };
  }

  setModal = async () => {
    this.setState({ isModalVisable: !this.state.isModalVisable, count: 1 });
  };
  getItem = async (item) => {
    this.setState({
      id: item.id,
      name: item.name,
      price: item.price,
      isModalVisable: !this.state.isModalVisable,
    });
  };
  setCountStoreStep1 = async (index) => {
    let data = this.state.data[index];
    let count = data.count + 1;
    let priceControl = data.priceControl + parseInt(data.price);
    data.count = count;
    data.priceControl = priceControl;
    this.state.data[index] = data;
    this.setState({ data: this.state.data });
    // console.log('zia', this.state.data);
  };

  setCountDecrementStoreStep1 = async (index) => {
    console.log("decrement", index);
    let data = this.state.data[index];
    let count = data.count - 1;
    let priceControl = data.priceControl - parseInt(data.price);
    data.count = count;
    data.priceControl = priceControl;
    this.state.data[index] = data;
    this.setState({ data: this.state.data });
  };

  setCount = async () => {
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count + 1,
    }));
    this.setState({
      priceControl: parseInt(this.state.price.toString()) * this.state.count,
    });
  };
  setCountDecrement = async () => {
    if (this.state.count <= 1) {
      this.setState({
        count: 1,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        priceControl:
          parseInt(this.state.priceControl) - parseInt(this.state.price),
      });
    }
  };

  storeData = async () => {
    //console.log("this.state.data", this.state.data);
    this.setState({ data: this.state.data });
    this.setState({ isSelected: 2 });
  };

  getItemValue = async () => {
    const id = this.state.id;
    const name = this.state.name;
    const price = this.state.price;
    const count = this.state.count - 1;
    const priceControl = this.state.priceControl;

    const obj = {
      id: id,
      name: name,
      price: price,
      count: count,
      priceControl: priceControl,
    };
    this.state.data.push(obj);
    this.setState({
      isModalVisable: !this.state.isModalVisable,
      count: 1,
      priceControl: 1,
    });
  };

getTotalPrice = async() =>{
  console.log('getprice');

}

  render() {
    let {
      name,
      count,
      isModalVisable,
      price,
      priceControl,
      isSelected,
      data,
    } = this.state;
   // console.log("XXX", data);
    return (
      <View style={styles.mainContainer}>
        {isSelected == 1 && <TextView />}
        <Modal
          title={name}
          price={price}
          count={count}
          priceControl={priceControl}
          isCancle={true}
          setModal={this.setModal}
          getItemValue={this.getItemValue}
          setCount={this.setCount}
          isModalVisable={isModalVisable}
          setCountDecrement={this.setCountDecrement}
        />
        {isSelected == 1 && (
          <ListView getItem={this.getItem} setModal={this.setModal} />
        )}

        {isSelected == 2 && (
          <StoreStep1
            setCountStoreStep1={this.setCountStoreStep1}
            data={data}
            storeData={this.storeData}
            getTotalPrice={this.getTotalPrice}
            setCountDecrementStoreStep1={this.setCountDecrementStoreStep1}
          />
        )}
        {isSelected == 1 && (
          <ButtonComponent
            label={"Place Order"}
            onPress={() => this.storeData()}
          />
        )}
      </View>
    );
  }
}

export default Store;
