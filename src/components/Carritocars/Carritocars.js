import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Constantes from '../../utils/consantes';

const CarritoCard = ({ item, cargarCategorias,
    modalVisible,
    setModalVisible,
    cantidadProductoCarrito,
    setCantidadProductoCarrito,
    accionBotonDetalle,
    idDetalle,
    setIdDetalle, getDetalleCarrito, updateDataDetalleCarrito }) => {}

    const ip = Constantes.IP;
    //asignar el valor a cantidadproducto carrito que viene 

    /*
    
        const handleDeleteDetalleCarrito = async (idDetalle) => {
          try {
            const formData = new FormData();
            formData.append('idDetalle', idDetalle);
            const response = await fetch(`${ip}/coffeeshop/api/services/public/pedido.php?action=deleteDetail`, {
              method: 'POST',
              body: formData
            });
            const data = await response.json();
            if (data.status) {
              Alert.alert('Datos eliminados correctamente del carrito');
              // Llamar a la función de actualización para actualizar la lista
              updateDataDetalleCarrito(prevData => prevData.filter(item => item.id_detalle !== idDetalle));
            } else {
              Alert.alert('Error al eliminar del carrito', data.error);
            }
          } catch (error) {
            Alert.alert("Error al eliminar del carrito")
          }
        };*/

    const handleDeleteDetalleCarrito = async (idDetalle) => {
        try {
            // Mostrar un mensaje de confirmación antes de eliminar
            Alert.alert(
                'Confirmación',
                '¿Estás seguro de que deseas eliminar este elemento del carrito?',
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel'
                    },
                    {
                        text: 'Eliminar',
                        onPress: async () => {
                            const formData = new FormData();
                            formData.append('idDetalle', idDetalle);
                            const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/producto.php?action=deleteDetail`, {
                                method: 'POST',
                                body: formData
                            });
                            const data = await response.json();
                            if (data.status) {
                                Alert.alert('Datos eliminados correctamente del carrito');
                                // Llamar a la función de actualización para actualizar la lista
                                updateDataDetalleCarrito(prevData => prevData.filter(item => item.id_detalle !== idDetalle));
                            } else {
                                Alert.alert('Error al eliminar del carrito', data.error);
                            }
                        }
                    }
                ]
            );
        } catch (error) {
            Alert.alert("Error al eliminar del carrito")
        }
    };