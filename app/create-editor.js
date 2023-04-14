import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput } from "react-native";
import { Stack, useRouter } from "expo-router";
import {
    Welcome,
    Createcontent
  } from "../components";
import { COLORS, icons, images, SIZES, FONT } from "../constants";

const CreateEditor = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
        <Stack.Screen
        options={{
            headerShown: false
        }}
        />
        
        <TouchableOpacity style={{position: 'absolute', zIndex: 2, backgroundColor: '#CCFF00', paddingHorizontal: 125, paddingVertical: 10, bottom: 20, borderRadius: 55, left: 23, right: 23, textAlign: 'center'}}>
            {/* <Icon name="plus" size={16} color="#000000" />; */}
            <Text style={{fontFamily: FONT.mediumPoppin, fontWeight:600}}>Simpan</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View
            style={{
            flex: 1,
            padding: SIZES.medium,
            }}
        >
            <Welcome
            />

        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateEditor;