import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// Contenido de la página principal
export default function login({ navigation }) {
  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Suministros y Servicios Tecnicos</Text>
        </View>
        <View style={styles.inputContainer} /* El usuario ingresa sus credenciales */>
          <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('recuperacion-contra')}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('registro')}>
            <Text style={styles.link}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

//Se comienza el código css
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
