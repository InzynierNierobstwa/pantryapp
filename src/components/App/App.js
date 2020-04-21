import React from "react";
import Header from "../Header/Header";
import InputRow from "../InputRow/InputRow";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

const initialItems = [
  {
    product: "mąka",
    amount: 3,
    unit: "kg",
    category: "sypkie",
    place: "spiżarnia",
  },
  {
    product: "kasza",
    amount: 1,
    unit: "kg",
    category: "sypkie",
    place: "spiżarnia",
  },
  {
    product: "czekolada",
    amount: 2,
    unit: "szt",
    category: "słodkie",
    place: "spiżarnia",
  },
];

class App extends React.Component {
  state = {
    product: [...initialItems],
  };

  addItem = (event) => {
    event.preventDefault();

    const newItem = {
      product: event.target[0].value,
      amount: event.target[1].value,
      unit: event.target[2].value,
      category: event.target[3].value,
      place: event.target[4].value,
    };

    this.setState((prevState) => ({
      product: [...prevState.product, newItem],
      showModal: false,
    }));
  };

  deleteItem = (event) => {
    event.preventDefault();
    console.log("delete");
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Table product={this.state.product} deleteFn={this.deleteItem} />
        <Footer />
      </div>
    );
  }
}

export default App;
