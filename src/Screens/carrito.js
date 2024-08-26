import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
// Importa la función useFocusEffect de @react-navigation/native, 
// que permite ejecutar un efecto cada vez que la pantalla se enfoca.

import Constants from 'expo-constants';
import * as Constantes from '../utils/consantes';
import Buttons from '../components/Buttons/Butoon';
import CarritoCard from '../components/Cards/ProductoCard';
import ModalEditarCantidad from '../components/Cards/ProductoCard';


const Carrito = ({navigation}) => {
   // Estado para almacenar los detalles del carrito
   const [dataDetalleCarrito, setDataDetalleCarrito] = useState([]);
   // Estado para el id del detalle seleccionado para modificar
   const [idDetalle, setIdDetalle] = useState(null);
   // Estado para la cantidad del producto seleccionado en el carrito
   const [cantidadProductoCarrito, setCantidadProductoCarrito] = useState(0);
   // Estado para controlar la visibilidad del modal de edición de cantidad
   const [modalVisible, setModalVisible] = useState(false);
   // IP del servidor
   const ip = Constantes.IP;

     // Función para navegar hacia atrás a la pantalla de productos
  const backProducts = () => {
    navigation.navigate('home');
  };

    // Efecto para cargar los detalles del carrito al cargar la pantalla o al enfocarse en ella
    useFocusEffect(
      // La función useFocusEffect ejecuta un efecto cada vez que la pantalla se enfoca.
      React.useCallback(() => {
        getDetalleCarrito(); // Llama a la función getDetalleCarrito.
      }, [])
    );

    // Función para obtener los detalles del carrito desde el servidor
  const getDetalleCarrito = async () => {
    try {
      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/producto.php?action=readAll`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data, "Data desde getDetalleCarrito")
      if (data.status) {
        setDataDetalleCarrito(data.dataset);
      } else {
        console.log("No hay detalles del carrito disponibles")
        //Alert.alert('ADVERTENCIA', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al listar las categorias');
    }
  };

  // Función para finalizar el pedido
  const finalizarPedido = async () => {
    try {
      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/producto.php?action=readAll`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status) {
        Alert.alert("Se finalizó la compra correctamente")
        setDataDetalleCarrito([]); // Limpia la lista de detalles del carrito
        navigation.navigate('TabNavigator', { screen: 'Productos' });
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al finalizar pedido');
    }
  };

    // Función para manejar la modificación de un detalle del carrito
    const handleEditarDetalle = (idDetalle, cantidadDetalle) => {
      setModalVisible(true);
      setIdDetalle(idDetalle);
      setCantidadProductoCarrito(cantidadDetalle);
    };

    // Función para renderizar cada elemento del carrito
  const renderItem = ({ item }) => (
    <CarritoCard
      item={item}
      cargarCategorias={getDetalleCarrito}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      setCantidadProductoCarrito={setCantidadProductoCarrito}
      cantidadProductoCarrito={cantidadProductoCarrito}
      idDetalle={idDetalle}
      setIdDetalle={setIdDetalle}
      accionBotonDetalle={handleEditarDetalle}
      getDetalleCarrito={getDetalleCarrito}
      updateDataDetalleCarrito={setDataDetalleCarrito} // Nueva prop para actualizar la lista
    />
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} >
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Carrito</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.cartItem}>
          <Image
            source={{ uri: 'https://example.com/toolkit.jpg' }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Kit de herramientas</Text>
            <Text style={styles.itemPrice}>Precio Unitario: $59.99</Text>
            <TextInput
              style={styles.quantityInput}
              defaultValue="1"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity onPress={() => alert('Remove item')}>
            <Text style={styles.removeItem}>✕</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>$59.99</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => alert('Comprar')}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    fontSize: 30, // Aumenta el tamaño de la flecha
    color: '#333', // Añade color a la flecha
    marginRight: 16,
    padding: 10, // Aumenta el padding para un mejor área de toque
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    width: 50,
    textAlign: 'center',
    marginTop: 8,
  },
  removeItem: {
    fontSize: 24,
    color: 'red',
    marginLeft: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#00c853',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});


