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
import { addPelanggan } from '../redux/actions/pelanggan'
import Input from '../components/input';
export default function AdddPelanggan({navigation}) {
  const [nama, setNama] = useState('');
  const [domisili, setDomisili] = useState('');
  const [jk, setJk] = useState('');

  const dispatch = useDispatch();

 const _onSubmit = () =>{
   dispatch(addPelanggan({nama, domisili, jenis_kelamin:jk}))
  //  navigation.navigate('Pelanggan')
 }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Tambah Data Pelanggan</Text>
        <Input
          value={nama}
          onChangeText={(text) => setNama(text)}
          placeholder="Nama"
          returnKeyType="next"
          autoCapitalize="none"
        />
        <Input
          value={domisili}
          onChangeText={(text) => setDomisili(text)}
          placeholder="Domisili"
          returnKeyType="next"
          autoCapitalize="none"
        />
        <View
          style={{
            height: 50,
            borderBottomWidth: 1.3,
            borderBottomColor: '#a6a6a6',
          }}>
          <Picker
            selectedValue={jk}
            onValueChange={(itemValue) => setJk(itemValue)}>
            <Picker.Item label="Jenis Kelamin" value="" />
            <Picker.Item label="Pria" value="PRIA" />
            <Picker.Item label="Wanita" value="WANITA" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>_onSubmit()}>
          <Text>Tambah Data Pelanggan</Text>
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
});
