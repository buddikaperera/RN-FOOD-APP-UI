import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import categories from '../../../consts/categories';
import COLORS from '../../../consts/colors';

const ListCategories = ({
     category,
     setSelectedCategoryIndex,
     selectedCategoryIndex,
}) => {
     return (
          <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.categoriesListContainer}>
               {categories.map((category, index) => (
                    <TouchableOpacity
                         key={index}
                         activeOpacity={0.8}
                         onPress={() => setSelectedCategoryIndex(index)}>
                         <View
                              style={{
                                   backgroundColor:
                                        selectedCategoryIndex == index
                                             ? COLORS.primary
                                             : COLORS.secondary,
                                   ...styles.categoryBtn,
                              }}>
                              <View style={styles.categoryBtnImgCon}>
                                   <Image
                                        source={category.image}
                                        style={{
                                             height: 35,
                                             width: 35,
                                             resizeMode: 'cover',
                                        }}
                                   />
                              </View>
                              <Text
                                   style={{
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                        marginLeft: 10,
                                        color:
                                             selectedCategoryIndex == index
                                                  ? COLORS.white
                                                  : COLORS.primary,
                                   }}>
                                   {category.name}
                              </Text>
                         </View>
                    </TouchableOpacity>
               ))}
          </ScrollView>
     );
};

export default ListCategories;

const styles = StyleSheet.create({
     categoriesListContainer: {
          paddingVertical: 30,
          alignItems: 'center',
          paddingHorizontal: 20,
     },
     categoryBtn: {
          height: 45,
          width: 120,
          marginRight: 7,
          borderRadius: 30,
          alignItems: 'center',
          paddingHorizontal: 5,
          flexDirection: 'row',
     },
     categoryBtnImgCon: {
          height: 35,
          width: 35,
          backgroundColor: COLORS.white,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
     },
});
