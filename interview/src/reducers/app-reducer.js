export const initialState = {
};

export const appReducer = (state, action) => {
  if (action.type == 'reset') {
    return action.payload;
  } else {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };
};
