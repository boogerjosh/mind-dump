import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS, SIZES, FONT } from "../constants";
import { Stack, useRouter } from "expo-router";
import { GlobalStateContext } from "../hook/GlobalState";
import { Header, Createcontent } from "../components";

const CreatePage = () => {
  const { setGlobalState } = useContext(GlobalStateContext);
  const router = useRouter();

  const handleClick = (url) => {
    // Save data to AsyncStorage
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('urlImg', JSON.stringify(url));
      } catch (e) {
        console.log('Error saving data to AsyncStorage:', e);
      }
    };

    storeData();
    setGlobalState((prevState) => ({ ...prevState, urlImage: url }));
    router.push(`/create-editor`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <TouchableOpacity style={styles.selectBtn} onPress={handleClick}>
        <Text style={styles.selectBtnText}>Select a GIF</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Header />
        </View>
        <Createcontent handleClick={handleClick} />
      </ScrollView>
    </SafeAreaView>
  );
};

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
    paddingVertical: 20, 
    bottom: 30, 
    borderRadius: 55, 
    left: 23, 
    right: 23, 
  },
  selectBtnText: {
    fontFamily: FONT.mediumPoppin,
    fontWeight: "600",
    textAlign: 'center',
    fontSize: 16
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default CreatePage;