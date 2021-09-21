import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export const HomePage = ({ navigation }) => {
    return(
       <View style={styles.viewStyle}>
           <Text>Esta es la vista de home</Text>
           <Pressable            
            style={ styles.navigationButton  }
            color="#841584"
            onPress={()=>{
                navigation.navigate('Searching');
            }}
           >              
            <Text style={{color:'white'}}> ¡A buscar compañeros! </Text>            
           </Pressable>
       </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        textAlign: 'center'
    },
    navigationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#03A1BD',
        margin: 'auto',
        width: 'auto',
        
    }
});
  



