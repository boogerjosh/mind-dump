import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import { COLORS, SIZES, FONT } from "../constants";
import { Stack, useRouter } from "expo-router";
import { GlobalStateContext } from "../hook/GlobalState";

import { Header, Createcontent } from "../components";

const CreatePage = () => {
  const { setGlobalState } = useContext(GlobalStateContext);
  const router = useRouter();

  const handleClick = (url) => {
    router.push(`/create-editor`);
    setGlobalState((prevState) => ({ ...prevState, urlImage: url }));
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
    paddingVertical: 10, 
    bottom: 20, 
    borderRadius: 55, 
    left: 23, 
    right: 23, 
    textAlign: 'center'
  },
  selectBtnText: {
    fontFamily: FONT.mediumPoppin,
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default CreatePage;