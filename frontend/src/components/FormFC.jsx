import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cancelEdit, editItem } from '../store/reducer'

const FormFC = () => {
  // инициализируем dispatch
  const dispatch = useDispatch();
  // инициализируем состояние
  const [service, setService] = useState('');
  const [cost, setCost] = useState('');
  // получаем данные о редактируемом элементе из store
  const editingItem = useSelector(state => state.itemsReducer.editingItem);
  // запускаем useEffect для обновления локального состояния при изменении editingItem
  useEffect(() => {
    if (editingItem) {
      setService(editingItem.service);
      setCost(editingItem.cost);
    }
  },[editingItem])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'service') {
      setService(value);
    } else if (name === 'cost') {
      setCost(value);
    }
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  const handleSubmit = () => {
    if (editingItem) {
      // в режиме редактирования, вызываем editItem
      dispatch(editItem({ index:editingItem.index, service, cost}));
    } else {
      // в режиме добавления, вызываем addItem
      dispatch(addItem({ service, cost }));
    }
    // Затем сбросываем состояние и закончиваем редактирование
    setService('');
    setCost('');
    dispatch(cancelEdit());
  };
  
  // с помощью тернарного оператора проверяем, есть ли редактируемый элемент и рендерим тот или иной вариант формы
  return (
    <>
      {editingItem===null ? (
        <div className='input-form'>
          <input
            type="text"
            placeholder="Услуга"
            name="service"
            value={service}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Стоимость"
            name="cost"
            value={cost}
            onChange={handleChange}
          />
        <button onClick={handleSubmit}>Сохранить</button>
        </div>) : (
        <div className='input-form'>
          <input
            type="text"
            placeholder="Услуга"
            name="service"
            value={service}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Стоимость"
            name="cost"
            value={cost}
            onChange={handleChange}
          />
        <button onClick={handleSubmit}>Сохранить</button>
        <button id='delete-btn' onClick={handleCancel}>Отменить</button>
      </div>
      )}
    </>
  )
};

export default FormFC;

