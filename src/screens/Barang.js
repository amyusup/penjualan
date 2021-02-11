import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getBarang} from '../redux/actions/barang';

export default function Barang() {
  const dispatch = useDispatch();
  const {barang} = useSelector((state) => state.barang);

  React.useEffect(() => {
    dispatch(getBarang());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.dataTable}>
        <Text style={styles.flexdata1}>{item.kode}</Text>
        <Text style={styles.flexdata1}>{item.nama}</Text>
        <Text style={styles.flexdata1}>{item.kategori}</Text>
        <Text style={styles.flexdata1}>{item.harga}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleTable}>Data barang</Text>
     
        <View style={styles.dataTable}>
          <Text style={styles.flex1}>KODE</Text>
          <Text style={styles.flex1}>NAMA</Text>
          <Text style={styles.flex1}>KATEGORI</Text>
          <Text style={styles.flex1}>HARGA</Text>
        </View>
        <FlatList
          data={barang}
          renderItem={renderItem}
          keyExtractor={(item) => item.kode}
        />
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
  dataTable: {
    // flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'grey',
    width: '100%',
    paddingVertical: 10,
  },
  titleTable: {fontSize: 18, marginVertical: 20},
  flex1: {fontWeight: 'bold', color: 'grey', flex: 1},
  flexdata1: {color: 'black', flex: 1},
});
