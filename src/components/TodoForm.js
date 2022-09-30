import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/listSlice";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  function hadleChange(event) {
    let text = event.target.value;
    setText(text);
  }

  function addItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addItem(text));
      setText("");
    }
  }

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={hadleChange}
          value={text}
        ></input>
        <button className="btn btn-light" type="button" onClick={addItemEvent}>
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
