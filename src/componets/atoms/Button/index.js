import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';

const Button = ({title, onPress, width, height,size,radius,color}) => {
  return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.button(width,height,radius)}>
      <LinearGradient
        start={{x: 2, y: 0}}
        end={{x: 0, y: 0}}
        colors={['#9CAEFC', '#1D6AE3', '#eef1f5']}>
        <Text style={styles.title(size)}>{title}</Text>
      </LinearGradient> 
    </View>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button:(width,height,radius) => ({
    borderWidth: 1,
    height: height,
    width: width,
    borderRadius: radius,
    marginBottom: 17,
    overflow: 'hidden',
  }),
  title:(size) => ({
    padding: 20,
    textAlign: 'center',
    fontSize: size,
    fontFamily: 'Lato-Bold',
    color: 'white',
  }),
});
