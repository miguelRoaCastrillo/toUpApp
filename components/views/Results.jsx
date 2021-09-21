import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { GeneralButton } from '../GeneralItems/GeneralButton';
import { User } from '../GeneralItems/User';

export const Results = ({ navigation }) => {
    return(
        <>
            <View style={ styles.viewStyle }>
                {/*Temporalmente hasta tener la cantidad de usuarios por backend*/}
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </View>
            <View
                style={styles.viewStyle}
            >                
                <GeneralButton
                    text={"¡Volver a buscar!"}
                />                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 30,
        flexWrap: 'wrap',  
        textAlign: 'center'        
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