//Importaciones

import React, {useState} from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { overlay } from 'react-native-paper';

export default function loading(){
    return (
        <Overlay>
            isVisible={isVisible}
            windowBackgounColor="rgba(0,0,0,0.5)"
            OverlayBackroundColor="transparent"
            OverlayStyle={StyleSheet.Overlay}

            <View>
                <ActivityIndicator>
                    text && <Text>{text}</Text>
                </ActivityIndicator>
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay : {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#442484",
        borderWidth: 2,
        borderRadius: 10
    }
})
