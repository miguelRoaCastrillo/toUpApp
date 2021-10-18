import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import { GeneralButton } from './../GeneralItems/GeneralButton';

export const Login = ({ navigation }) => {

    const [ usrtext, onChangeUser ] = React.useState("");
    const [ pass, onChangePass ] = React.useState(""); 
    const [ invalidPass, setInvalidPass ] = React.useState(false);
    
    React.useEffect(() => {

    }, [])

    const buscarUsuarioPorUserName = () =>{

        let url = `http://192.168.2.104:80/api/usrByParams?username=${ usrtext }`;

        axios.get(url).then((response)=>{
            
            let arrayData = response.data[0];
            let usernameRequest = arrayData.usr_username;
            let userPassRequest = arrayData.usr_pass;

            console.log("El usuario es: " + usernameRequest + " Y su contraseña es: " + userPassRequest);

            if( usernameRequest === usrtext && userPassRequest === pass ){
                console.log("El usuario puede pasar");
                setInvalidPass(false);

                navigation.navigate('IngresaStartUp');
            }else{
                console.log("El usuario no puede pasar"); 
                setInvalidPass(true);
            }

        }).catch((error)=>{
            console.log("Existe un error al mostar la data del servidor local: " + error)
        })
    }

    return(
        <View style={ styles.viewStyle }>
            <View style={ styles.LogoContainer }>
                <Image             
                    source={ require('../../assets/ToUppLogoweb.png') }
                    style={ styles.Logo }          
                />
            </View> 
            <View style={ styles.ContainerWelcomeText}>
                <Text sytle={ styles.Welcome }>
                    Bienvenido a ToUp
                </Text>
                <Text>Ingrese su usuario y contraseña para seguir</Text>    
            </View> 
            <View style={ styles.TextInputContainer }>
                <TextInput
                    style={ styles.Input }
                    onChangeText={ onChangeUser }
                    value={ usrtext }
                    placeholder={ "Ingrese nombre de usuario" }
                />
                <TextInput
                    style={ styles.Input }
                    onChangeText={ onChangePass }
                    value={ pass }
                    placeholder={ "Ingrese su contraseña" }
                />
            </View>


            <View style={ invalidPass == true ? styles.MensajeEmergente : { display: 'none' } }>
                <Text style={{ color: 'red' }}> Usuario o contraseña inválida por favor intente de nuevo </Text>
            </View>


            <View style={ styles.ContainerButtons }>
                <GeneralButton 
                    style={ styles.Button }
                    text={ 'Login' }
                    onPress={()=>{
                        buscarUsuarioPorUserName();                        
                    }}
                />   
                <Pressable
                    onPress={()=>{
                        //Pagina de recuperación de contraseña
                    }}
                >  
                    <Text style={{ color: '#412234' }}>¿Olvidó su contraseña?</Text>       
                </Pressable>
            </View>
   
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        flexDirection: 'column'
    },
    LogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    Logo: {
        width: 117,        
        height: 140
    },
    ContainerWelcomeText: {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',        
        marginTop: 25,
        marginBottom: 25
    },
    Welcome: {
        fontWeight: 'bold',
        fontSize: 15        
    },
    TextInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input: {        
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        height: 50,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,        
        borderRadius: 10,  
        borderColor: '#cfcfcf',
        backgroundColor: '#ededed',
        paddingHorizontal: 15
    },
    ContainerButtons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {    
        marginTop: 5,
        marginBottom: 5,
    },
    MensajeEmergente: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
    }
});