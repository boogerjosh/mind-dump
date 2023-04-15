import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, useWindowDimensions, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';

import { COLORS } from "../../constants";
import DetailContent from "../../components/detail/DetailContent";
import DetailHeader from "../../components/common/header/DetailHeader";
import { GlobalStateContext } from '../../hook/GlobalState';

const Detail = () => {
  const router = useRouter();
  const route = useRoute();
  const { globalState } = useContext(GlobalStateContext);

  const listOfGifts = globalState.items;
  const itemId = parseInt(route.params.id);
  const filteredGIF = listOfGifts.find(gif => gif.id === itemId);

  const handleClickNavigate = () => {
    router.push(`/home`);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
      <Stack.Screen
        options={{
            headerShown: false
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailHeader handleClickNavigate={handleClickNavigate} urlImg={filteredGIF.urlImg
}/>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            paddingHorizontal: 34,
            paddingBottom: 30
          }}
        >
            <DetailContent detailText={filteredGIF} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
