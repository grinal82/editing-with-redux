import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../store/reducer'


const DisplayFC = () => {
  // достаем данные из store
  const items = useSelector(state => state.itemsReducer.items);
  // инициализируем dispatch
  const dispatch = useDispatch();
  const handleEdit = (index, service, cost) => {
    dispatch(editItem({index, service, cost}));
  };
  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <div className='items-wrapper'>
      {items.map((item, index) => (
        <div key={index}>
          <span className='item'>{item.service} - {item.cost}</span>
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
