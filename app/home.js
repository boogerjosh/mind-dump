import { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES, FONT } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
          headerShown: false
        }}
      />
      
      
      <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'absolute', zIndex: 2, backgroundColor: '#CCFF00', paddingHorizontal: 40, paddingVertical: 10, bottom: 40, right: 23, borderRadius: 55, textAlign: 'center'}}>
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
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <Popularjobs />
          {/* <Nearbyjobs /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
