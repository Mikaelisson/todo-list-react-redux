import React, { useState } from "react";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";

import { Provider } from "react-redux";
import store from "./reducer/store";

// const SAVED_ITEMS = "savedItems";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
  //   if (savedItems) {
  //     setItems(savedItems);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  // }, [items]);

  // function onAddItem(text) {
  //   let item = new Item(text);

  //   setItems([...items, item]);
  //   onHideModal();
  // }

  // function onItemDeleted(item) {
  //   let filteredItems = items.filter((it) => it.id !== item.id);

  //   setItems(filteredItems);
  // }

  // function onDone(item) {
  //   let updatedItems = items.map((it) => {
  //     if (it.id === item.id) {
  //       it.done = !it.done;
  //     }

  //     return it;
  //   });

  //   setItems(updatedItems);
  // }

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className="container w-75">
      <header className="d-flex justify-content-between align-items-center">
        <h1>Todo</h1>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="btn btn-info fw-bold"
        >
          +
        </button>
      </header>

      <Provider store={store}>
        <List />
        <Modal show={showModal} onHideModal={onHideModal}>
          <TodoForm />
        </Modal>
      </Provider>
    </div>
  );
}

export default Todo;
