import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SearchBar = () => {
     return (
          <View
               style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    paddingHorizontal: 20,
               }}>
               <View style={styles.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput
                         style={{ flex: 1, fontSize: 12 }}
                         placeholder="Search for food"
                    />
               </View>

               <View style={styles.sortBtn}>
                    <Icon name="tune" size={28} color={COLORS.white} />
               </View>
          </View>
     );
};

export default SearchBar;

const styles = StyleSheet.create({
     inputContainer: {
          flex: 1,
          height: 50,
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: COLORS.light,
          alignItems: 'center',
          paddingHorizontal: 20,
          //marginRight: 89,
     },
     sortBtn: {
          width: 50,
          height: 50,
          marginLeft: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
     },
});
