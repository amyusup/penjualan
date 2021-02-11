import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPenjualan, getPenjualanByNota, deletePenjualan} from '../redux/actions/penjualan';
import {Images} from '../../assets';

export default function Penjualan({navigation}) {
  const dispatch = useDispatch();
  const {penjualan, message} = useSelector((state) => state.penjualan);
  

  React.useEffect(() => {
    dispatch(getPenjualan());
  }, [message]);

  const _onEdit = async(nota, item) =>{
   await dispatch(getPenjualanByNota(nota));
    navigation.push('EditPenjualan', {id_nota:nota, id_item:item})
  }
  const _onDelete = async(nota) =>{
   await dispatch(deletePenjualan(nota));
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.kode}>
          <Text>{item.id_nota}</Text>
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
          <Text>{item.tgl}</Text>
          <Text>{item.subtotal}</Text>
        </View>
        <View style={styles.action}>
          {/* <TouchableOpacity onPress={()=>navigation.navigate('EditPenjualan',{nota:item.id_nota})}> */}
          <TouchableOpacity onPress={()=>_onEdit(item.id_nota, item.id_item)}>
            <Image source={Images.edit} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>_onDelete(item.id_nota)}>
            <Image
              source={Images.delete}
              style={{height: 25, width: 25, marginTop: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Penjualan</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddPenjualan')}>
        <Text>Tambah Data Penjualan</Text>
      </TouchableOpacity>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <FlatList
          data={penjualan}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
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
  button:{
    backgroundColor: '#1aff66',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width:200,
  }
});
