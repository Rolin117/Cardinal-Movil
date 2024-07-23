import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Contenido de la página principal
export default function DetalleProducto({ navigation }) {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

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
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={require('../img/kit.png')} />
                    <Card containerStyle={styles.card}>
                        <Text style={styles.productName}>Kit de herramienta</Text>
                        <Text style={styles.productPrice}>$59.99</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <TextInput 
                                style={styles.quantityInput} 
                                value={String(quantity)} 
                                onChangeText={(text) => setQuantity(parseInt(text) || 1)}
                                keyboardType='numeric'
                            />
                            <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('carrito')}>
                            <Text style={styles.buttonText}>Agregar al carrito</Text>
                        </TouchableOpacity>
                        </View>
                    </Card>
                </View>
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
   
    productContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
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
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    quantityButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    quantityInput: {
        width: 50,
        textAlign: 'center',
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 8,
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
