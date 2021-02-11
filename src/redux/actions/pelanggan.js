import {GET_PELANGGAN, ADD_PELANGGAN} from '../type/pelanggan';
import axios from 'axios';
import {URI} from '../../utils';
import { ToastAndroid } from 'react-native';

export const getPelanggan = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/pelanggan`);
    dispatch({type: GET_PELANGGAN, payload: res.data.data});
  } catch (e) {
    console.log(e);
  }
};

export const addPelanggan = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/pelanggan`, data);
    dispatch({type: ADD_PELANGGAN, payload: res.data.data});
    ToastAndroid.show(
        `Data pelanggan berhasil ditambahkan`,
        ToastAndroid.SHORT,
    );
  } catch (e) {
    console.log(e);
  }
};
