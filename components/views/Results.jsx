import * as React from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { GeneralButton } from '../GeneralItems/GeneralButton';
import { User } from '../GeneralItems/User';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export const Results = ({ navigation, route }) => {

    const [ trabajadores, setTrabajadores ] = React.useState()
    const [ usuarios, setUsuarios ] = React.useState()

    const { tema, nombreStartUp } = route.params;

    React.useEffect(()=>{

        console.log( "El nombre del proyecto es: " + nombreStartUp )
        console.log( "El tema que se está buscando es: " + tema )

        buscarTrabajadoresPorTema()

    },[])

    const buscarTrabajadoresPorTema = () => {

        let url = `http://192.168.2.104/api/TrabadoresByParamsView?tema=${ tema }`;

        axios.get(url).then((response)=>{

            console.log("La data del response de trabajadores es: " + response.data)
            setTrabajadores(response.data)            

            console.log("Buscando usuarios")

        }).catch((error)=>{

            console.log("Existe un error al buscar los trabajadores del tema indicado: " + error)

        })
    }

    const agregarTrabajadorStartUp = () =>{
        console.log( "Agregando usuario a lista de trabajadores" )
    }

    return(
        <>           
            <SafeAreaView
                style={ styles.viewStyle }
            >
                <ScrollView> 
                    <View
                        style={ styles.infoStyles }
                    >
                        <Text
                            style={{ fontWeight: 'bold', color: '#03A1BD', fontSize: 35}}
                        >
                            { nombreStartUp }
                        </Text>
                        <Text
                            style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}
                        >
                            Estos son los resultados
                        </Text>
                        {trabajadores&&
                            trabajadores.map((trabajador, index)=>{
                                return (
                                    <Pressable
                                        onPress={()=>{

                                        }}
                                    >
                                        <View
                                            style={{marginTop: 5, marginBottom: 5}}    
                                        >
                                            <User
                                                style={ styles.users }
                                                key={ index }
                                                Nombre={ trabajador.tra_usr_nombre }
                                                ApellidoPaterno={ trabajador.tra_usr_apellidoPaterno }
                                                ApellidoMaterno={ trabajador.tra_usr_apellidoMaterno }
                                                Cargo={ trabajador.tra_car_nombre }
                                            />
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                        <GeneralButton
                            text={"¡Volver a buscar!"}
                        />  
                    </View>              
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{        
        flexDirection: 'column',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo:{
        margin: 'auto',
        width: 125,
        height: 125,
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
    infoStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    users: {
        marginTop: 10,
        marginBottom: 10
    }
});