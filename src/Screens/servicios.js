//Importaciones 
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import detalle_producto from './detalle_producto';

// Contenido de la página principal
export default function home({ navigation }) {
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
        {[1,2,3,4].map((item, index) => (
          <Card key={index} containerStyle={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('detalle_producto')}>
              <Card.Divider />
            </TouchableOpacity>
            <Text style={styles.productName}>Servicios de ingenieria {item}</Text>
            <Text style={styles.productPrice}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo vitae mi porttitor blandit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel turpis sed mauris finibus malesuada.
              Pellentesque dignissim ac leo ultrices malesuada. Suspendisse bibendum velit in neque sagittis, id feugiat justo rutrum. </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('contacto')}>
              <Text style={styles.buttonText}>Más información</Text>
            </TouchableOpacity>
            </View>
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

//Se comienza el código css
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
    marginVertical: 20,
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
