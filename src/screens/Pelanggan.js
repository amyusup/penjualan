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
import {getPelanggan} from '../redux/actions/pelanggan';
import {Images} from '../../assets';

export default function Pelanggan({navigation}) {
  const dispatch = useDispatch();
  const {pelanggan, message} = useSelector((state) => state.pelanggan);

  React.useEffect(() => {
    dispatch(getPelanggan());
  }, [message]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.kode}>
          <Text>{item.id_pelanggan}</Text>
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
          <Text>{item.jenis_kelamin}</Text>
          <Text>{item.domisili}</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity>
            <Image source={Images.edit} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
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
      <Text style={styles.title}>Data Pelanggan</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('AddPelanggan')}>
        <Text>Tambah Data Pelanggan</Text>
      </TouchableOpacity>
      <ScrollView style={{marginBottom:100, marginTop:10}}>
      <FlatList
        data={pelanggan}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_pelanggan.toString()}
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
