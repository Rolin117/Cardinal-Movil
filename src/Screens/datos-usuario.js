import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constantes from '../utils/consantes';

export default function DatosU({ navigation }) {
  const ip = Constantes.IP;

  // Estados para los datos del usuario
  const [nombre, setNombre] = useState('');
     const [perfil, setPerfil] = useState(null); // Estado para almacenar los datos del perfil
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [loading, setLoading] = useState(true); // Estado para indicar si la información está cargando
  const [error, setError] = useState(null); // Estado para manejar errores
  

  // Cargar datos desde la API
  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=readProfile`,
          {
            method: 'GET',

          });
        const data = await response.json();

        if (data.status) {
          // Asumiendo que los datos vienen en el objeto data
          setPerfil(data.dataset); // Guarda los datos del perfil en el estado
          setNombre(data.dataset.nombre_cliente); // Establece el apellido en el estado
          setApellido(data.dataset.apellido_cliente); // Establece el apellido en el estado
          setCorreo(data.dataset.correo_cliente); // Establece el apellido en el estado
          setTelefono(data.dataset.telefono_cliente); // Establece el apellido en el estado
        } else {
          Alert.alert('Error', 'No se pudo cargar el perfil del usuario', data.error);
          console.log(data.error);
        }
      } catch (error) {
        setError(error.message);
        Alert.alert('Error  Hubo un problema al conectar con la API', `${error.message}`);
      } finally {
        setLoading(false); // Dejar de mostrar el indicador de carga
      }
    };

    cargarPerfil();
  }, []);

  const actualizarPerfil = async () => {
    try {

      const formData = new FormData();
      formData.append('nombre_perfil', nombre); // Añade el nombre al FormData
      formData.append('apellido_perfil', apellido); // Añade el apellido al FormData
      formData.append('correo_perfil', correo); // Añade el correo al FormData
      formData.append('telefono_perfil', telefono); // Añade el teléfono al FormData

      const url = `${ip}/Cardinal_SST-Final/api/services/public/cliente.php?action=editProfile`;

      const response = await fetch(url, {
          method: 'POST',
          body: formData,
      });

      const data = await response.json();

      if (data.status) {
        Alert.alert('Éxito', 'El perfil ha sido actualizado correctamente');
      } else {
        Alert.alert('Error', 'No se pudo actualizar el perfil. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      Alert.alert('Error hubo un problema al conectar con la API:', `${error.message}`);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00B207" />
        <Text>Cargando perfil...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Hubo un problema al cargar los datos: {error}</Text>
        <TouchableOpacity style={styles.button} onPress={() => cargarPerfil()}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Perfil de Usuario</Text>
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
            placeholder="Correo"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={actualizarPerfil}
        >
          <Text style={styles.buttonText}>Editar perfil</Text>
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
    flexShrink: 0,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});
{

}