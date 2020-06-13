import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


function CreateProduct({ navigation }) {  
  
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");


  const createProduct = async () => {
    if (code == "" || name == "" || description == "" || image == "" || stock == "" || price == "") {
      Alert.alert("Debe llenar todos los campos");
    }
    else if (isNaN(price)) {
      Alert.alert("El precio debe ser un valor numerico");

    } else if (isNaN(stock)) {
      Alert.alert("El stock debe ser númerico");

    } else {

      try {
        const URI = "https://us-central1-apifunctions.cloudfunctions.net/api" 
        const response = await fetch(URI+"/save", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            code: code,
            name: name,
            description: description,
            image: image,
            stock: stock,
            price: price
          })
        });
        const json = await response.json();
        Alert.alert("Producto creado");
        navigation.navigate("Productos");

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={"Codigo Producto"} onChangeText={text => setCode(text)}></TextInput>
      <TextInput style={styles.textInput} placeholder={"Nombre Producto"} onChangeText={text => setName(text)}></TextInput>
      <TextInput style={styles.textInput} placeholder={"Descripcion"} onChangeText={text => setDescription(text)}></TextInput>
      <TextInput style={styles.textInput} placeholder={"URL Imagen Producto"} onChangeText={text => setImage(text)}></TextInput>
      <TextInput style={styles.textInput} placeholder={"Stock"}  onChangeText={text => setStock(text)} keyboardType={'numeric'}></TextInput>
      <TextInput style={styles.textInput} placeholder={"Precio"} onChangeText={text => setPrice(text)} keyboardType={'numeric'}></TextInput>
      
      <TouchableHighlight style={styles.createProductButton} onPress={createProduct}>
        <Text style={styles.textStyleButton}>Guardar Producto</Text>
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
export default CreateProduct;