import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function registro({ navigation }) {
  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Suministros y Servicios Tecnicos</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.halfInput]} placeholder="Nombre" />
            <TextInput style={[styles.input, styles.halfInput]} placeholder="Apellido" />
          </View>
          <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { /* lógica para registrarse */ }}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.link}>Volver al Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
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
