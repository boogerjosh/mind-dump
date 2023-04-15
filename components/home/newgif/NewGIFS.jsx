import {
  View,
  ActivityIndicator
} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { useContext } from 'react';

import styles from "./newgifs.style";
import NewGIFCard from "../../common/cards/newgif/NewGIFCard";
import useListData from "../../../hook/useListData";
import { COLORS, SIZES } from "../../../constants";
import { GlobalStateContext } from "../../../hook/GlobalState";

const NewGIFS = () => {
  const { globalState } = useContext(GlobalStateContext);
  const list = globalState.items;
  const { isLoading } = useListData();

  return (
    <View style={styles.container}>
      {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} style={{marginTop: SIZES.medium}}/>
        )  : (
          <View>
              <MasonryList
                data={list}
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
