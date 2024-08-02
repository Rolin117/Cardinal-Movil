import React, { useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import * as Constantes from '../utils/consantes';

export default function Registro({ navigation }) {
  const ip = Constantes.IP;
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const telefonoRegex = /^\d{4}-\d{4}$/;

  const handleRegister = async () => {
    // Validar los campos del formulario
    if (!nombre || !apellido || !telefono || !correo || !contrasena) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    const fechaMinima = new Date();
    fechaMinima.setFullYear(fechaMinima.getFullYear() - 18);
    // Validar los campos
    if (!nombre.trim() || !apellido.trim() || !correo.trim() || !telefono.trim() || !contrasena.trim()) {
      Alert.alert("Debes llenar todos los campos");
      return;
    } else if (!telefonoRegex.test(telefono)) {
      Alert.alert("El teléfono debe tener el formato correcto (####-####)");
      return;
    }

    // Preparar datos para enviar al backend
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('telefono', telefono);
    formData.append('correo', correo);
    formData.append('contrasena', contrasena);

    const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=signUpMovil`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (data.status) {
      Alert.alert('Datos Guardados correctamente');
      navigation.navigate('Sesion');
    } else {
      Alert.alert('Error', data.error);
    }
    /* 
    fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=signUpMovil`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('Éxito', 'Registro exitoso');
          navigation.navigate('login');
        } else {
          Alert.alert('Error', data.message || 'Algo salió mal');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'No se pudo conectar con el servidor ' + error);
      }); */
  };

  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Suministros y Servicios Tecnicos</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Apellido"
              value={apellido}
              onChangeText={setApellido}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            value={telefono}
            onChangeText={setTelefono}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={contrasena}
            onChangeText={setContrasena}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
