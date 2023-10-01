import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cancelEdit, editItemSubmit, filterItems, filterItemsReset } from '../store/reducer'

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
    if (editingItem!==null) {
      setService(editingItem.service);
      setCost(editingItem.cost);
    }
  },[editingItem])

  const handleChange = (e) => {
    // принимаем данные из инпутов, устанавливаем локальное состояние и вызываем dispatch отвечающий за фильтр по услуге
    const { name, value } = e.target;
    if (name === 'service') {
      setService(value);
      dispatch(filterItems(value));
    } else if (name === 'cost') {
      setCost(value);
    }
  };

  const handleCancel = () => {
    // общая функция для сброса режима редактирования, фильтра и очистки инпутов
    dispatch(cancelEdit());
    dispatch(filterItemsReset())
    setService('');
    setCost('');
  };

  const handleSubmit = () => {
    if (editingItem!==null) {
      // в режиме редактирования, вызываем editItemSubmit передаем 'id' редактируемого элемента и 'service' и 'cost' из локального сотояния (туда они попали при вводе в инпут благодаря handleChange
      console.log('вызываем editItemSubmit')
      dispatch(editItemSubmit({ id: editingItem.id,  service, cost}));
    } else {
      // в режиме добавления, вызываем addItem
      dispatch(addItem({ service, cost }));
    }
    // Затем сбросываем состояние заканчиваем редактирование, сбасываем фильтр
    setService('');
    setCost('');
    dispatch(cancelEdit());
    dispatch(filterItemsReset())
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

