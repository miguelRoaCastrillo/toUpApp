import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GeneralButton } from '../GeneralItems/GeneralButton';

export const Searching = ({ navigation }) => {
    return(
        <View style={styles.viewStyle}>
            <Image
                source={ require('../../assets/loading.png') }
                style={ styles.Logo }          
            />
            <Text>
                Buscando resultados de posibles compañeros
            </Text>
            <GeneralButton
                text={'Detener la búsqueda'}
            />
            <GeneralButton
                text={'Ver Resultados'}
                onPress={()=>{
                    navigation.navigate('Results');
                }}
            />
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
});