import { GET_BARANG } from '../type/barang'
import axios from 'axios'
import {URI} from '../../utils'

export const getBarang = () => async (dispatch) => {
    try{
        const res = await axios.get(`${URI}/barang`);
        dispatch({type: GET_BARANG, payload: res.data.data});
    }catch(e){
        console.log(e)
        dispatch({type: GET_BARANG, payload: e});
    }
  };