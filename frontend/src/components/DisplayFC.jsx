import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../actions/actions'

const DisplayFC = () => {
  const items = useSelector((state) => state.myReducer.items);
  console.log(items);
  const [editIndex, setEditIndex] = useState(null);
  const [editedService, setEditedService] = useState('');
  const [editedCost, setEditedCost] = useState('');

  const dispatch = useDispatch();

  const handleEdit = (index, service, cost) => {
    setEditIndex(index);
    setEditedService(service);
    setEditedCost(cost);
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.service} - {item.cost}</span>
          <span
            onClick={() => handleEdit(index, item.service, item.cost)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            📝
          </span>
          <span
            onClick={() => handleDelete(index)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            ❌
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayFC;
