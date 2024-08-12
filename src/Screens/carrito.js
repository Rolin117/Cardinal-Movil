import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const ShoppingCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('servicios')} >
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


export default ShoppingCart;
