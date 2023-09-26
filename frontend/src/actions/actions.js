export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const addItem = (item) => {
  console.log("Adding item:", item);
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: index,
});

export const editItem = (index, service, cost) => ({
  type: EDIT_ITEM,
  payload: { index, service, cost },
});
