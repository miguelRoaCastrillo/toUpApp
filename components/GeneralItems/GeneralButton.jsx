import * as React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export const GeneralButton = ({ text, onPress }) => {
    return(
        <>
            <Pressable
                style={
                    styles.Button
                }
                onPress={
                    onPress
                }
            >
                <Text style={ styles.textButton }> { text } </Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,                
        backgroundColor: '#03A1BD',                
        marginTop: 10,
        marginBottom: 15 
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold'
    }
});