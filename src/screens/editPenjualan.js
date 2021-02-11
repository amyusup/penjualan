import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {editPenjualan} from '../redux/actions/penjualan';
import {getBarang} from '../redux/actions/barang';
import {getPelanggan} from '../redux/actions/pelanggan';
export default function AddPenjualan({navigation, route}) {
  const {barang} = useSelector((state) => state.barang);
  const {pelanggan} = useSelector((state) => state.pelanggan);
  const {penjualanByNota} = useSelector((state) => state.penjualan);
  const [pelanggan1, setPelanggan1] = useState(penjualanByNota[0].kode_pelanggan);
  const [barang1, setBarang1] = useState(penjualanByNota[0].kode_barang);
  const [barang2, setBarang2] = useState(penjualanByNota[1].kode_barang);
  const { id_nota, id_item } = route.params;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBarang());
    dispatch(getPelanggan());
    // dispatch(getPenjualanByNota(nota));
    console.log(id_item)
  },[]);

  const _onSubmit = () => {
    dispatch(editPenjualan({pelanggan1, barang1, barang2, id_nota, id_item}));
    // navigation.navigate('Penjualan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Edit Data Penjualan</Text>
        <View
          style={styles.dropdown}>
          <Picker
            selectedValue={pelanggan1}
            onValueChange={(itemValue) => setPelanggan1(itemValue)}>
            <Picker.Item label="Pelanggan" value="" />
            {pelanggan.map((item, index) =>{
              return(
              <Picker.Item label={item.nama} value={item.id_pelanggan} key={index}/>
              )
            }) 
            }
          </Picker>
        </View>
        <View
          style={styles.dropdown}>
          <Picker
            selectedValue={barang1}
            onValueChange={(itemValue) => setBarang1(itemValue)}>
            <Picker.Item label="Barang 1" value="" />
            {barang.map((item, index) =>{
              return(
              <Picker.Item label={item.nama} value={item.kode} key={index}/>
              )
            }) 
            }
          </Picker>
        </View>
        <View
          style={styles.dropdown}>
          <Picker
            selectedValue={barang2}
            onValueChange={(itemValue) => setBarang2(itemValue)}>
            <Picker.Item label="Barang 2" value="" />
            {barang.map((item, index) =>{
              return(
              <Picker.Item label={item.nama} value={item.kode} key={index}/>
              )
            }) 
            }
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => _onSubmit()}>
          <Text>Simpan Perubahan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  title: {fontSize: 18, marginVertical: 20},
  button: {
    backgroundColor: '#a6a6a6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
  },
  dropdown:{
    height: 50,
    borderBottomWidth: 1.3,
    borderBottomColor: '#a6a6a6',
  }
});
