//Importaciones

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Capturaciones de datos 

export default function datos({ navigation }) {
  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Perfil de Usuario</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.halfInput]} placeholder="Nombre" />
            <TextInput style={[styles.input, styles.halfInput]} placeholder="Apellido" />
          </View>
          <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { /* lógica para guardar los cambios */ }}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={styles.link}>Volver</Text> 
          </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('datos-usuario')}>
          <Icon name="cogs" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('servicios')}>
          <Icon name="address-book" size={24} color="black" />
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

// Se comienza el codigo de css

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 16,
    top: 35,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  halfInput: {
    width: '48%',
  },
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#00B207',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    margin: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexShrink: 0, // Previene que el footer se expanda
  },
});
