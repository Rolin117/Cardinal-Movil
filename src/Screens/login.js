// Importaciones

import React, { useEffect, useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import * as Constantes from '../utils/consantes';
import { useFocusEffect } from '@react-navigation/native';

export default function Sesion({ navigation }) {
  const ip = Constantes.IP;

  const [isContra, setIsContra] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  // Efecto para cargar los detalles del carrito al cargar la pantalla o al enfocarse en ella
  useFocusEffect(
    React.useCallback(() => {
      validarSesion(); // Llama a la función validarSesion.
    }, [])
  );

  const validarSesion = async () => {
    try {
      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=getUser`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.status === 1) {
        cerrarSesion();
      } else {
        console.log("No hay sesión activa");
      }
    } catch (error) {
      console.error(error);
      //Alert.alert('Error', 'Ocurrió un error al validar la sesión'+ error);
    }
  };

  const cerrarSesion = async () => {
    try {
      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=logOut`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.status) {
        console.log("Sesión Finalizada");
      } else {
        console.log('No se pudo eliminar la sesión');
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al cerrar la sesión');
    }
  };

  const handlerLogin = async () => {
    if (!usuario || !contrasenia) {
      Alert.alert('Error', 'Por favor ingrese su correo y contraseña');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('correo', usuario);
      formData.append('clave', contrasenia);

      const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=logIn`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.status) {
        setContrasenia('');
        setUsuario('');
        navigation.navigate('TabNavigator');
      } else {
        console.log(data);
        Alert.alert('Error sesión', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
    }
  };

  const irRegistrar = () => {
    navigation.navigate('SignUp');
  };

  // Contenido de la página principal
  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Suministros y Servicios Tecnicos</Text>
        </View>
        <View style={styles.inputContainer} /* El usuario ingresa sus credenciales */>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            keyboardType="email-address"
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={contrasenia}
            onChangeText={setContrasenia}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handlerLogin}>
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

// Se comienza el código css
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
