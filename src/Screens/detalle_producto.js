// Importaciones 
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Contenido de la página principal
export default function detalle_producto({ navigation }) {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image source={require('../img/Logo.png')} style={styles.logo} />
                <TextInput style={styles.searchInput} placeholder="Buscar productos..." />
                <TouchableOpacity style={styles.cartIcon}>
                    <Icon name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <Card containerStyle={styles.card}>
                    <Card.Image style={styles.productImage} source={require('../img/kit.png')} />
                    <Card.Divider />
                    <Text style={styles.productName}>Kit de herramienta</Text>
                    <Text style={styles.productPrice}>$59.99</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        </View>
    );
}

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
        alignItems: 'center',
    },
    card: {
        width: '100%',
        marginBottom: 16,
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
        marginVertical: 8,
        textAlign: 'center',
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
