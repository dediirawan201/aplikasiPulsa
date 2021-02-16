import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../componets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>DUA PUTRI</Text>
        <Text style={styles.subTItle}>
          Pulsa - Listrik - Pembayaran Tagihan - Aksesoris HP
        </Text>
        <Button
          title="PULSA"
          height={93}
          width={271}
          size={48}
          radius={18}
          onPress={() => navigation.navigate('Pulsa')}
        />
        <Button
          title="LISTRIK"
          height={93}
          width={271}
          size={48}
          radius={18}
          onPress={() => navigation.navigate('Listrik')}
        />
        <Button
          title="TAGIHAN"
          height={93}
          width={271}
          size={48}
          radius={18}
          onPress={() => navigation.navigate('Tagihan')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor:'white'},
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  title: {fontSize: 48, fontFamily: 'Lato-Regular'},
  subTItle: {fontSize: 11, marginBottom: 46, fontFamily: 'Lato-Regular'},
});
