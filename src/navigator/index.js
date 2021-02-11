import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Pelanggan from '../screens/Pelanggan';
import Penjualan from '../screens/Penjualan';
import AddPelanggan from '../screens/AddPelanggan';
import AddPenjualan from '../screens/AddPenjualan';
import EditPenjualan from '../screens/editPenjualan';
import Barang from '../screens/Barang';
import {Images} from '../../assets';

import {Image, Text} from 'react-native';

const Tab = createBottomTabNavigator();


export default function index() {
 

  const PelangganStack = createStackNavigator();
  const PelangganStackScreen = () => {
    return (
      <PelangganStack.Navigator>
        <PelangganStack.Screen
          name="Pelanggan"
          component={Pelanggan}
          options={{headerShown: false}}
        />
        <PelangganStack.Screen
          name="AddPelanggan"
          component={AddPelanggan}
          options={{headerShown: false}}
        />
      </PelangganStack.Navigator>
    );
  };
  const BarangStack = createStackNavigator();
  const BarangStackScreen = () => {
    return (
      <BarangStack.Navigator>
        <BarangStack.Screen
          name="Barang"
          component={Barang}
          options={{headerShown: false}}
        />
      </BarangStack.Navigator>
    );
  };
  const PenjualanStack = createStackNavigator();
  const PenjualanStackScreen = () => {
    return (
      <PenjualanStack.Navigator>
        <PenjualanStack.Screen
          name="Penjualan"
          component={Penjualan}
          options={{headerShown: false}}
        />
          <PelangganStack.Screen
          name="AddPenjualan"
          component={AddPenjualan}
          options={{headerShown: false}}
        />
          <PelangganStack.Screen
          name="EditPenjualan"
          component={EditPenjualan}
          options={{headerShown: false}}
        />
      </PenjualanStack.Navigator>
    );
  };

  const MyTabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{activeTintColor: 'black', style: {height: 55}}}>
        <Tab.Screen
          name="Pelanggan"
          component={PelangganStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={Images.pelanggan}
                style={{height: 35, width: 35}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Barang"
          component={BarangStackScreen}
          options={{
            tabBarIcon: () => (
              <Image source={Images.barang} style={{height: 45, width: 45}} />
            ),
          }}
        />
        <Tab.Screen
          name="Penjualan"
          component={PenjualanStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={Images.penjualan}
                style={{height: 35, width: 35}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
}
