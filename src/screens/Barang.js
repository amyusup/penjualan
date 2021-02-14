import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
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
      // <View style={styles.dataTable}>
      //   <Text style={styles.flexdata1}>{item.kode}</Text>
      //   <Text style={styles.flexdata1}>{item.nama}</Text>
      //   <Text style={styles.flexdata1}>{item.kategori}</Text>
      //   <Text style={styles.flexdata1}>{item.harga}</Text>
      // </View>
      <View style={styles.card}>
        <View style={styles.kode}>
          <Text>{item.kode}</Text>
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
          <Text>{item.kategori}</Text>
          <Text>{item.harga}</Text>
        </View>
        <View style={styles.action}>
          {/* <TouchableOpacity onPress={()=>navigation.navigate('EditPenjualan',{nota:item.id_nota})}> */}
          {/* <TouchableOpacity onPress={()=>_onEdit(item.id_nota, item.id_item)}>
            <Image source={Images.edit} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>_onDelete(item.id_nota)}>
            <Image
              source={Images.delete}
              style={{height: 25, width: 25, marginTop: 10}}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleTable}>Data Barang</Text>
     
        {/* <View style={styles.dataTable}>
          <Text style={styles.flex1}>KODE</Text>
          <Text style={styles.flex1}>NAMA</Text>
          <Text style={styles.flex1}>KATEGORI</Text>
          <Text style={styles.flex1}>HARGA</Text>
        </View> */}
        <FlatList
          data={barang}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
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
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    flexDirection: 'row',
  },
  title: {fontSize: 18, marginVertical: 20},
  kode: {
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  data: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'column',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
});
