import {
  View,
  ActivityIndicator
} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { useContext, useEffect, useState } from 'react';

import styles from "./newgifs.style";
import NewGIFCard from "../../common/cards/newgif/NewGIFCard";
import useListData from "../../../hook/useListData";
import { COLORS, SIZES } from "../../../constants";
import { GlobalStateContext } from "../../../hook/GlobalState";

const NewGIFS = ({searchTerm}) => {
  const { globalState } = useContext(GlobalStateContext);
  const list = globalState.items;
  const { isLoading } = useListData();
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    if (searchTerm && list) {
      const filteredGIFs = list.filter(gif => gif.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSavedData(filteredGIFs)
    } else if (searchTerm === '') {
      setSavedData(list)
    }
  }, [searchTerm, list]);

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
