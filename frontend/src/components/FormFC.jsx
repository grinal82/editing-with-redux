import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/actions'; 

const FormFC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    service: '',
    cost: '',
  });

  const handleSubmit = () => {
    console.log('Нажата кнопка "Сохранить"');
    console.log('Сохраняем данные:', formData.service, formData.cost);
    setFormData({
      service: formData.service,
      cost: formData.cost,
    })
    dispatch(addItem(formData));
    setFormData({
      service: '',
      cost: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='input-form'>
      <input
        type="text"
        placeholder="Услуга"
        name="service"
        value={formData.service}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Стоимость"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Сохранить</button>
    </div>
  );
};

export default FormFC;

