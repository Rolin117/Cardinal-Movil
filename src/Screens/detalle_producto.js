import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import * as Constantes from '../utils/consantes';


export default function DetalleProducto({ navigation }) {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const ip = Constantes.IP;

    // Función para obtener los detalles del producto desde la API
    const getProductos = async () => {
        try {
            const response = await fetch(`${ip}/Cardinal_SST-Final/api/services/public/producto.php?action=readAll`, {
                method: 'GET',
            });
            const data = await response.json();
            console.log(data)
            setProduct(data.dataset);// Asume que el primer producto en la lista es el que quieres mostrar
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product details:", error);
            setLoading(false);
        }
};

    useEffect(() => {
        getProductos();
    }, []);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityChange = (text) => {
        const number = parseInt(text);
        setQuantity(number > 0 ? number : 1); // Asegura que el valor sea al menos 1
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Cargando producto...</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <Text>No se pudo cargar el producto.</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image source={require('../img/Logo.png')} style={styles.logo} />
                <TextInput style={styles.searchInput} placeholder="Buscar productos..." />
                <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('carrito')}>
                    <Icon name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={{ uri: product.imagen }} />
                    <Card containerStyle={styles.card}>
                        <Text style={styles.productName}>{product.nombre}</Text>
                        <Text style={styles.productPrice}>${product.precio}</Text>

                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.quantityInput}
                                value={String(quantity)}
                                onChangeText={handleQuantityChange}
                                keyboardType="numeric"
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
                <TouchableOpacity onPress={() => {}}>
                    <Icon name="history" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f2f2f2',
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
        borderColor: '#ccc',
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
