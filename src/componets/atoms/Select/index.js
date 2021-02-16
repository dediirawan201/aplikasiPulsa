import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
const Select = ({label}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
            <Picker
//   selectedValue={this.state.language}
//   style={{height: 50, width: 100}}
//   onValueChange={(itemValue, itemIndex) =>
//     this.setState({language: itemValue})
//   }
  >
  <Picker.Item label="Indihome" color="#8D92A3" value="java" />
  <Picker.Item label="Icon+" value="js" />
</Picker>
            </View>
        </View>
    )
}

export default Select;

const styles = StyleSheet.create({
    // page:{height:56},
    label:{fontSize:16, fontFamily:'Poppins-Regular', color:'#020202',},
    input:{
        borderWidth:1,
        borderColor:'#020202',
        borderRadius:8,
        paddingHorizontal:2,
        paddingVertical:0,
        height:56,
        borderWidth:3,
        paddingLeft:15,
        
    }
})
