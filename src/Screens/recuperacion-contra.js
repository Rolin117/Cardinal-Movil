//Importaciones 

import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';


//Contenido de la recuperacion de contraseña
export default function recupercion({ navigation }) {
  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recuperar Contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
          <TouchableOpacity style={styles.button} onPress={() => { /* lógica para enviar código */ }}>
            <Text style={styles.buttonText}>Enviar Código</Text>
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Código de Recuperación" keyboardType="numeric" />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cambio-contra')}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.link}>Volver al Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


//comienza el css
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
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
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
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  link: {
    color: 'black',
    marginTop: 8,
  },
});
