import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../store/reducer'


const DisplayFC = () => {
  // достаем массив данных о всех услугах и ценах из store
  const items = useSelector(state => state.itemsReducer.items);
  // достаем строковые данные хранящиеся в filter из store
  const filter = useSelector(state => state.itemsReducer.filter);
  // фильтруем данные путем сравнения вхождения строки из фильтра в поле 'service' массива 'items',хранящегося в store
  const filteredItems = items.filter(item => item.service.toLowerCase().includes(filter.toLowerCase()));
  // инициализируем dispatch
  const dispatch = useDispatch();
  // запускаем диспечер для экшена editItem, который поменяет состояние editingItem в store
  const handleEdit = (id, service, cost) => {
    dispatch(editItem({id, service, cost}));
  };
  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId}));
  };
// если в filter есть хоть одна строка, то рендерим массив filteredItems(отфильтрованный), иначе рендерим массив items(все услуги)
  return (
    <div className='items-wrapper'>
      {filter.length>0 ? (filteredItems.map((item) => (
        <div key={item.id}>
          <span className='item'>{item.service} - {item.cost}</span>
          <span
            onClick={() => handleEdit(item.id, item.service, item.cost)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            📝
          </span>
          <span
            onClick={() => handleDelete(item.id)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            ❌
          </span>
        </div>
      ))):(items.map((item) => (
        <div key={item.id}>
          <span className='item'>{item.service} - {item.cost}</span>
          <span
            onClick={() => handleEdit(item.id, item.service, item.cost)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            📝
          </span>
          <span
            onClick={() => handleDelete(item.id)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            ❌
          </span>
        </div>)))}
    </div>
  );
};

export default DisplayFC;
