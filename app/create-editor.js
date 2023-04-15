import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useContext } from 'react';

import {
    Header,
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
    if (title === '') {
        alert('Title cannot be empty.');
    } else if (description === '') {
        alert('Description cannot be empty.');
    } else {
        let newObjItem = { id: globalState.items.length > 0 ? globalState.items[globalState.items.length-1].id + 1 : 1, title, description, urlImg, date: formattedDate };
        setGlobalState(prevState => ({ ...prevState, items: [...prevState.items, newObjItem] }));
        router.push(`/home`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen
        options={{
            headerShown: false
        }}
        />
        
        <TouchableOpacity onPress={handleNavigate} style={styles.selectBtn}>
            <Text style={styles.selectBtnText}>Simpan</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={styles.contentContainer}
            >
                <Header/>
                
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


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightWhite,
      position: "relative",
    },
    selectBtn: {
      position: 'absolute', 
      zIndex: 2, 
      backgroundColor: '#CCFF00', 
      paddingHorizontal: 125, 
      paddingVertical: 10, 
      bottom: 20, 
      borderRadius: 55, 
      left: 23, 
      right: 23, 
      textAlign: 'center'
    },
    selectBtnText: {
      fontFamily: FONT.mediumPoppin, 
      fontWeight:600
    },
    contentContainer: {
      flex: 1,
      padding: SIZES.medium,
    },
  });

export default CreateEditor;