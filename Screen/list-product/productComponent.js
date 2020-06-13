import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';



const ProductComponent= ({product})=>{

    return(
        <View style={styles.container}>
            <View style={styles.item}>
            <Text style={styles.name}>Codigo Producto: {product.code}</Text>
            <Text style={styles.title}>Nombre Producto: {product.name}</Text>
            <Text>Descripcion: {product.description}</Text>
            <Text>URL de imagen Producto: {product.image}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Precio: {product.price}</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      borderWidth: 2,
      padding: 20,
      
    },
    title: {
      fontSize: 18,
    },
    name: {
      backgroundColor: '#99f2c8',
      fontSize: 22,
      borderRadius: 10,
      marginLeft: -10,
      width: 320
    },    
    deleteProductButton: {
      alignItems: 'center',
      backgroundColor: '#4286f4',
      borderRadius: 50,
      marginVertical: 8,
      marginHorizontal: 100,
    },
    textButton: {
      color: 'white'
    }
  });
export default ProductComponent;