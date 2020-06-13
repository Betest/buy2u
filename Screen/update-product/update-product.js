import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


function UpdateProduct({route,navigation}) {
    //const { id, code, name, description, image, stock, price } = route.params;
    const id = route.params.id
    const [codeA, onChangeCode] = React.useState(route.params.code);
    const [nameA, onChangeName] = React.useState(route.params.name);
    const [descriptionA, onChangeDescription] = React.useState(route.params.description);
    const [imageA, onChangeImage] = React.useState(route.params.image);
    const [stockA, onChangeStock] = React.useState(route.params.stock);
    const [priceA, onChangePrice] = React.useState(route.params.price);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          code: codeA === '' ? 'No title' : codeA,
          name: nameA === '' ? 'No title' : nameA,
          description: descriptionA === '' ? 'No title' : descriptionA,
          image: imageA === '' ? 'No title' : imageA,
          stock: stockA === '' ? 'No title' : stockA,
          price: priceA === '' ? 'No title' : priceA,
        });
      }, [navigation, {codeA, nameA, descriptionA, imageA, stockA, priceA}]);

    const updateProduct = async () => {
        if (codeA == "" || nameA == "" || descriptionA == "" || imageA == "" || stockA == "" || priceA == "") {
            Alert.alert("Debe llenar todos los campos");
        }
        else if (isNaN(priceA)) {
            Alert.alert("El precio debe ser un valor numerico");

        } else if (isNaN(stockA)) {
            Alert.alert("El stock debe ser númerico");

        } else {

            try {
                const URI = "https://us-central1-apifunctions.cloudfunctions.net/api"
                const response = await fetch(URI+'/update', {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id,
                        code: codeA,
                        name: nameA,
                        description: descriptionA,
                        image: imageA,
                        stock: stockA,
                        price: priceA
                    })
                });
                const json = await response.json();
                Alert.alert("Producto Actualizado");
                navigation.navigate('Productos');

            } catch (error) {
                Alert.alert(`Error actualizando producto: ${error}`);
            }
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder={"Codigo Producto"} value={codeA} onChangeText={onChangeCode}></TextInput>
            <TextInput style={styles.textInput} placeholder={"Nombre Producto"} value={nameA} onChangeText={onChangeName}></TextInput>
            <TextInput style={styles.textInput} placeholder={"Descripcion"} value={descriptionA} onChangeText={onChangeDescription}></TextInput>
            <TextInput style={styles.textInput} placeholder={"URL Imagen Producto"} value={imageA} onChangeText={onChangeImage}></TextInput>
            <TextInput style={styles.textInput} placeholder={"Stock"} value={stockA} onChangeText={onChangeStock} keyboardType={'numeric'}></TextInput>
            <TextInput style={styles.textInput} placeholder={"Precio"} value={priceA} onChangeText={onChangePrice} keyboardType={'numeric'}></TextInput>

            <TouchableHighlight style={styles.createProductButton} onPress={updateProduct}>
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
export default UpdateProduct;