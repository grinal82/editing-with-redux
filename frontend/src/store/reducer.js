import { createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    editingItem: null /* поле для хранения данных редактируемого элемента */
  },
  reducers: {
    addItem: (state, action) => {
      const { service, cost } = action.payload;
      const newItem = { service, cost };
      state.items.push(newItem);
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    editItem: (state, action) => {
      const { index, service, cost } = action.payload;
      // создаем копию массива
      const updatedItems = [...state.items];
      // заменяем элемент
      updatedItems[index] = { service, cost };
      // собираем новый массив
      const editingItem = { ...action.payload };
      
      return {
        ...state,
        // приравниваем новый массив к старому
        items: updatedItems,
        // сохраняем редактируемый элемент
        editingItem: editingItem
      };
    },

    cancelEdit: (state) =>{
      // Сброс состояния
      state.editingItem = null
    }
  },
});
// экспортируем созданные экшены для вызова в компонентах через использование dispatch
export const { addItem, deleteItem, editItem, cancelEdit } = itemsSlice.actions;

export default itemsSlice.reducer;
