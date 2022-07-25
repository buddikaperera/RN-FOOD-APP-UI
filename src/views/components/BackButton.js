import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, Text } from 'react-native';
const BackButton = props => {
     const { navigation, onPress, btnText, iconName, iconSize } = props;
     return (
          <View style={styles.backHeader}>
               <Icon name={iconName} size={iconSize} onPress={onPress} />
               <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {btnText}
               </Text>
          </View>
     );
};

const styles = StyleSheet.create({
     backHeader: {
          paddingVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
     },
});

export default BackButton;
