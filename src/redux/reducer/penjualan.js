import {GET_PENJUALAN, ADD_PENJUALAN, EDIT_PENJUALAN, GET_PENJUALAN_BY_NOTA, DELETE_PENJUALAN} from '../type/penjualan';

const initialState = {
  penjualan: [],
  penjualanByNota: [],
  message:'',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PENJUALAN:
      return {
        ...state,
        penjualan: action.payload,
      };
    case GET_PENJUALAN_BY_NOTA:
      return {
        ...state,
        penjualanByNota: action.payload,
      };
    case ADD_PENJUALAN:
      return {
        ...state,
        message: action.payload.message,
      };
    case EDIT_PENJUALAN:
      return {
        ...state,
        message: action.payload.message,
      };
    case DELETE_PENJUALAN:
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
