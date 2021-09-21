import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

export const User = () => {
    return(
        <>
            <Image
                source={ require('../../assets/user.png') }
                style={ styles.Logo }      
            />            
        </>
    )
}

const styles = StyleSheet.create({
    Logo:{
        margin: 'auto',
        width: 50,
        height: 50,
        marginTop: 5,
        marginBottom: 5        
    },
});