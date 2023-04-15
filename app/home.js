import { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useRoute } from '@react-navigation/native';

import { COLORS, SIZES, FONT } from "../constants";
import {
  NewGIFS,
  Welcome,
} from "../components";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/create`);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      
      <TouchableOpacity onPress={handleNavigate} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'absolute', zIndex: 2, backgroundColor: '#CCFF00', paddingHorizontal: 40, paddingVertical: 10, bottom: 20, right: 23, borderRadius: 55, textAlign: 'center'}}>
          <Text style={{marginRight: 4}}>
            <Icon name="plus" size={16} color="#000000" />
          </Text>
          {/* <Icon name="plus" size={16} color="#000000" />; */}
          <Text style={{fontFamily: FONT.mediumPoppin, fontWeight:600}}>MindDump</Text>
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
        <NewGIFS />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
