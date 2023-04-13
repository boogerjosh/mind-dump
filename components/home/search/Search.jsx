import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import searchIcon from "../../../assets/icons/search.png"
import {
  View,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import styles from './search.style';

const Search = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return <View style={{
    // backgroundColor:  "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
      <Text style={{
          }}>Mind<Text>Dump</Text></Text>
      <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: "#F3F4F8",
        borderRadius: 12 / 1.25,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image
          source={searchIcon}
          resizeMode='cover'
          style={{
            width: "60%",
            height: "60%",
            borderRadius: 12 / 1.25,
          }}
        />
      </TouchableOpacity>
  </View>
}

export default Search;