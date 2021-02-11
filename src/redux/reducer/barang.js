import {GET_BARANG} from '../type/barang.js';

const initialState = {
  barang: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BARANG:
      return {
        ...state,
        barang: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
