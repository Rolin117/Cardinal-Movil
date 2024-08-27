//Importaciones 

import React, {useState} from 'react';
import {Button, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert} from 'react-native';
import { Icon,} from 'react-native-elements';
import loading from '../components/loading';
import {ValidateEmail} from '../utils/helpers';


//Contenido de la recuperacion de contraseña
export default function recorverpassword({ navigation }) {
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(null)
  const [loading, setLoading] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSubmit = () =>{
    if (!validateData()){
      return
    }

  Alert.alert("Fuck yeah")
  }

  const validateData = () => {

    if (!email.trim()) {
      Alert.alert("Ingresa tu correo, para poder hacer la recuperación de contraseña");
  } else if (!emailRegex.test(email)) {
      Alert.alert("Correo no válido");
  }

  }




  return (
    <View style={styles.screen}>
      <Image source={require('../img/Logo.png')} style={styles.icon} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recuperar Contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" 
          value={email}
          onChangeText={setEmail}/>
          <TouchableOpacity style={styles.button} onPress={validateData}>
            <Text style={styles.buttonText}>Enviar</Text>
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
