// Importaciones

import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import * as Constantes from '../utils/consantes';

export default function home({ navigation }) {
  const ip = Constantes.IP;
  const [dataProductos, setDataProductos] = useState([]);

  const getProductos = async () => {
    try {
      // utilizar la direccion IP del servidor y no localhost
      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/producto.php?action=readAll`, {
        method: 'GET',
      });

      const data = await response.json();
      if (data.status) {
        setDataProductos(data.dataset);
      } else {
        console.log(data);
        Alert.alert('Error productos', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al listar los productos');
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={require('../img/Logo.png')} style={styles.logo} />
        <TextInput style={styles.searchInput} placeholder="Buscar productos..." />
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('carrito')}>
          <Icon name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {dataProductos.map((item, index) => (
          <Card key={index} containerStyle={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('detalle_producto', { id: item.id_producto })}>
              <Card.Image style={styles.productImage} source={{ uri: `${ip}/Cardinal_SST-Final/api/images/productos/${item.imagen_producto}` }} />
              <Card.Divider />
            </TouchableOpacity>
            <Text style={styles.productName}>{item.nombre_producto}</Text>
            <Text style={styles.productPrice}>${item.precio_producto}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('carrito')}>
              <Text style={styles.buttonText}>Añadir al Carrito</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('datos-usuario')}>
          <Icon name="cogs" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('servicios')}>
          <Icon name="address-book" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Icon name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('contacto')}>
          <Icon name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Icon name="history" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Se comienza el código css
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 35,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cartIcon: {
    marginLeft: 16,
  },
  container: {
    padding: 16,
    margin: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: 16,
  },
  productImage: {
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#00B207',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
