import { createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [], /* массив для хранения основных данных */
    editingItem: null,/* поле (массив) для хранения данных редактируемого элемента */
    filter:'' /* фильтр - строка */
  },
  reducers: {
    addItem: (state, action) => {
      const { service, cost } = action.payload;
      const newItem = { id: new Date().toISOString(), service, cost };
      state.items.push(newItem);
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      const updatedItems = state.items.filter(item => {
        return item.id !== id;
      });
      return {
        ...state,
        items: updatedItems
      };
    },
    editItem: (state, action) => {
      // собираем новый массив для редактируемого элемента
      const editingItem = { ...action.payload };
      return {
        ...state,
        // сохраняем редактируемый элемент
        editingItem: editingItem
      };
    },

    editItemSubmit: (state, action) => {
      const { id, service, cost } = action.payload;
      // Мэпимся по массиву и находим нужный элемент сравнивая id эдемента и id прилетевший в payload
      const updatedItems = state.items.map(item => {
        if (item.id === id) {
          // возвращаем новый элемент с измененными данными
          return { ...item, service, cost };
        }
        return item;
      });
      //  возвращаем обновленный массив
      return { ...state, items: updatedItems };
    },

    cancelEdit: (state) =>{
      // Сброс состояния при нажатии на Cancel в режиме редактирования
      state.editingItem = null
    },

    filterItems: (state, action) => ({
      // добавляем в фильтр строковые данные прилетевшие из поля ввода услуги
      ...state,
      filter: action.payload
    }),
    
    filterItemsReset(state) {
      // Вспомогательная функция для очистки фильтра
      return {
        ...state,
        filter: ''
      };
    }
}});
// экспортируем созданные экшены для вызова в компонентах через использование dispatch
export const { addItem, deleteItem, editItem,editItemSubmit, cancelEdit, filterItems, filterItemsReset } = itemsSlice.actions;

export default itemsSlice.reducer;
