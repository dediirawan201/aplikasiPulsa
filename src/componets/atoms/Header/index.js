import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({title}) => {
    return (
        <View style={styles.page}>
        <LinearGradient
        start={{x: 1, y: 3}}
        end={{x: 0, y: 0}}
        colors={['#9CAEFC', '#1B34B6','#e4efe9' ]}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>    
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    page:{
        height:133,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        overflow:'hidden'
    },
    title:{textAlign:'center',padding:40,fontFamily:'Lato-Regular',fontSize:48,color:'white'}
})
