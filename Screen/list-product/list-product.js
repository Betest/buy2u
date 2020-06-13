import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

//import component
import ProductComponent from './productComponent';
import { useIsFocused } from '@react-navigation/native';


function ListProducts({navigation}){
    const isFocused = useIsFocused();
    const [Data, setData] = useState([]);
    const URI = "https://us-central1-apifunctions.cloudfunctions.net/api"
    
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

    //Elimina pacientes del state
    const deleteProduct = _id => {
      setData((productosActuales)=>{
        return productosActuales.filter( product => product._id !== _id);
      })
    }
    
   
    return(        

        <View style={styles.container}>

            <TouchableHighlight style={styles.createAppointmentButton} onPress={()=>navigation.navigate('Crear Producto')}>

                <Text style={styles.buttonTextStyle}>Crear Nuevo producto</Text>

            </TouchableHighlight>

            <Text style={styles.title}>{Data.length > 0 ? 'Administra tus productos': 'No hay productos agregados'}</Text>

            <FlatList 
              data={Data}
              renderItem={({ item })=> <ProductComponent product={item} deleteProduct={deleteProduct}/>}
              keyExtractor={product => product._id}            
            >

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    createAppointmentButton: {
      alignItems: 'center',
      backgroundColor: 'orange',
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
      
  });

export default ListProducts;