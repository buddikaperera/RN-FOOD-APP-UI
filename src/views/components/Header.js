import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

const Header = () => {
     return (
          <View style={styles.header}>
               <View>
                    <View style={{ flexDirection: 'row' }}>
                         <Text style={{ fontSize: 14 }}>Hello,</Text>
                         <Text
                              style={{
                                   fontSize: 14,
                                   fontWeight: 'bold',
                                   marginLeft: 10,
                              }}>
                              James Bond
                         </Text>
                    </View>
                    <Text
                         style={{
                              marginTop: 2,
                              fontSize: 12,
                              color: COLORS.grey,
                         }}>
                         What do you want today?
                    </Text>
               </View>
               <Image
                    source={require('../../assets/person.png')}
                    style={{
                         height: 50,
                         width: 50,
                         resizeMode: 'cover',
                         borderRadius: 50 / 2,
                    }}
               />
          </View>
     );
};

export default Header;

const styles = StyleSheet.create({
     header: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
     },
});
