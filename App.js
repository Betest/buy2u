/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// Stack navigator for react-navigate
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateProduct from './Screen/create-product/create-product';
import ListProducts from './Screen/list-product/list-product';
import DetailProduct from './Screen/detail-product/detail-product';
import UpdateProduct from './Screen/update-product/update-product';

// stack instance for implements methods of stack
const Stack = createStackNavigator();

function App(){
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Productos" component={ListProducts} />
        <Stack.Screen name="Detalle" component={DetailProduct} />
        <Stack.Screen name="Crear Producto" component={CreateProduct} />
        <Stack.Screen name="Actualizar" component={UpdateProduct} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );  
}

const styles = StyleSheet.create({ 
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
