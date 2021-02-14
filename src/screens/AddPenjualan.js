import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Picker,
  FlatList,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPenjualan} from '../redux/actions/penjualan';
import {getBarang} from '../redux/actions/barang';
import {getPelanggan} from '../redux/actions/pelanggan';
export default function AddPenjualan({navigation}) {
  const {barang} = useSelector((state) => state.barang);
  const {pelanggan} = useSelector((state) => state.pelanggan);
  const [pelanggan1, setPelanggan1] = useState('');
  const [barang1, setBarang1] = useState('');
  const [barang2, setBarang2] = useState('');
  const [arrBarang, setArrBarang] = useState([{barang: ''}]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBarang());
    dispatch(getPelanggan());
  }, []);

  const handleInputArrBarang = (index, itemValue) => {
    const values = [...arrBarang];
    values[index].barang = itemValue;

    setArrBarang(values);
  };

  const handleAddFields = () => {
    const values = [...arrBarang];
    values.push({barang: ''});
    setArrBarang(values);
  };

  const handleRemoveFields = (indexBarang) => {
    const values = [...arrBarang];
    values.splice(indexBarang, 1);
    setArrBarang(values);
  };

  const _onSubmit = () => {
    dispatch(addPenjualan({pelanggan1, arrBarang}));
    // dispatch(addPenjualan({pelanggan1, barang1, barang2}));
    // navigation.navigate('Penjualan');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Tambah Data Penjualan</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={pelanggan1}
            onValueChange={(itemValue) => setPelanggan1(itemValue)}>
            <Picker.Item label="Pelanggan" value="" />
            {pelanggan.map((item, index) => {
              return (
                <Picker.Item
                  label={item.nama}
                  value={item.id_pelanggan}
                  key={index}
                />
              );
            })}
          </Picker>
        </View>
        {arrBarang.map((itemBarang, indexBarang) => (
          <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
            <View style={styles.dropdown} key={indexBarang}>
              <Picker
                selectedValue={itemBarang.barang}
                onValueChange={(itemValue) => handleInputArrBarang(indexBarang, itemValue)}>
                <Picker.Item label="Barang " value="" />
                {barang.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.nama}
                      value={item.kode}
                      key={index}
                    />
                  );
                })}
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.buttonBarang}
              onPress={() => handleAddFields()}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonBarang}
              onPress={() => handleRemoveFields(indexBarang)}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* <Text>{JSON.stringify(arrBarang, null, 2)}</Text> */}

        {/* <View
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
        </View> */}
        <TouchableOpacity style={styles.button} onPress={() => _onSubmit()}>
          <Text>Tambah Data Penjualan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  buttonBarang: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#a6a6a6',
    borderWidth:1,
    flex:1,
    marginTop:10,
    height: 40,
  },
  dropdown: {
    height: 50,
    borderBottomWidth: 1.3,
    borderBottomColor: '#a6a6a6',
    flex:6
  },
});
