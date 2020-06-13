import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';



const ProductComponent= ({product,deleteProduct})=>{
    



    
      const dialogoDelete = _id => {
          console.log('Eliminando producto...', _id)
  
          deleteProduct(_id)
      }
    


     

    /* const deleteAppointment = async () => {
      try{
        let response = await fetch('http://192.168.1.60:3000/api/deleteAppointment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            _id: _id
            
          })
        });
        const json = await response.json();
        console.log(json);
        Alert.alert("Cita medica Eliminada");
      }catch(error){
        console.log(error);
      } 

    } */
    return(
        <View style={styles.item}>
            <Text style={styles.name}>Codigo Producto: {product.code}</Text>
            <Text style={styles.title}>Nombre Producto: {product.name}</Text>
            <Text>Descripcion: {product.description}</Text>
            <Text>URL de imagen Producto: {product.image}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Precio: {product.price}</Text>
            <TouchableHighlight style={styles.deleteProductButton} onPress={()=> dialogoDelete(product._id)}>
              <Text style={styles.textButton}>Eliminar</Text>              
            </TouchableHighlight>

        </View>
    );
}
const styles = StyleSheet.create({
    item: {
      flex: 1,
      backgroundColor: '#6DD5FA',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      borderWidth: 2,
      padding: 20
    },
    title: {
      fontSize: 18,
    },
    name: {
      backgroundColor: '#2980B9',
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