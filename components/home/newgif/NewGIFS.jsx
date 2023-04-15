import {
  View,
  ActivityIndicator
} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./newgifs.style";
import NewGIFCard from "../../common/cards/newgif/NewGIFCard";
import useListData from "../../../hook/useListData";
import { COLORS, SIZES } from "../../../constants";
import { GlobalStateContext } from "../../../hook/GlobalState";

const NewGIFS = ({searchTerm}) => {
  const { isLoading } = useListData();
  const { globalState } = useContext(GlobalStateContext);
  const lists = globalState.items; // Ini data
  const [savedData, setSavedData] = useState(null);
  const [isLoadingOther, setIsLoading] = useState(false);

  // Save data to AsyncStorage
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('lists', JSON.stringify(lists));
    } catch (e) {
      console.log('Error saving data to AsyncStorage:', e);
    }
  };

  // Retrieve data from AsyncStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lists');
      // console.log(JSON.parse(value))
      if (value !== null) {
        let parisngData = JSON.parse(value)
        setSavedData(parisngData);
      }
    } catch (e) {
      console.log('Error retrieving data from AsyncStorage:', e);
    }
  };

  useEffect(() => {
    // Call the storeData function once filteredGIF is available
    if (lists) {
      storeData();
    }

    getData();
  }, [lists]);

  useEffect(() => {
     if (searchTerm) {
      const filteredGIF = savedData.filter(gif => gif.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSavedData(filteredGIF);
     } else {
      console.log(lists);
      setSavedData(lists);
     }
  }, [searchTerm, lists])

  return (
    <View style={styles.container}>
      {isLoading || savedData === null ? (
          <ActivityIndicator size='large' color={COLORS.primary} style={{marginTop: SIZES.medium}}/>
        )  : (
          <View>
              <MasonryList
                data={savedData}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => <NewGIFCard item={item} index={i} />}
                refreshing={false}
              />
          </View>
        )}
    </View>
  );
};

export default NewGIFS;
