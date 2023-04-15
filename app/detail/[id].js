import { SafeAreaView, ScrollView, View, ActivityIndicator } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useContext, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from "../../constants";
import DetailContent from "../../components/detail/DetailContent";
import DetailHeader from "../../components/common/header/DetailHeader";
import { GlobalStateContext } from '../../hook/GlobalState';

const Detail = () => {
  const router = useRouter();
  const route = useRoute();
  const { globalState } = useContext(GlobalStateContext);
  const [savedData, setSavedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const listOfGifts = globalState.items;
  const itemId = parseInt(route.params.id);
  const filteredGIF = listOfGifts.find(gif => gif.id === itemId);

  useEffect(() => {
    setIsLoading(true);
    // Save data to AsyncStorage
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('filteredGIF', JSON.stringify(filteredGIF));
      } catch (e) {
        console.log('Error saving data to AsyncStorage:', e);
      }
    };

    // Retrieve data from AsyncStorage
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('filteredGIF');
        if (value !== null) {
          setSavedData(JSON.parse(value));
        }
      } catch (e) {
        console.log('Error retrieving data from AsyncStorage:', e);
      }
    };

    // Call the storeData function once filteredGIF is available
    if (filteredGIF) {
      storeData();
    }

    getData();
    setIsLoading(false);
  }, [filteredGIF]);

  const handleClickNavigate = () => {
    router.push(`/home`);
  };

  return (
    <>
      {isLoading || savedData === null ? (
        <ActivityIndicator size='large' color={COLORS.primary} style={{marginTop: 13}}/>
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
          <Stack.Screen
            options={{
                headerShown: false
            }}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <DetailHeader handleClickNavigate={handleClickNavigate} urlImg={savedData.urlImg}/>
            <View
              style={{
                flex: 1,
                paddingTop: 30,
                paddingHorizontal: 34,
                paddingBottom: 30
              }}
            >
                <DetailContent detailText={savedData} />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Detail;
