import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useContext } from 'react';

import {
    Welcome,
} from "../components";
import { COLORS, SIZES, FONT } from "../constants";
import { GlobalStateContext } from '../hook/GlobalState';
import CreateEditorContent from '../components/create-editor/CreateEditorContent';

const CreateEditor = () => {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const urlImg = globalState.urlImage;

  //Date
  const currentDate = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = currentDate.getDate();
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }
  const formattedDate = `${monthNames[currentDate.getMonth()]} ${day}${daySuffix} ${currentDate.getFullYear()}`;

  const handleNavigate = () => {
    router.push(`/detail`);
    setGlobalState(prevState => ({ ...prevState, item: { title:  title, description: description, urlImg: urlImg, date: formattedDate} }));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
        <Stack.Screen
        options={{
            headerShown: false
        }}
        />
        
        <TouchableOpacity onPress={handleNavigate} style={{position: 'absolute', zIndex: 2, backgroundColor: '#CCFF00', paddingHorizontal: 125, paddingVertical: 10, bottom: 20, borderRadius: 55, left: 23, right: 23, textAlign: 'center'}}>
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
                
                <CreateEditorContent 
                    urlImg={urlImg} 
                    title={title} 
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateEditor;