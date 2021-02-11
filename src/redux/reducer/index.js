import { combineReducers } from 'redux'
import barangReducer from './barang'
import pelangganReducer from './pelanggan'
import penjualanReducer from './penjualan'
export default combineReducers({
    barang:barangReducer,
    pelanggan:pelangganReducer,
    penjualan:penjualanReducer,
})