import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress, width, height,size,radius,color}) => {
  return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.button(width,height,radius)}>
        <Text style={styles.title(size)}>{title}</Text>
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
    backgroundColor:'#D06270',
  }),
  title:(size) => ({
    padding: 10,
    textAlign: 'center',
    fontSize: size,
    fontFamily: 'Lato-Bold',
    color: 'white',
  }),
});
