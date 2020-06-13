import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

//import component
import ProductComponent from './productComponent';
import { useIsFocused } from '@react-navigation/native';


function ListProducts({navigation}){
    const isFocused = useIsFocused();
    const [Data, setData] = useState([]);
    const URI = "https://us-central1-apifunctions.cloudfunctions.net/api";
    
    //res data for flatlist form api
    const fetchProducts = async () => {
        try{
          let response = await fetch(URI+"/products");
          let jsonRes = await response.json();
          //console.log(jsonRes);
          setData(jsonRes.products);
        }catch(error){
          console.log('error');
        }                
    }
    useEffect(()=>{
        fetchProducts();
    },[isFocused]);

    
    
    const detailProduct = (id, code, name, description, image, stock, price) =>{
      navigation.navigate('Detalle',{
        id: id,
        code: code,
        name: name,
        description: description,
        image: image,
        stock: stock,
        price: price
      });
    }
   
    return(        

        <View style={styles.container}>

            <TouchableHighlight style={styles.createAppointmentButton} onPress={()=>navigation.navigate('Crear Producto')}>

                <Text style={styles.buttonTextStyle}>Crear Nuevo producto</Text>

            </TouchableHighlight>

            <Text style={styles.title}>{Data.length > 0 ? 'Administra tus productos': 'No hay productos agregados'}</Text>

            <FlatList 
              data={Data}
              renderItem={({item})=> <TouchableHighlight style={styles.buttonTouch} onPress={ () => detailProduct(item.id, item.code, item.name, item.description, item.image, item.stock, item.price)}>
                <ProductComponent product={item}/>
              </TouchableHighlight>}
              keyExtractor={product => product.id}            
            >

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    createAppointmentButton: {
      alignItems: 'center',
      backgroundColor: '#8E2DE2',
      padding: 20,
      borderRadius: 50,
      marginVertical: 8,
      marginHorizontal: 100
    },
    buttonTextStyle: {
      color: 'white',

    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    buttonTouch:{
      backgroundColor: 'white'
    }
      
  });

export default ListProducts;