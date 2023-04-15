import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput } from "react-native";
import { COLORS, SIZES, FONT } from "../constants";
import { Stack, useRouter } from "expo-router";
// import { GlobalStateContext } from './GlobalState';
import { GlobalStateContext } from "../hook/GlobalState";
import { useContext } from 'react';

import {
  Welcome,
  Createcontent
} from "../components";

const CreatePage = () => {
  const { setGlobalState } = useContext(GlobalStateContext);
  const router = useRouter();

  const handleClick = (url) => {
    router.push(`/create-editor`);
    setGlobalState(prevState => ({ ...prevState, urlImage: url }));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    
    <TouchableOpacity style={{position: 'absolute', zIndex: 2, backgroundColor: '#CCFF00', paddingHorizontal: 125, paddingVertical: 10, bottom: 20, borderRadius: 55, left: 23, right: 23, textAlign: 'center'}}>
          {/* <Icon name="plus" size={16} color="#000000" />; */}
          <Text style={{fontFamily: FONT.mediumPoppin, fontWeight:600}}>Select a GIF</Text>
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
      <Createcontent handleClick={handleClick}/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default CreatePage