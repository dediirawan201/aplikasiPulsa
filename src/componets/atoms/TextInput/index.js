import React from 'react';
import { StyleSheet, TextInput as TextInputRN, View } from 'react-native';

const TextInput = ({placeholder}) => {
    return (
        <View>
            <TextInputRN style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    label:{fontSize:16, fontFamily:'Poppins-Regular', color:'#020202'},
    input:{
        borderWidth:3,
        borderColor:'black',
        borderRadius:8,
        padding:10,
        height:56,
        paddingLeft:25,
        fontFamily:'Lato-Regular',
        fontSize:14
    }
})
