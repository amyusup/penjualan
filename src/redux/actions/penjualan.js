import { GET_PENJUALAN, ADD_PENJUALAN, EDIT_PENJUALAN, GET_PENJUALAN_BY_NOTA,DELETE_PENJUALAN } from '../type/penjualan'
import axios from 'axios'
import {URI} from '../../utils'
import { ToastAndroid } from 'react-native';

export const getPenjualan = () => async (dispatch) => {
    try{
        const res = await axios.get(`${URI}/penjualan`);
        dispatch({type: GET_PENJUALAN, payload: res.data.data});
    }catch(e){
        console.log(e)
        // dispatch({type: GET_PENJUALAN, payload: e});
    }
  };
export const getPenjualanByNota = (nota) => async (dispatch) => {
    try{
        const res = await axios.get(`${URI}/penjualan/${nota}`);
        dispatch({type: GET_PENJUALAN_BY_NOTA, payload: res.data.data});
    }catch(e){
        console.log(e)
        // dispatch({type: GET_PENJUALAN, payload: e});
    }
  };

  export const addPenjualan = (data) => async (dispatch) => {
    try {
      const res = await axios.post(`${URI}/penjualan`, data);
      dispatch({type: ADD_PENJUALAN, payload: res.data.data});
      ToastAndroid.show(
          `Data penjualan berhasil ditambahkan`,
          ToastAndroid.SHORT,
      );
    } catch (e) {
      console.log(e);
    }
  };
  export const editPenjualan = (data) => async (dispatch) => {
    try {
      dispatch({type: EDIT_PENJUALAN, payload: ''});
      const res = await axios.patch(`${URI}/penjualan`, data);
      dispatch({type: EDIT_PENJUALAN, payload: res.data.data});
      ToastAndroid.show(
          `Data penjualan berhasil diubah`,
          ToastAndroid.SHORT,
      );
    } catch (e) {
      console.log(e);
    }
  };
  export const deletePenjualan = (nota) => async (dispatch) => {
    try {
      const res = await axios.delete(`${URI}/penjualan/${nota}`);
      dispatch({type: DELETE_PENJUALAN, payload: res.data.data});
      ToastAndroid.show(
          `Data penjualan berhasil dihapus`,
          ToastAndroid.SHORT,
      );
    } catch (e) {
      console.log(e);
    }
  };
  