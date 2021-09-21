import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { GeneralButton } from './../GeneralItems/GeneralButton';

export const Login = ({ navigation }) => {

    const [text, onChangeText] = React.useState("Ingrese su userName");
    const [pass, onChangePass] = React.useState("Ingrese su contraseña");

    React.useEffect(()=>{
        console.log(text)
    }, [ text ])

    return(
        <View style={ styles.viewStyle }>
            <Image             
                source={ require('../../assets/ToUppLogoweb.png') }
                style={ styles.Logo }          
            />
            <Text sytle={{ fontWeight: 'bold' }}>
                Bienvenido a ToUp
            </Text>
            <Text>Ingrese su usuario y contraseña para seguir</Text>
            <TextInput
                style={styles.input}
                onChangeText={ onChangeText }
                value={ text }
            />
            <TextInput
                style={styles.input}
                onChangeText={ onChangePass }
                value={ pass }
            />
            <GeneralButton text={'Login'}             
                onPress={()=>{
                    navigation.navigate('Searching');
                }}
            />   
            <GeneralButton text={'¿Olvidó su contraseña?'} />            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        textAlign: 'center',
        paddingTop: 30,         
    },
    Logo:{
        margin: 'auto',
        width: 100,
        height: 120,
        marginTop: 10,
        marginBottom: 10        
    },
    title:{        
        fontWeight: 'bold',         
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});