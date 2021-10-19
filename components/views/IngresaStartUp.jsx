import axios from 'axios';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Picker } from 'react-native';
import { GeneralButton } from '../GeneralItems/GeneralButton';


export const IngresaStartUp = ({ navigation }) => {

    const [ nombreStartUp, onChangeNombreStartUp ] = React.useState("");
    const [ temasSelector, setTemasSelector ] = React.useState([]);
    const [ tema, onChangeTema ] = React.useState("");
    const [ desc, onChangeDesc ] = React.useState("");

    React.useEffect(()=>{
        buscarTemas()
    }, [])
    
    React.useEffect( () => {

        //console.log("Este es el nombre de la empresa: " + nombreStartUp );
        //console.log("El tema seleccionado es: " + tema);        

    }, [ nombreStartUp,tema ] )

    const buscarTemas = () => {

        let url = `http://192.168.2.104:80/api/temas`;
        
        axios.get(url).then((response)=>{

            console.log("Los temas encontrados son: " + response.data);
            setTemasSelector(response.data);

        }).catch((error)=>{

            console.log("Existe un error al momento de buscar los temas: " + error);

        });

    }
    
    /*Estos son los campos para el emprendimiento*/
    /*
        pro_id = models.AutoField(primary_key=True)
        pro_nombre = models.CharField(max_length=150)
        pro_tem_id = models.ForeignKey(tema, on_delete=CASCADE)
    */
    return (
        <View style={ styles.viewStyle }>
            {/*Logo*/}            
            <View style={ styles.LogoContainer }>
                <Image             
                    source={ require('../../assets/ToUppLogoweb.png') }
                    style={ styles.Logo }          
                />
            </View> 
            {/*form*/}
            <View style={ styles.TextInputContainer }>
                {/*Nombre*/}
                <TextInput
                    style={ styles.Input }
                    onChangeText={ onChangeNombreStartUp }
                    value={ nombreStartUp }
                    placeholder={ "Ingrese nombre del proyecto" }
                />
                {/*Todos los temas*/}
                <View
                    style={ styles.Input }
                >
                    <Picker
                        selectedValue={ tema }
                        style={ styles.InputPicker }
                        onValueChange={( temaSeleccionado ) => { onChangeTema( temaSeleccionado ) } }                        
                    >        
                        <Picker.Item label="Elija un tema para el proyecto " value=""/>                
                        {temasSelector != undefined || temasSelector != null ?                          
                                temasSelector.map(( item, index ) => {
                                    return <Picker.Item label={ item.tem_nombre } value={ item.tem_id } key={ index }/>
                                })                                                                                
                            :
                                <Picker.Item label="No carga datos" value="No carga datos" />
                        }  
                    </Picker>                    
                </View> 
                {/*Nombre*/}
                <TextInput
                    style={ styles.Input }
                    onChangeText={ onChangeDesc }
                    value={ desc }
                    placeholder={ "Ingrese una descripcion corta" }
                />               
            </View>
            <View style={ styles.buttonContainer }>
                <Pressable
                    style={ styles.Button }                                    
                    text={ 'Buscar' }
                    onPress={()=>{
                        navigation.navigate('Results', { tema, nombreStartUp, desc });
                    }}
                >
                    <Text style={{textAlign: 'center', color: 'white'}}>Buscar empleados</Text>
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
        marginTop: 20,
        marginBottom: 20
    },
    Logo: {
        width: 117,        
        height: 145
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
    InputPicker: {
        width: '100%',
    },
    ItemStyleInputPicker:{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        backgroundColor: '#ededed'     
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    Button: {    
        height: 50,        
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03A1BD',        
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10
    },
});