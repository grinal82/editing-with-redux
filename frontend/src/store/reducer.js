import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { service, cost } = action.payload;
      const newItem = { service, cost };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    editItem: (state, action) => {
      const { index, service, cost } = action.payload;
      state.items[index] = { service, cost };
    },
  },
});

export const { addItem, deleteItem, editItem } = itemsSlice.actions;

export default itemsSlice.reducer;
