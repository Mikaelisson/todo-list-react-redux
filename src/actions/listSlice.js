import { createSlice } from "@reduxjs/toolkit";
import Item from "../components/Item";

export const listSlice = createSlice({
  name: "todo",
  initialState: [{ id: 5, text: "teste", done: true }],

  reducers: {
    addItem: (state, { payload }) => {
      let item = new Item(payload);
      let it = { id: item.id, text: item.text, done: item.done };
      return [...state, it];
    },
    deleteItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    changeDone: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const { addItem, deleteItem, changeDone } = listSlice.actions;

export default listSlice.reducer;
