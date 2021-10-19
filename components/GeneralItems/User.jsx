import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export const User = ({ Nombre, ApellidoPaterno, ApellidoMaterno, Cargo }) => {
    return(
        <>
            <View style={ styles.trabajadorContainer }>
                <View style={ styles.imagenTrabajadorContainer }>
                    <Image
                        source={ require('../../assets/user.png') }
                        style={ styles.Logo }      
                    />            
                </View>                
                <View style={ styles.textoTrabajador }>
                    <Text style={ styles.textoTrabajadorField }>Nombre: { Nombre }</Text>
                    <Text style={ styles.textoTrabajadorField }>Apellido: { ApellidoPaterno } </Text>
                    <Text style={ styles.textoTrabajadorField }>Cargo: { Cargo }</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    trabajadorContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6D6D6',     
        borderRadius: 10   
    },  
    imagenTrabajadorContainer: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoTrabajador:{
        width: '70%',
        paddingTop: 18,
        paddingBottom: 18,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',        
    },
    Logo:{
        margin: 'auto',
        width: 50,
        height: 50,
        marginTop: 5,
        marginBottom: 5        
    },
    textoTrabajadorField: {
        marginTop: 2,
        marginBottom: 2
    }
});