import {GET_PELANGGAN, ADD_PELANGGAN} from '../type/pelanggan';

const initialState = {
  pelanggan: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PELANGGAN:
      return {
        ...state,
        pelanggan: action.payload,
      };
    case ADD_PELANGGAN:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return {
        ...state,
      };
  }
};
