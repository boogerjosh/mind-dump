import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, useWindowDimensions, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useContext } from 'react';

import { COLORS } from "../constants";
import DetailContent from "../components/detail/DetailContent";
import DetailHeader from "../components/common/header/DetailHeader";
import { GlobalStateContext } from '../hook/GlobalState';

const Detail = () => {
  const router = useRouter();
  const { globalState } = useContext(GlobalStateContext);
  const detailItem = globalState.item;

  const handleClickNavigate = () => {
    router.push(`/home`);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
      <Stack.Screen
        options={{
            headerShown: false
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailHeader handleClickNavigate={handleClickNavigate} urlImg={detailItem.urlImg}/>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            paddingHorizontal: 34
          }}
        >
            <DetailContent detailText={detailItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
