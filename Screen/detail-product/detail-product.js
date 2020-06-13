import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Form, Item, Input } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


function DetailProduct({route,navigation}) {    
    const {id, code, name, description, image, stock, price} = route.params;
    const URI = "https://us-central1-apifunctions.cloudfunctions.net/api";



    const deleteProduct = async () =>{
        try{
            const response = await fetch(URI+"/delete",{
                method: 'delete',
                headers:{
                    Accept: 'Application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            });
            const json = await response.json();
            navigation.navigate('Productos');
        }catch(err){
            console.log(err)
        }
    }

    const updateProduct = (id, code, name, description, image, stock, price) =>{
      navigation.navigate('Actualizar',{
        id: id,
        code: code,
        name: name,
        description: description,
        image: image,
        stock: stock,
        price: price
      });
    }
    
    return (
        <View style={styles.container}>
            
            <Text>Codigo Producto: {code}</Text>
            <Text>Nombre Producto: {name}</Text>
            <Text>Descripcion: {description}</Text>
            <Text>URL de imagen Producto: {image}</Text>
            <Text>Stock: {stock}</Text>
            <Text>Precio: {price}</Text>
                
            <TouchableHighlight style={styles.createProductButton} onPress={deleteProduct}>
                <Text style={styles.textStyleButton}>Eliminar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.createProductButton} onPress={ () => updateProduct(id, code, name, description, image, stock, price)}>
                <Text style={styles.textStyleButton}>Actualizar</Text>
            </TouchableHighlight>
        </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 45,
    borderWidth: 2,
    padding: 20,
    backgroundColor: 'white'
  },
  textInput: {
    marginLeft: 40,
    borderRadius: 45,
    color: 'black'
  },
  textStyleButton: {
    fontSize: 16,
    color: 'black'
  },
  createProductButton: {
    alignItems: 'center',
    backgroundColor: '#78ffd6',
    padding: 10,
    borderRadius: 45,
    marginVertical: 8,
    marginHorizontal: 80,
  },  
  dateAppointmentButton: {
    alignItems: 'center',
    backgroundColor: '#dd3e54',
    padding: 10,
    borderRadius: 45,
    marginVertical: 8,
    marginHorizontal: 80,
  },
});
export default DetailProduct;